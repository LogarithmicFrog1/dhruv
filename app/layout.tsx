import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { siteConfig } from "@/lib/site";
import { THEME_STORAGE_KEY } from "@/lib/theme";
import "./globals.css";

/* Single typeface site-wide (Inter) — calmer than mixing serif + sans. */

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  icons: {
    icon: "/star.png",
    shortcut: "/star.png",
    apple: "/star.png",
  },
  title: {
    default: siteConfig.name,
    template: `%s — ${siteConfig.name}`,
  },
  description: siteConfig.description,
  openGraph: {
    title: siteConfig.name,
    description: siteConfig.description,
    url: siteConfig.url,
    siteName: siteConfig.name,
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: siteConfig.name,
    description: siteConfig.description,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const themeInit = `(function(){try{var k=${JSON.stringify(THEME_STORAGE_KEY)};var t=localStorage.getItem(k);var r=document.documentElement;r.classList.remove("light","dark");if(t==="dark")r.classList.add("dark");else if(t==="light")r.classList.add("light");}catch(e){}})();`;

  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={inter.variable}
    >
      <Script
        id="theme-init"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{ __html: themeInit }}
      />
      <body className="flex min-h-dvh flex-col bg-surface text-ink antialiased">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
