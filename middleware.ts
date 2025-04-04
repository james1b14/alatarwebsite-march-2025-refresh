import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// Simple middleware to handle redirects
export function middleware(request: NextRequest) {
  // Handle redirects for the root path if needed
  if (request.nextUrl.pathname === '/') {
    return NextResponse.next();
  }
  
  return NextResponse.next();
}

export const config = {
  matcher: [
    /*
     * Match only the root path:
     * - '/' (homepage)
     */
    '/',
  ],
};
