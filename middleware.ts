import { NextResponse } from "next/server";

export function middleware(request: any) {
  // console.log("hello");
  // return Response.json({
  //   msg: "hello there",
  // });
  return NextResponse.redirect(new URL("/", request.url));
}

export const config = {
  matcher: ["/about/:path*"],
};
