import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { StructuredData } from "@/components/StructuredData";
import { Inter, Noto_Sans_JP } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const notoSansJP = Noto_Sans_JP({ subsets: ["latin"], variable: "--font-noto-sans-jp" });

export const metadata: Metadata = {
  title: {
    default: "株式会社オサラロック | レンタルスペース・スタジオ運営",
    template: "%s | 株式会社オサラロック",
  },
  icons: {
    icon: '/logo1.png',
    shortcut: '/logo1.png',
    apple: '/logo1.png',
  },
  description: "株式会社オサラロックは、ダンススタジオ、パーティスペース、フォトスタジオ、ワークスペースを運営しています。思い出を受け止める、お皿のような場所づくりをお手伝いします。",
  keywords: ["レンタルスペース", "ダンススタジオ", "パーティスペース", "フォトスタジオ", "ワークスペース", "貸し会議室"],
  authors: [{ name: "株式会社オサラロック" }],
  creator: "株式会社オサラロック",
  publisher: "株式会社オサラロック",
  openGraph: {
    type: "website",
    locale: "ja_JP",
    url: "https://osara-rock.com",
    title: "株式会社オサラロック | レンタルスペース・スタジオ運営",
    description: "思い出を受け止める、お皿のような場所づくり。ダンス、パーティ、撮影、ワークスペースまで多彩なレンタルスペースをご提供。",
    siteName: "株式会社オサラロック",
  },
  twitter: {
    card: "summary_large_image",
    title: "株式会社オサラロック | レンタルスペース・スタジオ運営",
    description: "思い出を受け止める、お皿のような場所づくり。",
    creator: "@osara_rock",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'google-site-verification-code', // 実際の値は後で設定
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className={`min-h-screen bg-background font-sans antialiased ${inter.variable} ${notoSansJP.variable}`}>
        <a 
          href="#main-content" 
          className="sr-only focus:not-sr-only focus:absolute focus:top-0 focus:left-0 z-50 bg-primary text-white px-4 py-2 text-sm font-medium"
        >
          メインコンテンツにスキップ
        </a>
        <StructuredData />
        <Header />
        <main id="main-content" className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <head>
        {/* favicon の指定 */}
        <link rel="icon" href="/favicon.png" type="image/png" />
      </head>
      <body className="min-h-screen bg-background font-sans antialiased">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-0 focus:left-0 z-50 bg-primary text-white p-2"
        >
          メインコンテンツにスキップ
        </a>
        <StructuredData />
        <Header />
        <main id="main-content" className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}