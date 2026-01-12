import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "../../app/globals.css";
import { LocaleProvider } from "@/components/LocaleProvider";
import { Locale, locales, defaultLocale } from "@/lib/i18n/locale";
import { getHeaderContent } from "@/lib/i18n/getHeaderContent";
import { getFooterContent } from "@/lib/i18n/getFooterContent";

export const metadata = {
  title: "David | Software Developer",
  description: "Web personal de David, desarrollador de software",
};

export default async function RootLayout({
  children, params
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale: localeParam } = await params;
  // Validar y asegurar que el locale es válido
  const locale = (locales.includes(localeParam as Locale) ? localeParam : defaultLocale) as Locale;
  
  const [headerContent, footerContent] = await Promise.all([
    getHeaderContent(locale),
    getFooterContent(locale),
  ]);

  return (
    <html className="dark" lang={locale}>
        <LocaleProvider locale={locale}>
        <body className="antialiased">
          <div className="bg-(--color-background) text-(--color-text-primary) min-h-screen flex flex-col">
            <Header content={headerContent} />
            <main>{children}</main>
            <Footer content={footerContent} />
          </div>
        </body>
        </LocaleProvider>
    </html >
  );
}
