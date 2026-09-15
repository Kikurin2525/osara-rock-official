import { HeroImage } from '@/components/layout/HeroImage';
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { ContactBand } from '@/components/layout/ContactBand';
import { businesses, businessStats, companyDescription } from '@/data/company';
import { getRecentNews } from '@/data/news';
import { spaces } from '@/data/spaces';

export const metadata: Metadata = {
  title: { absolute: '株式会社オサラロック | レンタルスペース・輸出・教育' },
  description: companyDescription,
  keywords:
    'レンタルスペース,ダンススタジオ,レンタルスタジオ,DAYS,フォトスタジオ,推し活,コスプレ,生誕祭,パーティスペース,スタジオ運営,輸出事業,教育事業',
  alternates: {
    canonical: 'https://osara-rock.com',
  },
};

const stats = [
  { value: businessStats.totalRooms, label: '運営スペース' },
  { value: businessStats.monthlyUsers, label: '月間利用' },
  { value: businessStats.operatingAreas, label: '展開地域' },
  { value: businessStats.yearsInBusiness, label: '運営実績' },
];

export default function HomePage() {
  const recentNews = getRecentNews(3);

  return (
    <div className="flex flex-col">
      <section
        className="relative flex h-[68svh] max-h-[780px] min-h-[520px] items-end overflow-hidden bg-neutral-200 text-white"
        aria-label="株式会社オサラロック"
      >
        <HeroImage
          src="/hero-dance-v2.webp"
          alt="青空へ両腕を伸ばし、屋上で伸びやかに踊る女性のイメージ"
          className="object-cover object-[68%_50%] sm:object-top"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/35 to-transparent sm:from-primary/40 sm:via-transparent" aria-hidden="true" />
        <div className="absolute inset-0 hidden bg-gradient-to-r from-primary/60 via-primary/15 to-transparent sm:block" aria-hidden="true" />
        <div className="site-container relative z-10 pb-12 sm:pb-16 lg:pb-20">
          <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-white/70 sm:text-xs">
            Osara Rock Inc.
          </p>
          <h1 className="mt-4 max-w-2xl text-balance text-4xl font-bold leading-[1.18] text-white sm:text-5xl lg:text-6xl">
            主役は、あなた。
          </h1>
          <p className="mt-4 max-w-xl text-pretty text-sm leading-7 text-white/80 sm:text-base">
            {companyDescription}
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Link
              href="/spaces"
              className="inline-flex min-h-12 items-center gap-3 rounded-md bg-white px-6 text-sm font-semibold text-primary transition-colors hover:bg-neutral-100"
            >
              店舗一覧を見る
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex min-h-12 items-center gap-3 rounded-md border border-white/40 px-6 text-sm font-semibold text-white transition-colors hover:border-white hover:bg-white/10"
            >
              お問い合わせ
            </Link>
          </div>
        </div>
      </section>

      <section className="border-b border-primary/10 bg-white" aria-label="事業実績">
        <div className="site-container grid grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="border-b border-r border-primary/10 px-4 py-7 even:border-r-0 lg:border-b-0 lg:px-7 lg:py-8 lg:even:border-r lg:last:border-r-0"
            >
              <p className="whitespace-nowrap text-xl font-bold leading-none text-primary min-[360px]:text-2xl sm:text-3xl">{stat.value}</p>
              <p className="mt-3 text-xs font-semibold text-neutral-600">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section-space bg-neutral-50">
        <div className="site-container grid gap-12 lg:grid-cols-[0.42fr_0.58fr] lg:gap-20">
          <div>
            <p className="eyebrow">What we do</p>
            <h2 className="mt-6 text-balance text-3xl font-bold leading-[1.4] text-primary sm:text-4xl lg:text-5xl">
              空間・商品・学びを通じて、
              <br className="hidden sm:block" />
              日々の挑戦を支える。
            </h2>
          </div>
          <div className="lg:pt-10">
            <p className="max-w-2xl text-pretty text-lg leading-9 text-neutral-700">
              レンタルスタジオ・レンタルスペースの運営、海外への商品販売、実践に基づく教材の提供。
              それぞれの事業で、お客様の声に向き合いながら改善を重ねています。
            </p>
            <div className="mt-10 border-t border-primary/15">
              {businesses.map((business) => (
                <div key={business.id} className="border-b border-primary/15 py-6">
                  <p className="text-xs font-bold text-primary-muted">{business.label}</p>
                  <h3 className="mt-3 text-xl font-bold leading-relaxed text-primary">{business.name}</h3>
                  <p className="mt-3 text-sm leading-7 text-neutral-600">{business.description}</p>
                </div>
              ))}
            </div>
            <Link
              href="/services"
              className="mt-10 inline-flex min-h-11 items-center gap-3 border-b border-primary pb-1 text-sm font-semibold text-primary transition-colors hover:border-primary-muted hover:text-primary-muted"
            >
              事業紹介を見る
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      <section id="spaces" className="section-space scroll-mt-20 bg-white">
        <div className="site-container">
          <div className="grid gap-8 border-b border-primary/10 pb-9 sm:grid-cols-[1fr_auto] sm:items-end">
            <div>
              <p className="eyebrow">Our spaces</p>
              <h2 className="mt-5 text-3xl font-bold text-primary sm:text-4xl">それぞれの目的に合う場所を。</h2>
            </div>
            <Link
              href="/spaces"
              className="inline-flex items-center gap-2 text-sm font-semibold text-primary transition-colors hover:text-primary-muted"
            >
              店舗一覧を見る
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>

          <p className="pt-6 text-sm leading-7 text-neutral-600">
            各ブランドの店舗・料金・ご予約は、公式サイトまたは各店舗の予約ページでご確認いただけます。
          </p>

          <div className="grid gap-x-5 gap-y-12 pt-8 md:grid-cols-2">
            {spaces.map((space) => (
              <article key={space.name} id={`space-${space.id}`} tabIndex={-1} className="scroll-mt-24 focus:outline-none">
                <div className="relative aspect-[16/10] overflow-hidden rounded-md bg-neutral-100">
                  <Image
                    src={space.image}
                    alt={`${space.name}の施設内観`}
                    fill
                    sizes="(min-width: 768px) 50vw, 100vw"
                    className="object-cover transition-transform duration-500 hover:scale-[1.02]"
                  />
                </div>
                <div className="mt-5 grid gap-3 border-t border-primary/15 pt-4 sm:grid-cols-[0.35fr_0.65fr]">
                  <div>
                    <p className="text-[11px] font-bold uppercase tracking-[0.1em] text-primary-muted">
                      {space.category}
                    </p>
                    <h3 className="mt-2 text-lg font-bold leading-6 text-primary">{space.name}</h3>
                  </div>
                  <p className="text-sm leading-7 text-neutral-600">{space.description}</p>
                </div>
                {space.officialSite && (
                  <p className="mt-4">
                    <a
                      href={space.officialSite}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex min-h-9 items-center gap-1.5 rounded-md border border-primary/15 px-3 py-1.5 text-[13px] font-semibold text-primary transition-colors hover:border-primary-muted hover:text-primary-muted"
                    >
                      公式サイトを見る
                      <ArrowUpRight className="h-3.5 w-3.5 text-neutral-400" aria-hidden="true" />
                    </a>
                  </p>
                )}
                {space.locations.length > 0 && (
                <ul role="list" className="mt-4 flex flex-wrap gap-2" aria-label={`${space.name}の店舗一覧`}>
                  {space.locations.map((location) => (
                    <li key={location.name}>
                      <a
                        href={location.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex min-h-9 items-center gap-1.5 rounded-md border border-primary/15 px-3 py-1.5 text-[13px] font-semibold text-primary transition-colors hover:border-primary-muted hover:text-primary-muted"
                      >
                        {location.name}
                        {location.hours && (
                          <span className="text-[11px] font-medium text-neutral-500">{location.hours}</span>
                        )}
                        <ArrowUpRight className="h-3.5 w-3.5 text-neutral-400" aria-hidden="true" />
                      </a>
                    </li>
                  ))}
                </ul>
                )}
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-space bg-white">
        <div className="site-container">
          <div className="grid gap-8 sm:grid-cols-[1fr_auto] sm:items-end">
            <div>
              <p className="eyebrow">News</p>
              <h2 className="mt-5 text-3xl font-bold text-primary sm:text-4xl">最新のお知らせ</h2>
            </div>
            <Link
              href="/news"
              className="inline-flex items-center gap-2 text-sm font-semibold text-primary transition-colors hover:text-primary-muted"
            >
              ニュース一覧
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>

          <div className="mt-10 border-t border-primary/15">
            {recentNews.map((item) => (
              <Link
                key={item.id}
                href={`/news/${item.slug}`}
                className="group grid gap-3 border-b border-primary/15 py-6 transition-colors hover:text-primary-muted sm:grid-cols-[9rem_8rem_1fr_auto] sm:items-center sm:gap-5"
              >
                <time dateTime={item.publishDate} className="text-xs font-semibold text-neutral-500">
                  {item.publishDate.replaceAll('-', '.')}
                </time>
                <span className="text-xs font-bold text-primary-muted">{item.category}</span>
                <span className="text-base font-semibold leading-7 text-primary group-hover:text-primary-muted">
                  {item.title}
                </span>
                <ArrowRight className="hidden h-4 w-4 text-neutral-400 transition-transform group-hover:translate-x-1 sm:block" aria-hidden="true" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      <ContactBand />
    </div>
  );
}
