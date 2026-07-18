import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, ArrowUpRight, Check } from 'lucide-react';
import { ContactBand } from '@/components/layout/ContactBand';
import { PageIntro } from '@/components/layout/PageIntro';
import { businessStats } from '@/data/company';

export const metadata: Metadata = {
  title: 'サービス | レンタルスペース運営・運営支援',
  description:
    '株式会社オサラロックのレンタルスペース事業、運営代行・コンサルティングをご紹介。22室以上の直営経験をもとに、新規開業から日々の運営、収益改善まで支援します。',
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
    brand: 'Rays / cotton etc.',
    description: '集まり方や利用人数に合わせて選べる、複数コンセプトのスペース。',
  },
  {
    number: '04',
    name: 'ワークスペース',
    brand: 'とらのワークスペース',
    description: '仕事、勉強、面談に集中できる、静かで機能的な個室。',
  },
];

const supportItems = [
  {
    number: '01',
    title: '事業設計・開業支援',
    description: '商圏、用途、価格帯、設備、予約導線を整理し、開業後に運営できる形へ落とし込みます。',
  },
  {
    number: '02',
    title: '運営設計・代行',
    description: '予約管理、顧客対応、清掃品質、トラブル対応など、日々の運営を仕組み化します。',
  },
  {
    number: '03',
    title: '稼働・収益改善',
    description: '利用データと現場の声をもとに、価格、掲載内容、プラン、運用品質を改善します。',
  },
  {
    number: '04',
    title: 'ブランド・集客改善',
    description: '選ばれる理由を言語化し、写真、ページ構成、発信内容まで一貫して整えます。',
  },
];

const operatingPrinciples = [
  '利用者の目線で、予約前から退室後までを見る',
  '感覚だけで決めず、数字と現場の両方で判断する',
  '一度つくって終わりにせず、小さく改善を重ねる',
];

export default function ServicesPage() {
  return (
    <div className="flex flex-col">
      <PageIntro
        eyebrow="Services"
        title={
          <>
            場所を運営する。
            <br />
            その知見を、事業に返す。
          </>
        }
        description="自社スペースの企画・出店・運営と、その現場で得た知見を活かす運営支援。株式会社オサラロックの事業は、この2つを軸にしています。"
      />

      <section className="section-space bg-white">
        <div className="site-container">
          <div className="grid gap-12 lg:grid-cols-[0.38fr_0.62fr] lg:gap-20">
            <div>
              <p className="eyebrow">01 / Rental space</p>
              <h2 className="mt-6 text-balance text-3xl font-bold leading-[1.4] text-primary sm:text-4xl">
                直営だから、改善の手触りがある。
              </h2>
            </div>
            <div>
              <p className="max-w-3xl text-pretty text-lg leading-9 text-neutral-700">
                ダンス、撮影、パーティ、仕事。利用目的が違えば、求められる設備も、導線も、空気感も変わります。
                私たちは複数カテゴリーのスペースを直営し、予約の入り方から清掃、顧客対応まで、自分たちで確かめながら運営しています。
              </p>
              <div className="mt-10 grid grid-cols-3 border-y border-black/15">
                <div className="border-r border-black/15 py-6 pr-4">
                  <p className="text-2xl font-bold text-primary sm:text-3xl">{businessStats.totalRooms}</p>
                  <p className="mt-2 text-xs font-semibold text-neutral-600">直営スペース</p>
                </div>
                <div className="border-r border-black/15 px-4 py-6">
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
            {['/DAYS.jpeg', '/tiarina.jpg', '/party.jpeg', '/torano.jpeg'].map((src, index) => (
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

          <div className="mt-14 border-t border-black/15">
            {categories.map((category) => (
              <div
                key={category.number}
                className="grid gap-3 border-b border-black/15 py-7 sm:grid-cols-[4rem_0.7fr_0.8fr_1.5fr] sm:items-start sm:gap-6"
              >
                <span className="text-xs font-bold text-primary-blue">{category.number}</span>
                <h3 className="text-base font-bold text-primary">{category.name}</h3>
                <p className="text-sm font-semibold text-neutral-700">{category.brand}</p>
                <p className="text-sm leading-7 text-neutral-600">{category.description}</p>
              </div>
            ))}
          </div>

          <a
            href="https://linktr.ee/osara_rock"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-10 inline-flex min-h-12 items-center gap-3 rounded-md bg-primary px-6 text-sm font-semibold text-white transition-colors hover:bg-primary-blue"
          >
            運営スペース一覧
            <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
          </a>
        </div>
      </section>

      <section className="section-space border-y border-black/10 bg-[#eeeeea]">
        <div className="site-container">
          <div className="grid gap-12 lg:grid-cols-[0.4fr_0.6fr] lg:gap-20">
            <div>
              <p className="eyebrow">02 / Management support</p>
              <h2 className="mt-6 text-balance text-3xl font-bold leading-[1.4] text-primary sm:text-4xl">
                運営経験を、再現できる仕組みにする。
              </h2>
              <p className="mt-6 text-pretty text-sm leading-7 text-neutral-600">
                施設の状態や課題に合わせて、必要な範囲を整理します。決まったパッケージを当てはめるのではなく、実際に動かせる運営設計を重視します。
              </p>
            </div>

            <div className="border-t border-black/15">
              {supportItems.map((item) => (
                <article
                  key={item.number}
                  className="grid gap-3 border-b border-black/15 py-7 sm:grid-cols-[4rem_0.7fr_1.3fr] sm:gap-6"
                >
                  <span className="text-xs font-bold text-primary-blue">{item.number}</span>
                  <h3 className="text-base font-bold text-primary">{item.title}</h3>
                  <p className="text-sm leading-7 text-neutral-600">{item.description}</p>
                </article>
              ))}
            </div>
          </div>

          <div className="mt-16 grid overflow-hidden rounded-md border border-black/15 bg-white lg:grid-cols-[0.4fr_0.6fr]">
            <div className="relative min-h-72 lg:min-h-[420px]">
              <Image
                src="/DAYS.jpeg"
                alt="運営中のレンタルスタジオDAYS"
                fill
                sizes="(min-width: 1024px) 40vw, 100vw"
                className="object-cover"
              />
            </div>
            <div className="p-7 sm:p-10 lg:p-14">
              <p className="eyebrow">Our approach</p>
              <h3 className="mt-5 text-2xl font-bold leading-[1.5] text-primary sm:text-3xl">
                現場で動くかどうかを、判断基準に。
              </h3>
              <ul className="mt-8 border-t border-black/15">
                {operatingPrinciples.map((principle) => (
                  <li key={principle} className="flex gap-4 border-b border-black/15 py-5 text-sm font-semibold leading-7 text-primary">
                    <Check className="mt-1 h-4 w-4 shrink-0 text-accent" aria-hidden="true" />
                    {principle}
                  </li>
                ))}
              </ul>
              <Link
                href="/contact"
                className="mt-8 inline-flex items-center gap-3 text-sm font-semibold text-primary transition-colors hover:text-primary-blue"
              >
                相談内容を送る
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <ContactBand />
    </div>
  );
}
