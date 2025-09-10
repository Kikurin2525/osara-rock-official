import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/Button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/Card';
import { 
  Building2,
  Users,
  Target,
  CheckCircle,
  ArrowRight,
  Clock,
  Shield,
  TrendingUp,
  Heart,
  Lightbulb,
  Handshake
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'サービス',
  description: 'レンタルスペース事業から運営代行・コンサルティングまで、株式会社オサラロックのサービスをご紹介します。',
};


export default function ServicesPage() {
  return (
    <div className="flex flex-col">
      {/* ヒーローセクション */}
      <section className="relative bg-gradient-to-br from-neutral-50 to-white py-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
            alt="モダンなオフィス空間での会議の様子"
            fill
            className="object-cover opacity-40"
            priority
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary mb-6">
              サービス
            </h1>
            <p className="text-lg sm:text-xl text-neutral-600 max-w-3xl mx-auto leading-relaxed">
              レンタルスペース事業から<br className="block sm:hidden" />運営代行・コンサルティングまで、<br />
              お客様の成功を支える<br className="block sm:hidden" />幅広いサービスをご提供します。
            </p>
          </div>
        </div>
      </section>

      {/* サービス紹介 */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {/* レンタルスペース事業 */}
            <div>
              <Card className="bg-gradient-to-br from-primary to-primary-navy text-white">
                <CardHeader className="text-center pb-8">
                  <div className="w-20 h-20 bg-primary-blue rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <Building2 className="h-10 w-10 text-white" />
                  </div>
                  <CardTitle className="text-3xl text-white mb-4">レンタルスペース事業</CardTitle>
                  <CardDescription className="text-white/80 text-lg">
                    お客様の大切な時間と物語を受け止める場所づくり
                  </CardDescription>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-white/90 text-lg leading-relaxed mb-8">
                    ダンススタジオ、フォトスタジオ、<br className="block sm:hidden" />パーティスペース、<br className="block sm:hidden" />ワークスペースなど、<br />
                    様々な用途に対応する<br className="block sm:hidden" />レンタルスペースを運営しています。<br />
                    清潔で安心できる環境と、<br className="block sm:hidden" />お客様目線のサービスで、<br />
                    皆様の特別な時間を<br className="block sm:hidden" />サポートいたします。
                  </p>
                  <Button 
                    as="a" 
                    href="https://linktr.ee/osara_rock"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-8 py-3 text-base bg-gradient-to-r from-primary to-primary-blue text-white rounded-full hover:from-primary-navy hover:to-primary shadow-lg hover:shadow-xl transition-all duration-300 font-semibold"
                  >
                    📍 運営スペース一覧を見る
                  </Button>
                </CardContent>
              </Card>
            </div>

            {/* 運営代行・コンサルティング事業 */}
            <div>
              <Card className="bg-neutral-50 border-2 border-neutral-200">
                <CardHeader className="text-center pb-8">
                  <div className="w-20 h-20 bg-primary-blue/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <Lightbulb className="h-10 w-10 text-primary-blue" />
                  </div>
                  <CardTitle className="text-3xl text-primary mb-4">運営代行・コンサルティング事業</CardTitle>
                  <CardDescription className="text-neutral-600 text-lg">
                    豊富な実績とノウハウで事業成功をサポート
                  </CardDescription>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-neutral-700 text-lg leading-relaxed mb-8">
                    これまでの運営経験と<br className="block sm:hidden" />ノウハウを活かし、<br />
                    レンタルスペース事業者様の<br className="block sm:hidden" />運営代行から<br className="block sm:hidden" />コンサルティングまで、<br />
                    幅広くサポートいたします。<br />
                    新規開業から既存事業の改善まで、<br className="block sm:hidden" />お気軽にご相談ください。
                  </p>
                  <Button as="a" href="/contact" className="px-6 py-3 text-base border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50">
                    詳しくお問い合わせ
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-primary to-primary-navy text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-6">
            お気軽にお問い合わせください
          </h2>
          <p className="text-lg sm:text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            サービスについての<br className="block sm:hidden" />ご質問やご相談など、<br />
            何でもお気軽に<br className="block sm:hidden" />お問い合わせください。
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button as="a" href="/contact" className="px-6 py-3 text-base bg-blue-600 text-white rounded-md hover:bg-blue-700">
              お問い合わせ
            </Button>
            <Button as="a" href="/about" className="px-6 py-3 text-base border border-white text-white rounded-md hover:bg-white hover:text-primary">
              会社概要
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}