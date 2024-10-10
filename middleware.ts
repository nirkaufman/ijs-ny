import {NextResponse} from "next/server";

export function middleware(request: Request): NextResponse {
  const response = NextResponse.next();

  response.headers.set('Access-Control-Allow-Origin', '*');

  return response;
}
