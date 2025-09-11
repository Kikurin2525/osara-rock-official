import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/Button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';
import { ArrowRight, Calendar, User, Clock, Tag } from 'lucide-react';

export const metadata: Metadata = {
  title: 'ブログ | 株式会社オサラロック - レンタルスペース運営ノウハウ・業界情報',
  description: '株式会社オサラロックのブログ。レンタルスペース運営ノウハウ、ダンス・撮影のコツ、業界最新情報、経営者の思いやスタッフの声をお届け。推し活、コスプレ、パーティに役立つ情報が満載です。',
  keywords: 'ブログ,レンタルスペース,ダンス,撮影,推し活,コスプレ,運営ノウハウ,業界情報',
  openGraph: {
    title: 'ブログ | 株式会社オサラロック - レンタルスペース運営ノウハウ・業界情報',
    description: 'レンタルスペース運営ノウハウ、ダンス・撮影のコツ、業界最新情報、経営者の思いやスタッフの声をお届け。',
    url: 'https://osara-rock.com/blog',
    siteName: '株式会社オサラロック',
    images: [
      {
        url: '/og-default.png',
        width: 1200,
        height: 630,
        alt: '株式会社オサラロック ブログ',
      },
    ],
    locale: 'ja_JP',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ブログ | 株式会社オサラロック',
    description: 'レンタルスペース運営ノウハウ、ダンス・撮影のコツ、業界最新情報をお届け。',
    images: ['/og-default.png'],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://osara-rock.com/blog',
  },
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
    imageUrl: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
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
    imageUrl: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
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
    imageUrl: "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
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
              業界の最新情報や経営者の思い、<br className="block sm:hidden" />スタッフの声など、<br />
              株式会社オサラロックからの<br className="block sm:hidden" />メッセージをお届けします。
            </p>
          </div>
        </div>
      </section>

      {/* ブログ一覧 */}
      <section className="py-20 bg-neutral-50">
        <main className="container mx-auto max-w-5xl px-4">

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {blogPosts.map((post) => (
          <Link key={post.id} href={`/blog/${post.slug}`}>
            <article className="rounded-xl border bg-white p-5 hover:shadow-lg transition cursor-pointer">
              {/* 画像を使う場合だけ表示（imageUrlは型でoptionalにしてある） */}
              {post.imageUrl ? (
                <div className="rounded-lg overflow-hidden mb-4">
                  {/* next/image をもうimportしてあるならOK */}
                  <Image src={post.imageUrl} alt={post.title} width={600} height={360} className="w-full h-48 object-cover" />
                </div>
              ) : null}
              <h2 className="text-xl font-semibold mb-2 text-neutral-800">{post.title}</h2>
              <p className="text-sm text-neutral-500 mb-3">{post.date}</p>
              <p className="text-neutral-600 mb-4">{post.description}</p>
              <div className="flex gap-2">
                {post.tags.map((tag) => (
                  <span key={tag} className="text-xs bg-primary-blue/10 text-primary-blue px-2 py-1 rounded-full">
                    {tag}
                  </span>
                ))}
              </div>
            </article>
          </Link>
        ))}
        </div>
        </main>
      </section>
    </div>
  );
}