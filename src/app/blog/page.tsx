import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/Button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';
import { ArrowRight, Calendar, User, Clock, Tag } from 'lucide-react';

export const metadata: Metadata = {
  title: 'ブログ',
  description: '株式会社オサラロックのブログ。業界の最新情報や経営者の思い、スタッフの声などをお届けします。',
};

type BlogPost = {
  slug: string;
  title: string;
  description: string;
  date: string;
  tags: string[];
  category: string;
};

const blogPosts: BlogPost[] = [
  {
    slug: "self-photo-basics",
    title: "スマホ1台でOK！セルフフォト初心者の始め方",
    description:
      "推し活やコスプレでセルフフォトをはじめたい人へ。スマホだけで失敗しない3ステップ。",
    date: "2025-09-09",
    tags: ["撮影", "推し活", "初心者"],
    category: "撮影",
  },
  {
    slug: "first-dance-studio",
    title: "ダンス初心者でも安心！レンタルスタジオの使い方",
    description:
      "予約から当日の流れ、片付けまで。失敗しないチェックポイントを初心者向けに解説。",
    date: "2025-09-09",
    tags: ["ダンス", "スタジオ", "初心者"],
    category: "ダンス",
  },
  {
    slug: "birthday-party-2hours",
    title: "2時間で楽しむ！初心者向けバースデーパーティの進め方",
    description:
      "準備30分・本番80分・片付け10分。最低限の飾り付けで“映える”空間を作るコツ。",
    date: "2025-09-09",
    tags: ["パーティ", "生誕祭", "初心者"],
    category: "パーティ",
  },
];

const categories = [
  { id: 'all', name: '全て' },
  { id: '経営', name: '経営' },
  { id: '運営', name: '運営' },
  { id: '活用事例', name: '活用事例' },
  { id: 'お知らせ', name: 'お知らせ' },
];

export default function BlogPage() {
  return (
    <div className="flex flex-col">
      {/* ヒーローセクション */}
      <section className="relative bg-gradient-to-br from-neutral-50 to-white py-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1486312338219-ce68e2c6b7dd?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
            alt="ブログやコンテンツ制作のイメージ"
            fill
            className="object-cover opacity-5"
            priority
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl lg:text-5xl font-bold text-primary mb-6">
              ブログ
            </h1>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto leading-relaxed">
              業界の最新情報や経営者の思い、スタッフの声など、<br />
              株式会社オサラロックの日々の取り組みをお届けします。
            </p>
          </div>
        </div>
      </section>

      {/* ブログ記事一覧 */}
      <section className="py-20 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <Card key={post.id} className="group bg-white hover:shadow-xl transition-all duration-300">
                <div className="relative aspect-video overflow-hidden rounded-t-lg">
                  <Image
                    src={post.imageUrl}
                    alt={post.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="text-xs text-white bg-primary-blue/90 backdrop-blur-sm px-3 py-1 rounded-full font-medium">
                      {post.category}
                    </span>
                  </div>
                </div>
                <CardHeader>
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center text-sm text-neutral-500 space-x-3">
                      <div className="flex items-center">
                        <Calendar className="h-4 w-4 mr-1" />
                        <span>{new Date(post.publishDate).toLocaleDateString('ja-JP')}</span>
                      </div>
                      <div className="flex items-center">
                        <Clock className="h-4 w-4 mr-1" />
                        <span>{post.readTime}</span>
                      </div>
                    </div>
                  </div>
                  <CardTitle className="text-xl group-hover:text-primary-blue transition-colors line-clamp-2">
                    {post.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-neutral-600 leading-relaxed mb-4 line-clamp-3">
                    {post.summary}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-sm text-neutral-500">
                      <User className="h-4 w-4 mr-1" />
                      <span>{post.author}</span>
                    </div>
                    <Button asChild variant="ghost" size="sm" className="group">
                      <Link href={`/blog/${post.slug}`}>
                        続きを読む
                        <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </Button>
                  </div>
                  <div className="flex flex-wrap gap-1 mt-4">
                    {post.tags.slice(0, 3).map((tag) => (
                      <span key={tag} className="text-xs bg-neutral-100 text-neutral-600 px-2 py-1 rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {blogPosts.length === 0 && (
            <div className="text-center py-16">
              <div className="w-16 h-16 bg-neutral-200 rounded-full flex items-center justify-center mx-auto mb-4">
                <Tag className="h-8 w-8 text-neutral-400" />
              </div>
              <h3 className="text-lg font-semibold text-primary mb-2">まだブログ記事がありません</h3>
              <p className="text-neutral-600">
                新しい記事は随時更新いたします。
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
            業界の動向や私たちの取り組みについて、
            定期的に情報をお届けします。
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="blue">
              <Link href="/contact">お問い合わせ</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary">
              <Link href="/services">サービスを見る</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}