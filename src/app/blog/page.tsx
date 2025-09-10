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
  id: string;           // ← 追加！
  slug: string;
  title: string;
  description: string;
  date: string;
  tags: string[];
  category: string;
  imageUrl?: string;    // ← 画像を使うなら追加（なくてもOK）
};

const blogPosts: BlogPost[] = [
  {
    id: "1",
    slug: "self-photo-basics",
    title: "スマホ1台でOK！セルフフォト初心者の始め方",
    description:
      "推し活やコスプレでセルフフォトをはじめたい人へ。スマホだけで失敗しない3ステップ。",
    date: "2025-09-09",
    tags: ["撮影", "推し活", "初心者"],
    category: "撮影",
    imageUrl: "/images/blog/self-photo.jpg",
  },
  {
    id: "2",
    slug: "first-dance-studio",
    title: "ダンス初心者でも安心！レンタルスタジオの使い方",
    description:
      "予約から当日の流れ、片付けまで。失敗しないチェックポイントを初心者向けに解説。",
    date: "2025-09-09",
    tags: ["ダンス", "スタジオ", "初心者"],
    category: "ダンス",
    imageUrl: "/images/blog/dance-studio.jpg",
  },
  {
    id: "3",
    slug: "birthday-party-2hours",
    title: "2時間で楽しむ！初心者向けバースデーパーティの進め方",
    description:
      "準備30分・本番80分・片付け10分。最低限の飾り付けで“映える”空間を作るコツ。",
    date: "2025-09-09",
    tags: ["パーティ", "生誕祭", "初心者"],
    category: "パーティ",
    imageUrl: "/images/blog/party.jpg",
  },
];

export default function BlogPage() {
  return (
    <div className="flex flex-col">
      {/* ヒーローセクション */}
      <section className="relative bg-gradient-to-br from-neutral-50 to-white py-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1455390582262-044cdead277a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
            alt="ブログ・記事・情報発信のイメージ"
            fill
            className="object-cover opacity-40"
            priority
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary mb-6">
              ブログ
            </h1>
            <p className="text-lg sm:text-xl text-neutral-600 max-w-3xl mx-auto leading-relaxed">
              業界の最新情報や経営者の思い、スタッフの声など、<br className="hidden sm:block" />
              株式会社オサラロックからのメッセージをお届けします。
            </p>
          </div>
        </div>
      </section>

      {/* ブログ一覧 */}
      <section className="py-20 bg-neutral-50">
        <main className="container mx-auto max-w-5xl px-4">

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {blogPosts.map((post) => (
          <article
            key={post.id}
            className="rounded-xl border bg-white/5 p-5 hover:shadow-lg transition"
          >
            <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
            <p className="text-sm text-neutral-500 mb-3">{post.date}</p>
            <p className="text-neutral-300 mb-4">{post.description}</p>
            {/* 画像を使う場合だけ表示（imageUrlは型でoptionalにしてある） */}
            {post.imageUrl ? (
              <div className="rounded-lg overflow-hidden">
                {/* next/image をもうimportしてあるならOK */}
                <Image src={post.imageUrl} alt={post.title} width={600} height={360} />
              </div>
            ) : null}
          </article>
        ))}
        </div>
        </main>
      </section>
    </div>
  );
}