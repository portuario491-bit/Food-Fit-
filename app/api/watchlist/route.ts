import { NextRequest, NextResponse } from "next/server";
import { getDataProvider } from "@/lib/data";
import { getPriceService } from "@/lib/prices";
import { buildRanking } from "@/lib/ranking";

export async function GET(request: NextRequest) {
  const tickers = (request.nextUrl.searchParams.get("tickers") ?? "")
    .split(",")
    .map((t) => t.trim().toUpperCase())
    .filter(Boolean);

  const provider = getDataProvider();
  const universe = await provider.listUniverse();
  const rows = buildRanking(universe, "equilibrado").filter((row) => tickers.includes(row.company.ticker));
  const quotes = await getPriceService().getQuotes(rows.map((row) => row.company));

  return NextResponse.json({ rows, quotes: Object.fromEntries(quotes), isMock: provider.isMock });
}
