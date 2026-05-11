import { NextResponse } from "next/server";

export function middleware(req) {
  const host = req.headers.get("host");
  const url = req.nextUrl.clone();
  const pathname = url.pathname;

  // ✅ Convert uppercase product URLs to lowercase
  if (pathname.startsWith("/products/")) {
    const lowerCasePath = pathname.toLowerCase();

    if (pathname !== lowerCasePath) {
      url.pathname = lowerCasePath;

      return NextResponse.redirect(url, 301);
    }
  }

  // ✅ Force non-www → www
  if (host === "bestechparts.ae") {
    url.hostname = "www.bestechparts.ae";

    return NextResponse.redirect(url, 301);
  }

  return NextResponse.next();
}

export const config = {
  matcher: "/:path*",
};