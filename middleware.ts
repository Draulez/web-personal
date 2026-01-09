import { NextRequest, NextResponse } from "next/server";
import { locales, defaultLocale } from "@/lib/i18n/locale";

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;

  // ⛔️ Excluir assets y rutas internas
  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/api") ||
    pathname.includes(".")
  ) {
    return NextResponse.next();
  }

  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}`)
  );

  if (pathnameHasLocale) {
    return NextResponse.next();
  }

  const locale =
    request.headers
      .get("accept-language")
      ?.split(",")[0]
      .split("-")[0] || defaultLocale;

  const supportedLocale = locales.includes(locale as any)
    ? locale
    : defaultLocale;

  request.nextUrl.pathname = `/${supportedLocale}${pathname}`;
  return NextResponse.redirect(request.nextUrl);
}
export const config = {
  matcher: ["/((?!_next|api|.*\\..*).*)"],
};
