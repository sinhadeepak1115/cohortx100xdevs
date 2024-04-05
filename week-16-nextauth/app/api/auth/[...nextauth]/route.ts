import { NextRequest, NextResponse } from "next/server";

export function GET(
  req: NextRequest,
  { params }: { params: { nextauth: string[] } },
) {
  return NextResponse.json({
    message: "Handler",
  });
}
