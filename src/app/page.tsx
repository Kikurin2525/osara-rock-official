import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, ArrowUpRight, Check } from 'lucide-react';
import { ContactBand } from '@/components/layout/ContactBand';
import { businessStats } from '@/data/company';
import { getRecentNews } from '@/data/news';

export const metadata: Metadata = {
  title: '株式会社オサラロック | レンタルスペース・スタジオ運営',
  description:
    'ダンス、撮影、パーティ、ワークスペースなど22室以上を直営。株式会社オサラロックは、場所づくりから運営改善まで一貫して取り組むレンタルスペース運営会社です。',
  keywords:
    'レンタルスペース,ダンススタジオ,フォトスタジオ,推し活,コスプレ,生誕祭,パーティスペース,スタジオ運営,運営代行',
  alternates: {
    canonical: 'https://osara-rock.com',
  },
};

const heroImages = [
  { src: '/DAYS.jpeg', alt: 'レンタルスタジオDAYS' },
  { src: '/tiarina.jpg', alt: 'フォトスタジオTiarina' },
  { src: '/party.jpeg', alt: 'パーティスペース' },
  { src: '/torano.jpeg', alt: 'とらのワークスペース' },
];

const spaces = [
  {
    name: 'DAYS',
    category: 'Dance studio',
    description: 'ダンス練習からレッスンまで、日常的に使いやすいスタジオ。',
    image: '/DAYS.jpeg',
  },
  {
    name: 'Tiarina',
    category: 'Photo studio',
    description: '推し活、生誕祭、撮影に特化した世界観のあるセルフフォトスタジオ。',
    image: '/tiarina.jpg',
  },
  {
    name: 'Rays / cotton etc.',
    category: 'Party space',
    description: '集まる時間そのものを楽しめる、用途に合わせたパーティスペース。',
    image: '/party.jpeg',
  },
  {
    name: 'とらのワークスペース',
    category: 'Work space',
    description: '仕事や勉強に集中できる、静かで機能的な個室空間。',
    image: '/torano.jpeg',
  },
];

const stats = [
  { value: businessStats.totalRooms, label: '直営スペース' },
  { value: businessStats.monthlyUsers, label: '月間利用' },
  { value: businessStats.operatingAreas, label: '展開地域' },
  { value: businessStats.yearsInBusiness, label: '運営実績' },
];

const operatingSupport = [
  '新規開業・立地選定・設備計画',
  '予約導線・日々の運営設計',
  '利用率向上・収益改善',
  'ブランド・集客の継続改善',
];

export default function HomePage() {
  const recentNews = getRecentNews(3);

  return (
    <div className="flex flex-col">
      <section className="relative h-[calc(100svh-112px)] min-h-[480px] max-h-[780px] overflow-hidden bg-primary text-white">
        <div className="absolute inset-0 grid grid-cols-2 lg:grid-cols-4" aria-hidden="true">
          {heroImages.map((image) => (
            <div key={image.src} className="relative border-r border-white/10 last:border-r-0">
              <Image
                src={image.src}
                alt=""
                fill
                sizes="(min-width: 1024px) 25vw, 50vw"
                className="object-cover"
                loading="eager"
              />
            </div>
          ))}
        </div>
        <div className="absolute inset-0 bg-black/60" aria-hidden="true" />

        <div className="site-container relative z-10 flex h-full items-end pb-10 pt-16 sm:pb-18 lg:pb-20">
          <div className="max-w-4xl">
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-white/65">
              Osara Rock Inc. / Rental space operator
            </p>
            <h1 className="mt-6 text-balance text-4xl font-bold leading-[1.18] text-white sm:text-6xl lg:text-7xl">
              場所をつくり、
              <br />
              体験を育てる。
            </h1>
            <p className="mt-6 max-w-2xl text-pretty text-base leading-8 text-white/80 sm:text-lg">
              ダンス、撮影、パーティ、仕事。
              人の大切な時間を受け止める空間を、自ら運営し、磨き続けています。
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="https://linktr.ee/osara_rock"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-12 items-center justify-between gap-8 rounded-md bg-primary-blue px-6 text-sm font-semibold text-white transition-colors hover:bg-white hover:text-primary"
              >
                運営スペースを見る
                <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
              </a>
              <Link
                href="/services"
                className="inline-flex min-h-12 items-center justify-between gap-8 rounded-md border border-white/50 px-6 text-sm font-semibold text-white transition-colors hover:border-white hover:bg-white hover:text-primary"
              >
                事業について
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-black/10 bg-white" aria-label="事業実績">
        <div className="site-container grid grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="border-b border-r border-black/10 px-4 py-7 even:border-r-0 lg:border-b-0 lg:px-7 lg:py-8 lg:even:border-r lg:last:border-r-0"
            >
              <p className="text-2xl font-bold leading-none text-primary sm:text-3xl">{stat.value}</p>
              <p className="mt-3 text-xs font-semibold text-neutral-600">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section-space bg-[#f7f7f4]">
        <div className="site-container grid gap-12 lg:grid-cols-[0.42fr_0.58fr] lg:gap-20">
          <div>
            <p className="eyebrow">What we do</p>
            <h2 className="mt-6 text-balance text-3xl font-bold leading-[1.4] text-primary sm:text-4xl lg:text-5xl">
              空間を貸すだけでは、
              <br className="hidden sm:block" />
              事業は育たない。
            </h2>
          </div>
          <div className="lg:pt-10">
            <p className="max-w-2xl text-pretty text-lg leading-9 text-neutral-700">
              オサラロックは、レンタルスペースを自社で企画し、出店し、日々の運営まで担います。
              利用者の声と数字を見ながら改善を重ねること。それが、使われ続ける場所をつくる最短ルートだと考えています。
            </p>
            <div className="mt-12 grid gap-8 border-t border-black/15 pt-8 sm:grid-cols-2 sm:gap-10">
              <div>
                <p className="text-xs font-bold text-primary-blue">01 / OPERATE</p>
                <h3 className="mt-3 text-xl font-bold text-primary">レンタルスペース事業</h3>
                <p className="mt-3 text-sm leading-7 text-neutral-600">
                  用途も世界観も異なる複数ブランドを、22室以上直営しています。
                </p>
              </div>
              <div>
                <p className="text-xs font-bold text-primary-blue">02 / SUPPORT</p>
                <h3 className="mt-3 text-xl font-bold text-primary">運営代行・コンサルティング</h3>
                <p className="mt-3 text-sm leading-7 text-neutral-600">
                  現場で培った知見を、開業支援や既存施設の運営改善に活かします。
                </p>
              </div>
            </div>
            <Link
              href="/services"
              className="mt-10 inline-flex min-h-11 items-center gap-3 border-b border-primary pb-1 text-sm font-semibold text-primary transition-colors hover:border-primary-blue hover:text-primary-blue"
            >
              サービスを詳しく見る
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      <section className="section-space bg-white">
        <div className="site-container">
          <div className="grid gap-8 border-b border-black/10 pb-9 sm:grid-cols-[1fr_auto] sm:items-end">
            <div>
              <p className="eyebrow">Our spaces</p>
              <h2 className="mt-5 text-3xl font-bold text-primary sm:text-4xl">異なる目的に、異なる場所を。</h2>
            </div>
            <a
              href="https://linktr.ee/osara_rock"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-semibold text-primary transition-colors hover:text-primary-blue"
            >
              全スペースを見る
              <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
            </a>
          </div>

          <div className="grid gap-x-5 gap-y-10 pt-10 md:grid-cols-2">
            {spaces.map((space) => (
              <article key={space.name}>
                <div className="relative aspect-[16/10] overflow-hidden rounded-md bg-neutral-100">
                  <Image
                    src={space.image}
                    alt={`${space.name}の施設内観`}
                    fill
                    sizes="(min-width: 768px) 50vw, 100vw"
                    className="object-cover transition-transform duration-500 hover:scale-[1.02]"
                  />
                </div>
                <div className="mt-5 grid gap-3 border-t border-black/15 pt-4 sm:grid-cols-[0.35fr_0.65fr]">
                  <div>
                    <p className="text-[11px] font-bold uppercase tracking-[0.1em] text-primary-blue">
                      {space.category}
                    </p>
                    <h3 className="mt-2 text-lg font-bold leading-6 text-primary">{space.name}</h3>
                  </div>
                  <p className="text-sm leading-7 text-neutral-600">{space.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-space border-y border-black/10 bg-[#eeeeea]">
        <div className="site-container grid gap-12 lg:grid-cols-[0.4fr_0.6fr] lg:gap-20">
          <div>
            <p className="eyebrow">Management support</p>
            <h2 className="mt-5 text-balance text-3xl font-bold leading-[1.4] text-primary sm:text-4xl">
              直営の現場から得た知見を、次の場所へ。
            </h2>
            <p className="mt-5 text-sm leading-7 text-neutral-600">
              机上の提案ではなく、現在も複数店舗を動かしている運営者として支援します。
            </p>
          </div>
          <ul className="border-t border-black/15">
            {operatingSupport.map((item, index) => (
              <li key={item} className="flex items-center gap-5 border-b border-black/15 py-5">
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-accent text-white">
                  <Check className="h-4 w-4" aria-hidden="true" />
                </span>
                <span className="text-sm font-semibold text-primary sm:text-base">{item}</span>
                <span className="ml-auto text-xs font-bold text-neutral-500">0{index + 1}</span>
              </li>
            ))}
          </ul>
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
              className="inline-flex items-center gap-2 text-sm font-semibold text-primary transition-colors hover:text-primary-blue"
            >
              ニュース一覧
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>

          <div className="mt-10 border-t border-black/15">
            {recentNews.map((item) => (
              <Link
                key={item.id}
                href={`/news/${item.slug}`}
                className="group grid gap-3 border-b border-black/15 py-6 transition-colors hover:text-primary-blue sm:grid-cols-[9rem_8rem_1fr_auto] sm:items-center sm:gap-5"
              >
                <time dateTime={item.publishDate} className="text-xs font-semibold text-neutral-500">
                  {item.publishDate.replaceAll('-', '.')}
                </time>
                <span className="text-xs font-bold text-primary-blue">{item.category}</span>
                <span className="text-base font-semibold leading-7 text-primary group-hover:text-primary-blue">
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
