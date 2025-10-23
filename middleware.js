import { NextResponse } from "next/server";

export function middleware(req) {
  const url = req.nextUrl.clone();
  const host = req.headers.get("host");

  // Redirect to www + HTTPS in one step
  if (host === "bestechparts.ae" || req.nextUrl.protocol === "http:") {
    url.protocol = "https:";
    url.hostname = "www.bestechparts.ae";
    return NextResponse.redirect(url, 301);
  }

  return NextResponse.next();
}

export const config = {
  matcher: "/:path*", // run on all routes
};
