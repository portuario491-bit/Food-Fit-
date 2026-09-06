-- Esquema preparado para cuando se conecte un proyecto Supabase real.
-- No se ejecuta automáticamente: aplicar con `supabase db push` o el SQL editor.
-- Ver /docs/scoring-methodology.md para el significado de cada campo relevante al scoring.

create extension if not exists "pgcrypto";

-- ---------------------------------------------------------------------------
-- Universo de empresas
-- ---------------------------------------------------------------------------
create table if not exists companies (
  ticker text primary key,
  name text not null,
  sector text not null,
  region text not null,
  country text not null,
  exchange text not null,
  currency text not null,
  is_mock boolean not null default true,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

-- Precios diarios. Tabla de solo-inserción (append-only): nunca se actualizan
-- filas existentes, solo se añaden nuevas fechas.
create table if not exists price_history (
  ticker text not null references companies (ticker) on delete cascade,
  date date not null,
  close numeric not null,
  adj_close numeric,
  volume bigint,
  source text not null default 'mock',
  primary key (ticker, date)
);

create table if not exists dividend_history (
  id uuid primary key default gen_random_uuid(),
  ticker text not null references companies (ticker) on delete cascade,
  ex_date date not null,
  pay_date date,
  amount numeric not null,
  currency text not null,
  source text not null default 'mock',
  created_at timestamptz not null default now()
);

-- Snapshots de fundamentales. NUNCA se sobreescriben (append-only): cada fila
-- es la foto de un periodo tal y como se conocía en fetched_at. Esto permite
-- reconstruir el scoring histórico sin look-ahead bias (ver metodología, punto 7).
create table if not exists fundamentals_snapshot (
  id uuid primary key default gen_random_uuid(),
  ticker text not null references companies (ticker) on delete cascade,
  period_end date not null,
  period_type text not null check (period_type in ('annual', 'quarter')),
  fetched_at timestamptz not null default now(),
  source text not null default 'mock',
  data jsonb not null, -- payload completo mapeado a CompanyFundamentals
  created_at timestamptz not null default now()
);

create index if not exists fundamentals_snapshot_ticker_fetched_idx
  on fundamentals_snapshot (ticker, fetched_at desc);

-- ---------------------------------------------------------------------------
-- Scoring
-- ---------------------------------------------------------------------------

-- Pesos de cada sub-score por perfil de inversión. Sembrado inicialmente desde
-- código (lib/scoring/weights.ts); esta tabla permite editarlos desde un panel
-- de administración sin desplegar código, en una fase posterior.
create table if not exists scoring_weights (
  profile_key text not null,
  subscore_key text not null check (subscore_key in ('dividend', 'growth', 'quality', 'valuation', 'risk', 'momentum')),
  weight numeric not null check (weight >= 0 and weight <= 1),
  weights_version int not null default 1,
  updated_at timestamptz not null default now(),
  primary key (profile_key, subscore_key, weights_version)
);

-- Histórico append-only de puntuaciones calculadas. Nunca se sobreescribe: un
-- recálculo inserta una fila nueva con su propio calculated_at.
create table if not exists scores (
  id uuid primary key default gen_random_uuid(),
  ticker text not null references companies (ticker) on delete cascade,
  profile_key text not null,
  calculated_at timestamptz not null default now(),
  universe_version text not null,
  weights_version int not null,
  dividend_score int not null check (dividend_score between 0 and 100),
  growth_score int not null check (growth_score between 0 and 100),
  quality_score int not null check (quality_score between 0 and 100),
  valuation_score int not null check (valuation_score between 0 and 100),
  risk_score int not null check (risk_score between 0 and 100),
  momentum_score int not null check (momentum_score between 0 and 100),
  total_score int not null check (total_score between 0 and 100)
);

create index if not exists scores_ticker_profile_calculated_idx
  on scores (ticker, profile_key, calculated_at desc);

create table if not exists score_explanations (
  id uuid primary key default gen_random_uuid(),
  score_id uuid not null references scores (id) on delete cascade,
  metric_key text not null,
  subscore_key text not null,
  contribution numeric not null,
  direction text not null check (direction in ('positive', 'negative')),
  label_es text not null
);

create index if not exists score_explanations_score_idx on score_explanations (score_id);

-- ---------------------------------------------------------------------------
-- Usuarios (Supabase Auth ya provee auth.users; estas tablas son las propias
-- de la app, todas con RLS por user_id)
-- ---------------------------------------------------------------------------

create table if not exists watchlists (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users (id) on delete cascade,
  name text not null default 'Mi watchlist',
  created_at timestamptz not null default now()
);

create table if not exists watchlist_items (
  watchlist_id uuid not null references watchlists (id) on delete cascade,
  ticker text not null references companies (ticker) on delete cascade,
  added_at timestamptz not null default now(),
  primary key (watchlist_id, ticker)
);

create table if not exists portfolios (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users (id) on delete cascade,
  name text not null default 'Mi cartera',
  created_at timestamptz not null default now()
);

create table if not exists portfolio_positions (
  id uuid primary key default gen_random_uuid(),
  portfolio_id uuid not null references portfolios (id) on delete cascade,
  ticker text not null references companies (ticker) on delete cascade,
  shares numeric not null check (shares > 0),
  cost_basis numeric,
  added_at timestamptz not null default now()
);

-- Entitlements de plan (preparado para Stripe; no se activa en el MVP).
create table if not exists entitlements (
  user_id uuid primary key references auth.users (id) on delete cascade,
  plan text not null default 'free' check (plan in ('free', 'pro', 'pro_annual')),
  stripe_customer_id text,
  stripe_subscription_id text,
  current_period_end timestamptz,
  updated_at timestamptz not null default now()
);

-- ---------------------------------------------------------------------------
-- Row Level Security
-- ---------------------------------------------------------------------------

alter table watchlists enable row level security;
alter table watchlist_items enable row level security;
alter table portfolios enable row level security;
alter table portfolio_positions enable row level security;
alter table entitlements enable row level security;

create policy "Los usuarios gestionan sus propias watchlists" on watchlists
  for all using (auth.uid() = user_id) with check (auth.uid() = user_id);

create policy "Los usuarios gestionan los items de sus watchlists" on watchlist_items
  for all using (
    exists (select 1 from watchlists w where w.id = watchlist_id and w.user_id = auth.uid())
  ) with check (
    exists (select 1 from watchlists w where w.id = watchlist_id and w.user_id = auth.uid())
  );

create policy "Los usuarios gestionan sus propias carteras" on portfolios
  for all using (auth.uid() = user_id) with check (auth.uid() = user_id);

create policy "Los usuarios gestionan las posiciones de sus carteras" on portfolio_positions
  for all using (
    exists (select 1 from portfolios p where p.id = portfolio_id and p.user_id = auth.uid())
  ) with check (
    exists (select 1 from portfolios p where p.id = portfolio_id and p.user_id = auth.uid())
  );

create policy "Los usuarios ven y actualizan su propio entitlement" on entitlements
  for select using (auth.uid() = user_id);
