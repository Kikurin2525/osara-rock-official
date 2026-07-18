import { companyInfo } from '@/data/company';

export function StructuredData() {
  const baseUrl = 'https://osara-rock.com';

  const organizationData = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: companyInfo.name,
    alternateName: companyInfo.nameEn,
    url: baseUrl,
    logo: `${baseUrl}/logo1.png`,
    description: '株式会社オサラロックは、ダンススタジオ、パーティスペース、フォトスタジオ、ワークスペースを運営するレンタルスペース企業です。',
    foundingDate: '2021-03',
    legalName: companyInfo.name,
    address: {
      '@type': 'PostalAddress',
      streetAddress: '下落合1088-3',
      addressLocality: 'さいたま市中央区',
      addressRegion: '埼玉県',
      addressCountry: 'JP',
    },
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: companyInfo.phone,
      email: companyInfo.email,
      contactType: 'Customer Service',
      areaServed: 'JP',
      availableLanguage: 'Japanese',
    },
    sameAs: [
      companyInfo.socialMedia.twitter,
      companyInfo.socialMedia.instagram,
      companyInfo.socialMedia.tiktok,
    ].filter(Boolean),
    serviceArea: {
      '@type': 'AdministrativeArea',
      name: '埼玉県、東京都、神奈川県',
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'レンタルスペースサービス',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'ダンススタジオレンタル',
            description: 'ダンス練習やレッスンに利用できるスタジオのレンタルサービス',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'パーティスペースレンタル',
            description: '各種パーティや集まりに最適な空間のレンタルサービス',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'フォトスタジオレンタル',
            description: '推し活・コスプレ撮影に特化したフォトスタジオのレンタルサービス',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'ワークスペースレンタル',
            description: '学習・作業に集中できるワークスペースのレンタルサービス',
          },
        },
      ],
    },
  };

  const websiteData = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: '株式会社オサラロック',
    url: baseUrl,
    description: '思い出を受け止める、お皿のような場所づくり。ダンス、パーティ、撮影、ワークスペースまで多彩なレンタルスペースをご提供。',
    publisher: {
      '@type': 'Organization',
      name: companyInfo.name,
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationData),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(websiteData),
        }}
      />
    </>
  );
}
