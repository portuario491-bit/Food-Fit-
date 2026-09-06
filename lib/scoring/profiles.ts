import type { ProfileKey } from "./types";

export interface ProfileMeta {
  key: ProfileKey;
  label: string;
  tagline: string;
  description: string;
  fitFor: string;
}

export const PROFILES: Record<ProfileKey, ProfileMeta> = {
  dividendos: {
    key: "dividendos",
    label: "Dividendos",
    tagline: "Ingresos periódicos y sostenibles",
    description:
      "Prioriza empresas con rentabilidad por dividendo atractiva y sostenible, respaldada por beneficios y caja, más que por el dividendo más alto posible.",
    fitFor: "un inversor que busca generar ingresos periódicos y valora la sostenibilidad del pago por encima del importe inicial.",
  },
  crecimiento: {
    key: "crecimiento",
    label: "Crecimiento",
    tagline: "Expansión de ingresos y beneficios",
    description:
      "Prioriza empresas que crecen en ingresos, beneficios y caja de forma sostenida, con la calidad del negocio como filtro frente al crecimiento especulativo.",
    fitFor: "un inversor con horizonte largo dispuesto a asumir más volatilidad a cambio de mayor potencial de revalorización.",
  },
  "dividend-growth": {
    key: "dividend-growth",
    label: "Crecimiento de dividendos",
    tagline: "El dividendo de hoy importa menos que su trayectoria",
    description:
      "Busca un equilibrio entre dividendo, crecimiento y calidad: empresas que aumentan su dividendo de forma consistente, no necesariamente las de mayor yield inicial.",
    fitFor: "un inversor de largo plazo que prioriza la trayectoria de crecimiento del dividendo sobre la rentabilidad inicial.",
  },
  calidad: {
    key: "calidad",
    label: "Calidad",
    tagline: "Negocios sólidos y rentables",
    description:
      "Prioriza rentabilidad sobre el capital, márgenes y solidez de balance por encima de cualquier otro factor, con la valoración como filtro.",
    fitFor: "un inversor que prioriza la solidez del negocio y puede tolerar pagar una valoración razonable por ella.",
  },
  "calidad-precio": {
    key: "calidad-precio",
    label: "Calidad a precio razonable",
    tagline: "Buenos negocios, sin pagar cualquier precio",
    description:
      "Combina calidad del negocio con disciplina de valoración: penaliza tanto la baja calidad como la sobrevaloración, aunque el negocio sea excelente.",
    fitFor: "un inversor que busca negocios de calidad pero es sensible al precio de entrada.",
  },
  equilibrado: {
    key: "equilibrado",
    label: "Equilibrado",
    tagline: "Ningún factor domina sobre los demás",
    description:
      "Reparte el peso de forma uniforme entre dividendo, crecimiento, calidad, valoración y riesgo, sin sobreponderar ningún factor.",
    fitFor: "un inversor generalista que no tiene una preferencia marcada por ningún estilo concreto.",
  },
};

export const PROFILE_LIST: ProfileMeta[] = Object.values(PROFILES);
