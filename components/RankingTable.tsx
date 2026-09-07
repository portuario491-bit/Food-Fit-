import Link from "next/link";
import type { CompanyWithScore } from "@/lib/ranking";
import { ScoreBadge } from "./ScoreBadge";
import { SectorIcon } from "@/lib/sectorIcons";

function bandBorder(score: number) {
  if (score >= 75) return "border-l-accent";
  if (score >= 55) return "border-l-gold";
  return "border-l-ink-500/30";
}

export function RankingTable({ rows }: { rows: CompanyWithScore[] }) {
  if (rows.length === 0) {
    return (
      <p className="rounded-lg border border-dashed border-ink-900/20 p-6 text-center text-sm text-ink-600">
        Ningún valor del universo actual cumple estos filtros.
      </p>
    );
  }

  return (
    <div className="overflow-x-auto rounded-xl border border-ink-900/10 shadow-card">
      <table className="w-full min-w-[720px] border-collapse text-sm">
        <thead>
          <tr className="border-b border-ink-900/10 bg-ink-950/[0.03] text-left text-ink-600">
            <th className="px-4 py-3 font-medium">#</th>
            <th className="px-4 py-3 font-medium">Empresa</th>
            <th className="px-4 py-3 font-medium">Sector</th>
            <th className="px-4 py-3 font-medium">Región</th>
            <th className="px-4 py-3 font-medium">Precio</th>
            <th className="px-4 py-3 font-medium">Yield</th>
            <th className="px-4 py-3 font-medium">Score</th>
          </tr>
        </thead>
        <tbody>
          {rows.map(({ company, score }, idx) => (
            <tr
              key={company.ticker}
              className={`border-b border-l-4 border-ink-900/5 bg-white transition-colors last:border-b-0 hover:bg-accent-soft/40 ${bandBorder(score.totalScore)}`}
            >
              <td className="px-4 py-3 text-ink-500">{idx + 1}</td>
              <td className="px-4 py-3">
                <Link href={`/acciones/${company.ticker}`} className="font-medium text-ink-950 hover:text-accent-dark">
                  {company.name}
                </Link>
                <div className="text-xs text-ink-500">{company.ticker}</div>
              </td>
              <td className="px-4 py-3 text-ink-700">
                <span className="inline-flex items-center gap-1.5">
                  <SectorIcon sector={company.sector} className="h-4 w-4" />
                  {company.sector}
                </span>
              </td>
              <td className="px-4 py-3 text-ink-700">{company.region}</td>
              <td className="px-4 py-3 text-ink-700">
                {company.price.toLocaleString("es-ES", { style: "currency", currency: company.currency })}
              </td>
              <td className="px-4 py-3 text-ink-700">
                {company.dividendYield != null && company.dividendYield > 0
                  ? `${(company.dividendYield * 100).toFixed(1)}%`
                  : "—"}
              </td>
              <td className="px-4 py-3" title={`${score.subscoresWithData}/6 sub-scores con datos`}>
                <ScoreBadge score={score.totalScore} size="sm" />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
