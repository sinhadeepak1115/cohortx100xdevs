import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

let requestCount = 0;

export function middleware(request: NextRequest) {
  requestCount++;
  console.log("Number of request is " + requestCount);
  return NextResponse.next();
}

export const config = {
  matcher: "/api/:path*",
};
