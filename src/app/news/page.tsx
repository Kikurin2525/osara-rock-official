import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/Button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';
import { getPublishedNews, getNewsByCategory } from '@/data/news';
import { ArrowRight, Calendar, Tag } from 'lucide-react';

export const metadata: Metadata = {
  title: 'ニュース',
  description: '株式会社オサラロックの最新ニュース、新店舗情報、キャンペーン情報をご紹介します。',
};

const categories = [
  { id: 'all', name: '全て' },
  { id: 'お知らせ', name: 'お知らせ' },
  { id: '新店舗', name: '新店舗' },
  { id: 'キャンペーン', name: 'キャンペーン' },
  { id: 'イベント', name: 'イベント' },
  { id: 'メディア', name: 'メディア' },
];

export default function NewsPage() {
  const allNews = getPublishedNews();

  return (
    <div className="flex flex-col">
      {/* ヒーローセクション */}
      <section className="relative bg-gradient-to-br from-neutral-50 to-white py-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1504711434969-e33886168f5c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
            alt="ニュースや最新情報を伝える新聞やメディアのイメージ"
            fill
            className="object-cover opacity-5"
            priority
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl lg:text-5xl font-bold text-primary mb-6">
              ニュース
            </h1>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto leading-relaxed">
              新店舗情報やキャンペーン、各種お知らせなど、<br />
              株式会社オサラロックの最新情報をお届けします。
            </p>
          </div>
        </div>
      </section>

      {/* ニュース一覧 */}
      <section className="py-20 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {allNews.map((news) => (
              <Card key={news.id} className="group bg-white hover:shadow-xl transition-all duration-300">
                <CardHeader>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs text-primary-blue bg-primary-blue/10 px-2 py-1 rounded-full font-medium">
                      {news.category}
                    </span>
                    <div className="flex items-center text-sm text-neutral-500">
                      <Calendar className="h-4 w-4 mr-1" />
                      <span>{new Date(news.publishDate).toLocaleDateString('ja-JP')}</span>
                    </div>
                  </div>
                  <CardTitle className="text-xl group-hover:text-primary-blue transition-colors line-clamp-2">
                    {news.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-neutral-600 leading-relaxed mb-4 line-clamp-3">
                    {news.summary}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex flex-wrap gap-1">
                      {news.tags.slice(0, 2).map((tag) => (
                        <span key={tag} className="text-xs bg-neutral-100 text-neutral-600 px-2 py-1 rounded-full">
                          {tag}
                        </span>
                      ))}
                      {news.tags.length > 2 && (
                        <span className="text-xs text-neutral-400">+{news.tags.length - 2}</span>
                      )}
                    </div>
                    <Button asChild variant="ghost" size="sm" className="group">
                      <Link href={`/news/${news.slug}`}>
                        続きを読む
                        <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {allNews.length === 0 && (
            <div className="text-center py-16">
              <div className="w-16 h-16 bg-neutral-200 rounded-full flex items-center justify-center mx-auto mb-4">
                <Tag className="h-8 w-8 text-neutral-400" />
              </div>
              <h3 className="text-lg font-semibold text-primary mb-2">まだニュースがありません</h3>
              <p className="text-neutral-600">
                最新情報は随時更新いたします。
              </p>
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-primary to-primary-navy text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            最新情報をお見逃しなく
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            新店舗オープンやお得なキャンペーン情報を
            いち早くお知らせいたします。
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="blue">
              <Link href="/contact">お問い合わせ</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary">
              <Link href="/brands">ブランドを見る</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}