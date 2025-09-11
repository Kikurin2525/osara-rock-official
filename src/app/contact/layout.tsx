import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'お問い合わせ | 株式会社オサラロック - レンタルスペース・運営代行のご相談',
  description: '株式会社オサラロックへのお問い合わせページ。レンタルスペースのご利用、運営代行・コンサルティング、新規開業支援に関するご質問やご相談を承ります。お気軽にお問い合わせください。',
  keywords: 'お問い合わせ,相談,レンタルスペース,運営代行,コンサルティング,新規開業支援,料金,予約',
  openGraph: {
    title: 'お問い合わせ | 株式会社オサラロック - レンタルスペース・運営代行のご相談',
    description: 'レンタルスペースのご利用、運営代行・コンサルティング、新規開業支援に関するご質問やご相談を承ります。',
    url: 'https://osara-rock.com/contact',
    siteName: '株式会社オサラロック',
    images: [
      {
        url: '/og-default.png',
        width: 1200,
        height: 630,
        alt: '株式会社オサラロック お問い合わせ',
      },
    ],
    locale: 'ja_JP',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'お問い合わせ | 株式会社オサラロック',
    description: 'レンタルスペースのご利用、運営代行・コンサルティングに関するご質問やご相談を承ります。',
    images: ['/og-default.png'],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://osara-rock.com/contact',
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}