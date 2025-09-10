import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import { getNewsBySlug, getPublishedNews } from '@/data/news';
import { ArrowLeft, Calendar, Tag, ArrowRight } from 'lucide-react';

interface Props {
  params: { slug: string };
}

export async function generateStaticParams() {
  const news = getPublishedNews();
  return news.map((item) => ({
    slug: item.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const news = getNewsBySlug(params.slug);
  
  if (!news) {
    return {
      title: 'ニュースが見つかりません',
    };
  }

  return {
    title: news.title,
    description: news.summary,
    openGraph: {
      title: news.title,
      description: news.summary,
      type: 'article',
      publishedTime: news.publishDate,
      authors: ['株式会社オサラロック'],
    },
  };
}

export default function NewsDetailPage({ params }: Props) {
  const news = getNewsBySlug(params.slug);
  const relatedNews = getPublishedNews()
    .filter(item => item.slug !== params.slug)
    .slice(0, 3);

  if (!news) {
    notFound();
  }

  return (
    <div className="flex flex-col">
      {/* ナビゲーション */}
      <section className="py-8 bg-white border-b border-neutral-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Button asChild variant="ghost" size="sm">
            <Link href="/news">
              <ArrowLeft className="w-4 h-4 mr-2" />
              ニュース一覧に戻る
            </Link>
          </Button>
        </div>
      </section>

      {/* ニュース詳細 */}
      <article className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <header className="mb-12">
            {/* カテゴリーと日付 */}
            <div className="flex items-center gap-4 mb-6">
              <span className="text-sm text-primary-blue bg-primary-blue/10 px-3 py-1 rounded-full font-medium">
                {news.category}
              </span>
              <div className="flex items-center text-neutral-500">
                <Calendar className="h-4 w-4 mr-2" />
                <span>{new Date(news.publishDate).toLocaleDateString('ja-JP', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}</span>
              </div>
            </div>

            {/* タイトル */}
            <h1 className="text-3xl lg:text-4xl font-bold text-primary mb-6 leading-tight">
              {news.title}
            </h1>

            {/* 要約 */}
            <p className="text-xl text-neutral-600 leading-relaxed">
              {news.summary}
            </p>
          </header>

          {/* コンテンツ */}
          <div className="prose prose-lg max-w-none">
            <div 
              className="text-neutral-700 leading-relaxed"
              dangerouslySetInnerHTML={{ __html: news.content.replace(/\n/g, '<br>') }}
            />
          </div>

          {/* タグ */}
          {news.tags.length > 0 && (
            <footer className="mt-12 pt-8 border-t border-neutral-200">
              <div className="flex items-center gap-3">
                <Tag className="h-5 w-5 text-neutral-400" />
                <div className="flex flex-wrap gap-2">
                  {news.tags.map((tag) => (
                    <span key={tag} className="text-sm bg-neutral-100 text-neutral-700 px-3 py-1 rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </footer>
          )}
        </div>
      </article>

      {/* 関連ニュース */}
      {relatedNews.length > 0 && (
        <section className="py-20 bg-neutral-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-primary mb-8 text-center">
              その他のニュース
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {relatedNews.map((item) => (
                <Link key={item.id} href={`/news/${item.slug}`} className="group">
                  <div className="bg-white rounded-2xl p-6 hover:shadow-lg transition-shadow">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-xs text-primary-blue bg-primary-blue/10 px-2 py-1 rounded-full">
                        {item.category}
                      </span>
                      <span className="text-sm text-neutral-500">
                        {new Date(item.publishDate).toLocaleDateString('ja-JP')}
                      </span>
                    </div>
                    <h3 className="text-lg font-semibold text-primary mb-2 line-clamp-2 group-hover:text-primary-blue transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-neutral-600 text-sm line-clamp-3">
                      {item.summary}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
            <div className="text-center mt-8">
              <Button asChild variant="outline">
                <Link href="/news">
                  ニュース一覧を見る
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-primary to-primary-navy text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            ご不明な点はお気軽にお問い合わせください
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            サービスに関するご質問やご相談がございましたら、
            お気軽にお声がけください。
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="blue">
              <Link href="/contact">お問い合わせ</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary">
              <Link href="/locations">拠点を探す</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}