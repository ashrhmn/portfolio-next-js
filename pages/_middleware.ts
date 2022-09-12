import { NextResponse } from "next/server";
import { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const geo = request.geo;
  const headers = request.headers;
  console.log({ geo, headers });
  return NextResponse.next();
  //   return NextResponse.redirect(new URL("/about-2", request.url));
}

export const config = {
  matcher: ["/"],
};
