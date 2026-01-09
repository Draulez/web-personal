import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ThemeProvider from "@/components/ThemeProvider";
import "../../app/globals.css";

import { log } from "console";
import { LocaleProvider } from "@/components/LocaleProvider";
import ThemeToggle from "@/components/ThemeToggle";

export const metadata = {
  title: "David | Software Developer",
  description: "Web personal de David, desarrollador de software",
};

export default async function RootLayout({
  children, params
}: Readonly<{
  children: React.ReactNode;
  params: { locale: string };
}>) {
  const { locale } = await params;
  log("layout locale: " + locale);
  return (
    <html className="dark" lang={locale}>
        <LocaleProvider locale={locale}>
        <body className="antialiased">
          <div className="bg-(--color-background) text-(--color-text-primary) min-h-screen flex flex-col">
            <Header />
            <main>{children}</main>
            <Footer />
          </div>
        </body>
        </LocaleProvider>
    </html >
  );
}
