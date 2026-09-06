import type { MetricContribution } from "@/lib/scoring/types";

export function MetricTable({ metrics }: { metrics: MetricContribution[] }) {
  return (
    <table className="w-full border-collapse text-sm">
      <tbody>
        {metrics.map((m) => (
          <tr key={m.key} className="border-b border-ink-900/5 last:border-0">
            <td className="py-1.5 pr-4 text-ink-600">{m.label}</td>
            <td className="py-1.5 text-right font-medium text-ink-900">{m.formattedValue}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
