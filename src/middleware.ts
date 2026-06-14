import { NextResponse } from 'next/server';

export function middleware(request: any) {
  const { pathname } = request.nextUrl;
  // ถ้าเข้าหน้าแรก ให้เด้งไป /th
  if (pathname === '/') {
    return NextResponse.redirect(new URL('/th', request.url));
  }
  return NextResponse.next();
}