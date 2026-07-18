import type { Metadata } from 'next';
import Image from 'next/image';
import { ContactBand } from '@/components/layout/ContactBand';
import { PageIntro } from '@/components/layout/PageIntro';
import { businessStats, companyInfo, companyTimeline } from '@/data/company';

export const metadata: Metadata = {
  title: '会社概要',
  description:
    '株式会社オサラロックの理念、歩み、会社情報。2021年の創業から、ダンススタジオ、フォトスタジオ、パーティスペース、ワークスペースを展開しています。',
  alternates: {
    canonical: 'https://osara-rock.com/about',
  },
};

const values = [
  {
    number: '01',
    title: '体験価値へのこだわり',
    description: '設備を並べるだけでなく、その場所で過ごす時間がどう記憶に残るかまで考えます。',
  },
  {
    number: '02',
    title: 'お客様の物語を大切に',
    description: '利用目的や背景を決めつけず、一人ひとりの「やりたい」に場所の側から応えます。',
  },
  {
    number: '03',
    title: '清潔で安心できる空間',
    description: '華やかさより先に、安心して使えること。清掃と運用品質を日々の基本に置きます。',
  },
  {
    number: '04',
    title: '継続的な成長と改善',
    description: '完成したと思わず、利用者の声と数字を見ながら、場所と仕組みを更新し続けます。',
  },
];

const companyRows = [
  { label: '会社名', value: companyInfo.name, subValue: companyInfo.nameEn },
  { label: '創業', value: companyInfo.established },
  { label: '法人設立', value: companyInfo.incorporation },
  { label: '所在地', value: companyInfo.address },
  { label: '電話番号', value: companyInfo.phone, href: `tel:${companyInfo.phone.replace(/-/g, '')}` },
  { label: 'メール', value: companyInfo.email, href: `mailto:${companyInfo.email}` },
];

const stats = [
  { value: businessStats.totalRooms, label: '直営スペース' },
  { value: businessStats.monthlyUsers, label: '月間利用' },
  { value: businessStats.operatingAreas, label: '展開地域' },
  { value: businessStats.yearsInBusiness, label: '運営実績' },
];

export default function AboutPage() {
  return (
    <div className="flex flex-col">
      <PageIntro
        eyebrow="About us"
        title={
          <>
            人の物語を受け止める、
            <br />
            お皿のような場所を。
          </>
        }
        description="オサラロックという社名には、人の大切な時間や物語を受け止め、その価値を引き立てる存在でありたいという思いを込めています。"
      />

      <section className="section-space bg-white">
        <div className="site-container grid gap-14 lg:grid-cols-[0.43fr_0.57fr] lg:gap-20">
          <div>
            <p className="eyebrow">Mission</p>
            <p className="mt-6 text-balance text-3xl font-bold leading-[1.4] text-primary sm:text-4xl lg:text-5xl">
              Rock Your Story,
              <br />
              We&apos;re the Plate.
            </p>
          </div>
          <div className="lg:pt-10">
            <p className="text-pretty text-lg leading-9 text-neutral-700">
              人の大切な時間と物語を受け止める「お皿」として、付加価値、楽しさ、喜び、思い出を支える。
              私たちは、利用する人が主役になれる場所をつくり、日々の運営を通じて育てていきます。
            </p>
            <div className="mt-10 border-l-4 border-primary-blue bg-[#f7f7f4] px-6 py-6 sm:px-8">
              <p className="text-xs font-bold uppercase tracking-[0.12em] text-primary-blue">Vision</p>
              <p className="mt-4 text-xl font-bold leading-8 text-primary sm:text-2xl">
                10年後、日本一のダンススタジオチェーンへ。
              </p>
              <p className="mt-3 text-sm leading-7 text-neutral-600">
                場所の品質と運営の仕組みを磨き、使う人にも、運営する人にも持続可能な事業を目指します。
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="relative min-h-[460px] overflow-hidden bg-primary text-white sm:min-h-[560px]">
        <Image
          src="/top2.jpg"
          alt="大切な時間を共に過ごす人々"
          fill
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/55" aria-hidden="true" />
        <div className="site-container relative z-10 flex min-h-[460px] items-end py-14 sm:min-h-[560px] sm:py-18">
          <div className="max-w-3xl">
            <p className="text-xs font-bold uppercase tracking-[0.12em] text-white/65">Why we exist</p>
            <h2 className="mt-5 text-balance text-3xl font-bold leading-[1.4] text-white sm:text-5xl">
              主役は場所ではなく、
              <br />
              そこで過ごす人。
            </h2>
            <p className="mt-5 max-w-xl text-pretty text-sm leading-7 text-white/75 sm:text-base">
              空間の美しさや機能は、目的ではありません。そこで生まれる練習、挑戦、会話、記念日を支えるための手段です。
            </p>
          </div>
        </div>
      </section>

      <section className="border-b border-black/10 bg-white" aria-label="会社実績">
        <div className="site-container grid grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="border-b border-r border-black/10 px-4 py-8 even:border-r-0 lg:border-b-0 lg:px-7 lg:py-10 lg:even:border-r lg:last:border-r-0"
            >
              <p className="text-2xl font-bold text-primary sm:text-3xl">{stat.value}</p>
              <p className="mt-2 text-xs font-semibold text-neutral-600">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section-space bg-[#eeeeea]">
        <div className="site-container grid gap-12 lg:grid-cols-[0.35fr_0.65fr] lg:gap-20">
          <div>
            <p className="eyebrow">Values</p>
            <h2 className="mt-6 text-3xl font-bold leading-[1.4] text-primary sm:text-4xl">日々の判断を支える、4つの価値観。</h2>
          </div>
          <div className="border-t border-black/15">
            {values.map((value) => (
              <article
                key={value.number}
                className="grid gap-3 border-b border-black/15 py-7 sm:grid-cols-[4rem_0.8fr_1.2fr] sm:gap-6"
              >
                <span className="text-xs font-bold text-primary-blue">{value.number}</span>
                <h3 className="text-base font-bold leading-7 text-primary">{value.title}</h3>
                <p className="text-sm leading-7 text-neutral-600">{value.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-space bg-white">
        <div className="site-container grid gap-12 lg:grid-cols-[0.35fr_0.65fr] lg:gap-20">
          <div>
            <p className="eyebrow">History</p>
            <h2 className="mt-6 text-3xl font-bold text-primary sm:text-4xl">これまでの歩み</h2>
            <p className="mt-5 text-sm leading-7 text-neutral-600">
              2021年の1店舗から始まり、利用目的の異なる空間へ少しずつ事業を広げてきました。
            </p>
          </div>
          <ol className="border-t border-black/15">
            {companyTimeline.map((item) => (
              <li
                key={`${item.date}-${item.title}`}
                className="grid gap-3 border-b border-black/15 py-6 sm:grid-cols-[7rem_1fr] sm:gap-8"
              >
                <time className="text-xs font-bold text-primary-blue">{item.date}</time>
                <div>
                  <h3 className="text-sm font-bold leading-6 text-primary sm:text-base">{item.title}</h3>
                  <p className="mt-2 text-sm leading-7 text-neutral-600">{item.description}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section-space border-t border-black/10 bg-[#f7f7f4]">
        <div className="site-container grid gap-12 lg:grid-cols-[0.35fr_0.65fr] lg:gap-20">
          <div>
            <p className="eyebrow">Company</p>
            <h2 className="mt-6 text-3xl font-bold text-primary sm:text-4xl">会社情報</h2>
          </div>
          <dl className="border-t border-black/15">
            {companyRows.map((row) => (
              <div
                key={row.label}
                className="grid gap-2 border-b border-black/15 py-5 sm:grid-cols-[9rem_1fr] sm:items-start sm:gap-6"
              >
                <dt className="text-xs font-bold text-neutral-500">{row.label}</dt>
                <dd className="text-sm font-semibold leading-7 text-primary sm:text-base">
                  {row.href ? (
                    <a href={row.href} className="transition-colors hover:text-primary-blue">
                      {row.value}
                    </a>
                  ) : (
                    row.value
                  )}
                  {row.subValue && <span className="ml-3 text-xs font-medium text-neutral-500">{row.subValue}</span>}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <ContactBand
        title="人の時間を豊かにする場所を、これからも。"
        description="スペースの利用、運営支援、事業に関するご相談を受け付けています。"
      />
    </div>
  );
}
