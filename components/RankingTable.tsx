import Link from "next/link";
import type { CompanyWithScore } from "@/lib/ranking";
import { ScoreBadge } from "./ScoreBadge";

export function RankingTable({ rows }: { rows: CompanyWithScore[] }) {
  if (rows.length === 0) {
    return (
      <p className="rounded-lg border border-dashed border-ink-900/20 p-6 text-center text-sm text-ink-600">
        Ningún valor del universo actual cumple estos filtros.
      </p>
    );
  }

  return (
    <div className="overflow-x-auto rounded-lg border border-ink-900/10">
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
            <tr key={company.ticker} className="border-b border-ink-900/5 last:border-0 hover:bg-accent/5">
              <td className="px-4 py-3 text-ink-500">{idx + 1}</td>
              <td className="px-4 py-3">
                <Link href={`/acciones/${company.ticker}`} className="font-medium text-ink-950 hover:text-accent-dark">
                  {company.name}
                </Link>
                <div className="text-xs text-ink-500">{company.ticker}</div>
              </td>
              <td className="px-4 py-3 text-ink-700">{company.sector}</td>
              <td className="px-4 py-3 text-ink-700">{company.region}</td>
              <td className="px-4 py-3 text-ink-700">
                {company.price.toLocaleString("es-ES", { style: "currency", currency: company.currency })}
              </td>
              <td className="px-4 py-3 text-ink-700">
                {company.dividendYield > 0 ? `${(company.dividendYield * 100).toFixed(1)}%` : "—"}
              </td>
              <td className="px-4 py-3">
                <ScoreBadge score={score.totalScore} size="sm" />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
