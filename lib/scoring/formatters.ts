export const pct = (v: number) => `${(v * 100).toFixed(1)}%`;
export const ratioX = (v: number) => `${v.toFixed(1)}x`;
export const num = (v: number) => v.toFixed(1);
export const years = (v: number) => `${Math.round(v)} años`;
export const ppt = (v: number) => `${v >= 0 ? "+" : ""}${v.toFixed(1)} p.p.`;

export function phrase(base: string, goodAdj: string, badAdj: string) {
  return (formatted: string, isPositive: boolean) => `${base} ${isPositive ? goodAdj : badAdj} (${formatted})`;
}
