// pages/_middleware.ts

import { NextRequest, NextResponse } from 'next/server';

const PUBLIC_FILE = /\.(.*)$/;

const stripDefaultLocale = (str: string): string => {
  const stripped = str.replace('/default', '');
  return stripped;
};

export function middleware(request: NextRequest) {
  const shouldHandleLocale =
    !PUBLIC_FILE.test(request.nextUrl.pathname) &&
    !request.nextUrl.pathname.includes('/api/') &&
    request.nextUrl.locale === 'default';

  const siteUrl =
    process.env.NODE_ENV === 'production'
      ? 'https://gagliardistefano-fe.vercel.app'
      : 'http://localhost:3000';

  return shouldHandleLocale
    ? NextResponse.redirect(
        `${siteUrl}/it${stripDefaultLocale(
          request.nextUrl.pathname
        )}${request.nextUrl.search}`
      )
    : undefined;
}
