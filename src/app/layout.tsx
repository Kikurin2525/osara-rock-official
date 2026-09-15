import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { StructuredData } from "@/components/StructuredData";
import { Inter, Noto_Sans_JP } from "next/font/google";
import { companyDescription } from "@/data/company";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const notoSansJP = Noto_Sans_JP({ subsets: ["latin"], variable: "--font-noto-sans-jp" });

export const metadata: Metadata = {
  metadataBase: new URL("https://osara-rock.com"),
  title: {
    default: "株式会社オサラロック | レンタルスペース・輸出・教育",
    template: "%s | 株式会社オサラロック",
  },
  icons: {
    icon: '/favicon.png',
    shortcut: '/favicon.png',
    apple: '/favicon.png',
  },
  description: companyDescription,
  keywords: ["レンタルスペース", "ダンススタジオ", "パーティスペース", "フォトスタジオ", "ワークスペース", "貸し会議室", "輸出事業", "教育事業"],
  authors: [{ name: "株式会社オサラロック" }],
  creator: "株式会社オサラロック",
  publisher: "株式会社オサラロック",
  openGraph: {
    type: "website",
    locale: "ja_JP",
    url: "https://osara-rock.com",
    title: "株式会社オサラロック | レンタルスペース・輸出・教育",
    description: companyDescription,
    siteName: "株式会社オサラロック",
    images: [
      {
        url: "/og.jpg",
        width: 1200,
        height: 630,
        alt: "株式会社オサラロック | レンタルスペース・輸出・教育",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "株式会社オサラロック | レンタルスペース・輸出・教育",
    description: companyDescription,
    images: ["/og.jpg"],
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
