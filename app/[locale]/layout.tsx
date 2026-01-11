import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "../../app/globals.css";
import { LocaleProvider } from "@/components/LocaleProvider";
import { Locale } from "@/lib/i18n/locale";
import { getHomeContent } from "@/lib/i18n/getHomeContent";

export const metadata = {
  title: "David | Software Developer",
  description: "Web personal de David, desarrollador de software",
};

export default async function RootLayout({
  children, params
}: Readonly<{
  children: React.ReactNode;
  params: { locale: Locale };
}>) {
  const { locale } = await params;

  return (
    <html className="dark" lang={locale}>
        <LocaleProvider locale={locale}>
        <body className="antialiased">
          <div className="bg-(--color-background) text-(--color-text-primary) min-h-screen flex flex-col">
            <Header content={await getHomeContent(locale)}/>
            <main>{children}</main>
            <Footer />
          </div>
        </body>
        </LocaleProvider>
    </html >
  );
}
