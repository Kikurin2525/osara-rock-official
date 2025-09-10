import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/Button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';
import { companyInfo, companyTimeline } from '@/data/company';
import { 
  Calendar,
  Target,
  Users,
  Heart,
  Building,
  TrendingUp
} from 'lucide-react';

export const metadata: Metadata = {
  title: '会社概要',
  description: '株式会社オサラロックの会社概要。ミッション・ビジョン、沿革、代表メッセージをご紹介します。',
};

const values = [
  {
    icon: Heart,
    title: '体験価値へのこだわり',
    description: '単なるスペース提供ではなく、お客様の大切な時間を豊かにする体験価値の創出を重視します。',
  },
  {
    icon: Users,
    title: 'お客様の物語を大切に',
    description: 'あらゆるお客様の物語を受け止め、それぞれのニーズに寄り添ったサービスをご提供します。',
  },
  {
    icon: Building,
    title: '清潔で安心できる空間提供',
    description: '常に清潔で快適、そして安全な環境を維持し、安心してご利用いただける空間づくりに努めます。',
  },
  {
    icon: TrendingUp,
    title: '継続的な成長と改善',
    description: 'お客様のフィードバックを真摯に受け止め、常により良いサービスへと改善し続けます。',
  },
];

export default function AboutPage() {
  return (
    <div className="flex flex-col">
      {/* ヒーローセクション */}
      <section className="relative bg-gradient-to-br from-neutral-50 to-white py-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
            alt="会社概要・オフィス環境のイメージ"
            fill
            className="object-cover opacity-40"
            priority
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary mb-6">
              会社概要
            </h1>
            <p className="text-lg sm:text-xl text-neutral-600 max-w-3xl mx-auto leading-relaxed">
              思い出を受け止める、<br className="block sm:hidden" />お皿のような場所づくり。<br />
              株式会社オサラロックの<br className="block sm:hidden" />理念と歩みをご紹介します。
            </p>
          </div>
        </div>
      </section>

      {/* ミッション・ビジョン */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-4">
              ミッション・ビジョン
            </h2>
            <p className="text-lg text-neutral-600">
              私たちが大切にしている理念
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            <Card className="bg-gradient-to-br from-primary to-primary-navy text-white">
              <CardHeader className="text-center pb-6">
                <div className="w-16 h-16 bg-primary-blue rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Target className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-2xl text-white">ミッション</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-xl font-semibold mb-4 text-primary-blue">
                  {companyInfo.mission}
                </p>
                <p className="text-white/90 leading-relaxed">
                  人々の大切な時間と物語を受け止める"お皿"として、<br />
                  付加価値・楽しさ・喜び・思い出を提供し続ける。<br />
                  私たちは、レンタルスペース・スタジオを通じて、<br />
                  利用者一人ひとりの体験を豊かにし、安心と笑顔を届けます。
                </p>
              </CardContent>
            </Card>

            <Card className="bg-neutral-50 border-2 border-neutral-200">
              <CardHeader className="text-center pb-6">
                <div className="w-16 h-16 bg-primary-blue/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="h-8 w-8 text-primary-blue" />
                </div>
                <CardTitle className="text-2xl text-primary">ビジョン</CardTitle>
              </CardHeader>
              <CardContent className="text-left">
                <div className="space-y-4 text-neutral-700 leading-relaxed">
                  <p className="text-lg font-medium">
                    レンタルスペースで持続可能な事業モデルを確立し、<br />
                    誰もが活用できる形で提供する。
                  </p>
                  <ul className="space-y-3 text-base">
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-primary-blue rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      副業から独立まで、挑戦する人々を支援する仕組みを整備する。
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-primary-blue rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      「仕事に悩む人」「自由を求める人」が新しいキャリアを築ける道を開く。
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-primary-blue rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      全国に広がるレンタルスペースを通じて、社会に多様な居場所と機会を生み出す。
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* バリュー（価値観） */}
      <section className="py-20 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-4">
              私たちの価値観
            </h2>
            <p className="text-lg text-neutral-600">
              日々の事業活動で大切にしている4つの価値観
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="bg-white hover:shadow-xl transition-all duration-300">
                <CardHeader>
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-primary-blue/10 rounded-xl flex items-center justify-center">
                      <value.icon className="h-6 w-6 text-primary-blue" />
                    </div>
                    <CardTitle className="text-xl text-primary">{value.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-neutral-600 leading-relaxed">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* 会社沿革 */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-4">
              会社沿革
            </h2>
            <p className="text-lg text-neutral-600">
              私たちの成長の歩み
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {companyTimeline.map((item, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-4 h-4 bg-primary-blue rounded-full mt-2"></div>
                    {index < companyTimeline.length - 1 && (
                      <div className="w-px bg-neutral-200 h-16 ml-2 mt-2"></div>
                    )}
                  </div>
                  <div className="flex-grow">
                    <div className="flex items-center space-x-3 mb-2">
                      <span className="text-sm font-semibold text-primary-blue bg-primary-blue/10 px-3 py-1 rounded-full">
                        {item.date}
                      </span>
                      <Calendar className="h-4 w-4 text-neutral-400" />
                    </div>
                    <h3 className="text-xl font-semibold text-primary mb-2">{item.title}</h3>
                    <p className="text-neutral-600 leading-relaxed">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 代表メッセージ */}
      <section className="py-20 bg-gradient-to-r from-neutral-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-12 text-center">
              代表メッセージ
            </h2>
            <div className="max-w-4xl mx-auto">
              <div className="bg-white rounded-2xl p-8 lg:p-10 shadow-lg">
                <div className="text-lg text-neutral-700 leading-relaxed space-y-6">
                  <p>
                    株式会社オサラロックは、2021年の創業以来、「人の大切な時間と物語を受け止めるお皿」として、
                    多くのお客様の特別な瞬間をサポートしてまいりました。
                  </p>
                  <p>
                    ダンスの練習に励む方、大切な仲間との時間を過ごす方、理想の写真撮影を求める方、
                    集中して作業したい方——様々な「物語」を持つお客様お一人おひとりに寄り添い、
                    最高の体験をご提供することが私たちの使命です。
                  </p>
                  <p>
                    これからも「Rock Your Story, We&apos;re the Plate.」の理念のもと、
                    お客様の物語をしっかりと受け止められる存在として、
                    さらなるサービスの向上と新しい価値の創造に取り組んでまいります。
                  </p>
                </div>
                <div className="mt-8 pt-6 border-t border-neutral-200">
                  <p className="text-lg font-semibold text-primary">
                    株式会社オサラロック　代表取締役
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 実績・数字で見るオサラロック */}
      <section className="py-20 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-4">
              これまでの実績
            </h2>
            <p className="text-lg text-neutral-600">
              多くのお客様に支えられながら成長してまいりました
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* 直営店舗数 */}
            <div className="text-center bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-all duration-300">
              <div className="w-20 h-20 bg-primary-blue/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-primary-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <div className="text-5xl font-bold text-primary mb-3">19</div>
              <div className="text-xl font-semibold text-neutral-800 mb-2">直営店舗</div>
              <div className="text-neutral-600">
                2025年9月現在<br />
                ダンス・フォト・パーティスペースを<br />
                都内を中心に展開
              </div>
            </div>

            {/* 運営年数 */}
            <div className="text-center bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-all duration-300">
              <div className="w-20 h-20 bg-primary-blue/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-primary-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div className="text-5xl font-bold text-primary mb-3">4年+</div>
              <div className="text-xl font-semibold text-neutral-800 mb-2">運営実績</div>
              <div className="text-neutral-600">
                2021年創業以来<br />
                安定したサービス提供を<br />
                継続しています
              </div>
            </div>

            {/* 満足度 */}
            <div className="text-center bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-all duration-300">
              <div className="w-20 h-20 bg-primary-blue/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-primary-blue" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
              </div>
              <div className="text-5xl font-bold text-primary mb-3">4.7★</div>
              <div className="text-xl font-semibold text-neutral-800 mb-2">お客様満足度</div>
              <div className="text-neutral-600">
                スペースマーケット・<br />
                インスタベース平均評価<br />
                高品質なサービスの証拠
              </div>
            </div>
          </div>

          <div className="text-center mt-16">
            <div className="bg-gradient-to-r from-primary to-primary-navy text-white rounded-2xl p-8 max-w-4xl mx-auto">
              <h3 className="text-2xl font-bold mb-4">お客様からの信頼</h3>
              <p className="text-lg leading-relaxed">
                多種多様なお客様のニーズにお応えし、常に高い満足度を維持しています。<br />
                これからもお客様の大切な時間と物語を受け止める場所として、<br />
                さらなるサービス向上に努めてまいります。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 会社情報 */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-4">
              会社情報
            </h2>
          </div>

          <div className="max-w-4xl mx-auto">
            <Card className="bg-neutral-50">
              <CardContent className="p-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-sm font-semibold text-neutral-500 uppercase tracking-wide mb-1">
                        会社名
                      </h3>
                      <p className="text-lg font-semibold text-primary">{companyInfo.name}</p>
                      <p className="text-sm text-neutral-600">{companyInfo.nameEn}</p>
                    </div>
                    <div>
                      <h3 className="text-sm font-semibold text-neutral-500 uppercase tracking-wide mb-1">
                        創業
                      </h3>
                      <p className="text-lg text-neutral-700">{companyInfo.established}</p>
                    </div>
                    <div>
                      <h3 className="text-sm font-semibold text-neutral-500 uppercase tracking-wide mb-1">
                        法人設立
                      </h3>
                      <p className="text-lg text-neutral-700">{companyInfo.incorporation}</p>
                    </div>
                  </div>
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-sm font-semibold text-neutral-500 uppercase tracking-wide mb-1">
                        所在地
                      </h3>
                      <p className="text-lg text-neutral-700">{companyInfo.address}</p>
                    </div>
                    <div>
                      <h3 className="text-sm font-semibold text-neutral-500 uppercase tracking-wide mb-1">
                        TEL
                      </h3>
                      <p className="text-lg text-neutral-700">{companyInfo.phone}</p>
                    </div>
                    <div>
                      <h3 className="text-sm font-semibold text-neutral-500 uppercase tracking-wide mb-1">
                        Email
                      </h3>
                      <p className="text-lg text-neutral-700">{companyInfo.email}</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-primary to-primary-navy text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            あなたの物語をお聞かせください
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            お客様のニーズに合わせた最適なスペースとサービスをご提案いたします。
            まずはお気軽にお問い合わせください。
          </p>
<div className="flex flex-col sm:flex-row gap-4 justify-center">
  <Button as="a" href="/contact" className="px-6 py-3 text-base bg-blue-600 text-white rounded-md">
    お問い合わせ
  </Button>

  <Button as="a" href="/services" className="px-6 py-3 text-base border border-white text-white rounded-md">
    サービスを見る
  </Button>
</div>
        </div>
      </section>
    </div>
  );
}