import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { ContactBand } from '@/components/layout/ContactBand';
import { PageIntro } from '@/components/layout/PageIntro';
import { businesses, businessStats, companyDescription } from '@/data/company';

export const metadata: Metadata = {
  title: '事業紹介 | レンタルスペース・輸出・教育',
  description: companyDescription,
  alternates: {
    canonical: 'https://osara-rock.com/services',
  },
};

const categories = [
  {
    number: '01',
    name: 'ダンススタジオ',
    brand: 'DAYS',
    description: '個人練習、レッスン、撮影まで。日常的な使いやすさを磨くスタジオ。',
  },
  {
    number: '02',
    name: 'フォトスタジオ',
    brand: 'Tiarina',
    description: '推し活や生誕祭に応える、世界観と撮影体験に特化した空間。',
  },
  {
    number: '03',
    name: 'パーティスペース',
    brand: 'HOME / Fluffy ほか',
    description: '集まり方や利用人数に合わせて選べる、複数コンセプトのスペース。',
  },
  {
    number: '04',
    name: 'ワークスペース',
    brand: 'とらのワークスペース',
    description: '仕事、勉強、面談に集中できる、静かで機能的な個室。',
  },
];

export default function ServicesPage() {
  return (
    <div className="flex flex-col">
      <PageIntro
        backgroundImage="/hero-services.webp"
        eyebrow="Our businesses"
        title="事業紹介"
        description={companyDescription}
      />

      <section className="section-space bg-white">
        <div className="site-container">
          <div className="grid gap-12 lg:grid-cols-[0.38fr_0.62fr] lg:gap-20">
            <div>
              <p className="eyebrow">01 / Rental space</p>
              <h2 className="mt-6 text-balance text-3xl font-bold leading-[1.4] text-primary sm:text-4xl">
                レンタルスタジオ・レンタルスペース事業
              </h2>
            </div>
            <div>
              <p className="max-w-3xl text-pretty text-lg leading-9 text-neutral-700">
                ダンス、撮影、パーティ、仕事。利用目的が違えば、求められる設備も、導線も、空気感も変わります。
                私たちは複数カテゴリーのスペースを運営し、設備や予約導線、日々の運用品質を改善しています。
              </p>
              <div className="mt-10 grid grid-cols-3 border-y border-primary/15">
                <div className="border-r border-primary/15 py-6 pr-4">
                  <p className="text-2xl font-bold text-primary sm:text-3xl">{businessStats.totalRooms}</p>
                  <p className="mt-2 text-xs font-semibold text-neutral-600">運営スペース</p>
                </div>
                <div className="border-r border-primary/15 px-4 py-6">
                  <p className="text-2xl font-bold text-primary sm:text-3xl">4</p>
                  <p className="mt-2 text-xs font-semibold text-neutral-600">カテゴリー</p>
                </div>
                <div className="py-6 pl-4">
                  <p className="text-2xl font-bold text-primary sm:text-3xl">{businessStats.operatingAreas}</p>
                  <p className="mt-2 text-xs font-semibold text-neutral-600">展開地域</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-16 grid grid-cols-2 gap-2 sm:gap-4 lg:mt-20 lg:grid-cols-4">
            {['/DAYS.jpeg', '/tiarina.jpg', '/fluffy.jpeg', '/torano.jpeg'].map((src, index) => (
              <div key={src} className="relative aspect-[4/5] overflow-hidden rounded-md bg-neutral-100">
                <Image
                  src={src}
                  alt={`${categories[index].name}の内観`}
                  fill
                  sizes="(min-width: 1024px) 25vw, 50vw"
                  className="object-cover"
                />
              </div>
            ))}
          </div>

          <div className="mt-14 border-t border-primary/15">
            {categories.map((category) => (
              <div
                key={category.number}
                className="grid gap-3 border-b border-primary/15 py-7 sm:grid-cols-[4rem_0.7fr_0.8fr_1.5fr] sm:items-start sm:gap-6"
              >
                <span className="text-xs font-bold text-primary-muted">{category.number}</span>
                <h3 className="text-base font-bold text-primary">{category.name}</h3>
                <p className="text-sm font-semibold text-neutral-700">{category.brand}</p>
                <p className="text-sm leading-7 text-neutral-600">{category.description}</p>
              </div>
            ))}
          </div>

          <Link
            href="/spaces"
            className="mt-10 inline-flex min-h-12 items-center gap-3 rounded-md bg-primary px-6 text-sm font-semibold text-white transition-colors hover:bg-primary-muted"
          >
            店舗一覧を見る
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>
      </section>

      <section className="section-space border-y border-primary/10 bg-neutral-50" aria-label="輸出事業・教育事業">
        <div className="site-container grid gap-12 md:grid-cols-2 md:gap-16">
          {businesses.slice(1).map((business) => (
            <article key={business.id} id={business.id} className="scroll-mt-24 border-t border-primary/15 pt-8">
              <p className="eyebrow">{business.label}</p>
              <h2 className="mt-5 text-3xl font-bold text-primary">{business.name}</h2>
              <p className="mt-5 max-w-xl text-base leading-8 text-neutral-700">{business.description}</p>
            </article>
          ))}
        </div>
      </section>

      <ContactBand />
    </div>
  );
}
