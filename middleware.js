import { NextResponse } from "next/server";

export function middleware(req) {
  const host = req.headers.get("host");

  // Redirect only non-www to www
  if (host === "bestechparts.ae") {
    const url = req.nextUrl.clone();
    url.hostname = "www.bestechparts.ae";
    return NextResponse.redirect(url, 301);
  }

  return NextResponse.next();
}

export const config = {
  matcher: "/:path*",
};
