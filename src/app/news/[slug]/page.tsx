import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft, ArrowRight, ArrowUpRight } from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { ContactBand } from '@/components/layout/ContactBand';
import { getNewsBySlug, getPublishedNews } from '@/data/news';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getPublishedNews().map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const news = getNewsBySlug(slug);

  if (!news) {
    return { title: 'ニュースが見つかりません' };
  }

  return {
    title: news.title,
    description: news.summary,
    alternates: {
      canonical: `https://osara-rock.com/news/${news.slug}`,
    },
    openGraph: {
      title: news.title,
      description: news.summary,
      type: 'article',
      publishedTime: news.publishDate,
      authors: ['株式会社オサラロック'],
    },
  };
}

export default async function NewsDetailPage({ params }: Props) {
  const { slug } = await params;
  const news = getNewsBySlug(slug);

  if (!news) {
    notFound();
  }

  const relatedNews = getPublishedNews()
    .filter((item) => item.slug !== slug)
    .slice(0, 3);
  const articleBody = news.content.trim().replace(/^#\s+.*(?:\r?\n)+/, '');

  return (
    <div className="flex flex-col">
      <article className="bg-white">
        <header className="border-b border-black/10 bg-neutral-100">
          <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
            <Link
              href="/news"
              className="inline-flex items-center gap-2 text-sm font-semibold text-neutral-600 transition-colors hover:text-primary-blue"
            >
              <ArrowLeft className="h-4 w-4" aria-hidden="true" />
              ニュース一覧
            </Link>

            <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-2">
              <span className="text-xs font-bold text-primary-blue">{news.category}</span>
              <time dateTime={news.publishDate} className="text-xs font-semibold text-neutral-500">
                {news.publishDate.replaceAll('-', '.')}
              </time>
            </div>
            <h1 className="mt-5 text-balance text-3xl font-bold leading-[1.4] text-primary sm:text-4xl lg:text-5xl">
              {news.title}
            </h1>
            <p className="mt-6 max-w-3xl text-pretty text-base leading-8 text-neutral-600 sm:text-lg">
              {news.summary}
            </p>
          </div>
        </header>

        <div className="mx-auto max-w-3xl px-4 py-14 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
          <div className="editorial-prose text-base leading-8">
            <ReactMarkdown
              remarkPlugins={[remarkGfm]}
              components={{
                h1: ({ children }) => <h2>{children}</h2>,
                h2: ({ children }) => <h2>{children}</h2>,
                h3: ({ children }) => <h3>{children}</h3>,
                p: ({ children }) => <p className="mb-6">{children}</p>,
                ul: ({ children }) => <ul className="mb-7 list-disc space-y-2 pl-6">{children}</ul>,
                ol: ({ children }) => <ol className="mb-7 list-decimal space-y-2 pl-6">{children}</ol>,
                strong: ({ children }) => <strong className="font-bold text-primary">{children}</strong>,
                a: ({ href, children }) => {
                  const external = href?.startsWith('http');
                  return (
                    <a
                      href={href}
                      target={external ? '_blank' : undefined}
                      rel={external ? 'noopener noreferrer' : undefined}
                      className="inline-flex items-center gap-1"
                    >
                      {children}
                      {external && <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />}
                    </a>
                  );
                },
              }}
            >
              {articleBody}
            </ReactMarkdown>
          </div>

          {news.tags.length > 0 && (
            <footer className="mt-14 border-t border-black/15 pt-6">
              <p className="text-xs font-bold uppercase tracking-[0.1em] text-neutral-500">Tags</p>
              <div className="mt-3 flex flex-wrap gap-x-5 gap-y-2">
                {news.tags.map((tag) => (
                  <span key={tag} className="text-sm font-semibold text-neutral-600">
                    #{tag}
                  </span>
                ))}
              </div>
            </footer>
          )}
        </div>
      </article>

      {relatedNews.length > 0 && (
        <section className="section-space border-t border-black/10 bg-neutral-50">
          <div className="site-container grid gap-10 lg:grid-cols-[0.28fr_0.72fr] lg:gap-16">
            <div>
              <p className="eyebrow">More news</p>
              <h2 className="mt-5 text-2xl font-bold text-primary">その他のお知らせ</h2>
            </div>
            <div className="border-t border-black/15">
              {relatedNews.map((item) => (
                <Link
                  key={item.id}
                  href={`/news/${item.slug}`}
                  className="group grid gap-3 border-b border-black/15 py-6 sm:grid-cols-[8rem_1fr_auto] sm:items-start sm:gap-5"
                >
                  <time dateTime={item.publishDate} className="text-xs font-semibold text-neutral-500 sm:pt-1">
                    {item.publishDate.replaceAll('-', '.')}
                  </time>
                  <div>
                    <p className="text-xs font-bold text-primary-blue">{item.category}</p>
                    <h3 className="mt-2 text-sm font-bold leading-6 text-primary transition-colors group-hover:text-primary-blue sm:text-base">
                      {item.title}
                    </h3>
                  </div>
                  <ArrowRight className="hidden h-4 w-4 text-neutral-400 transition-transform group-hover:translate-x-1 sm:mt-1 sm:block" aria-hidden="true" />
                </Link>
              ))}
              <Link
                href="/news"
                className="mt-7 inline-flex items-center gap-3 text-sm font-semibold text-primary transition-colors hover:text-primary-blue"
              >
                ニュース一覧を見る
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </div>
          </div>
        </section>
      )}

      <ContactBand
        title="掲載内容について、お気軽にお問い合わせください。"
        description="サービス、店舗、運営支援に関するご質問を受け付けています。"
      />
    </div>
  );
}
