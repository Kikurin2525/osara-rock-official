import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { ContactBand } from '@/components/layout/ContactBand';
import { PageIntro } from '@/components/layout/PageIntro';
import { getPublishedNews } from '@/data/news';

export const metadata: Metadata = {
  title: 'ニュース',
  description: '株式会社オサラロックの新店舗、サービス、会社に関する最新情報をお知らせします。',
  alternates: {
    canonical: 'https://osara-rock.com/news',
  },
};

export default function NewsPage() {
  const news = getPublishedNews();

  return (
    <div className="flex flex-col">
      <PageIntro
        eyebrow="News"
        title="ニュース"
        description="新店舗のオープン、サービス、会社に関するお知らせを掲載しています。"
      />

      <section className="section-space bg-white">
        <div className="site-container">
          <div className="grid gap-10 lg:grid-cols-[0.28fr_0.72fr] lg:gap-16">
            <div>
              <p className="text-sm font-bold text-primary">All news</p>
              <p className="mt-2 text-xs text-neutral-500">{news.length}件のお知らせ</p>
            </div>

            {news.length > 0 ? (
              <div className="border-t border-black/15">
                {news.map((item) => (
                  <Link
                    key={item.id}
                    href={`/news/${item.slug}`}
                    className="group grid gap-4 border-b border-black/15 py-7 sm:grid-cols-[8.5rem_7rem_1fr_auto] sm:items-start sm:gap-5"
                  >
                    <time dateTime={item.publishDate} className="text-xs font-semibold text-neutral-500 sm:pt-1">
                      {item.publishDate.replaceAll('-', '.')}
                    </time>
                    <span className="text-xs font-bold text-primary-blue sm:pt-1">{item.category}</span>
                    <div>
                      <h2 className="text-base font-bold leading-7 text-primary transition-colors group-hover:text-primary-blue sm:text-lg">
                        {item.title}
                      </h2>
                      <p className="mt-2 text-sm leading-7 text-neutral-600">{item.summary}</p>
                    </div>
                    <ArrowRight
                      className="hidden h-4 w-4 text-neutral-400 transition-transform group-hover:translate-x-1 group-hover:text-primary-blue sm:mt-1 sm:block"
                      aria-hidden="true"
                    />
                  </Link>
                ))}
              </div>
            ) : (
              <div className="border-y border-black/15 py-12">
                <p className="text-sm text-neutral-600">現在、掲載中のニュースはありません。</p>
              </div>
            )}
          </div>
        </div>
      </section>

      <ContactBand
        title="事業・サービスに関するご相談はこちら。"
        description="掲載内容へのご質問や、レンタルスペース運営に関するお問い合わせを受け付けています。"
      />
    </div>
  );
}
