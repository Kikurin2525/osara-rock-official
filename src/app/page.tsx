import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/Button';

export default function HomePage() {
  return (
    <div className="flex flex-col">
      {/* ヒーローセクション */}
      <section className="relative min-h-[90vh] flex items-center justify-center bg-gradient-to-br from-neutral-50 to-white">
        <div className="absolute inset-0 z-0">
          <Image
            src="/hero.jpg"
            alt="オサラロック ヒーロー背景"
            fill
            className="object-cover opacity-20"
            priority
          />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-primary mb-6">
            思い出を受け止める、<br />
            <span className="text-primary-blue">お皿のような場所づくり</span>
          </h1>
          <p className="text-xl text-neutral-600 mb-8 max-w-2xl mx-auto">
            ダンススタジオから姫系フォトスタジオまで、<br />
            あなたの大切な時間と物語をサポートします。
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button as="a" href="/services" className="px-6 py-3 text-base bg-blue-600 text-white rounded-md hover:bg-blue-700">
              サービスを見る
            </Button>
            <Button as="a" href="/contact" className="px-6 py-3 text-base border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50">
              お問い合わせ
            </Button>
          </div>
        </div>
      </section>

      {/* サービス紹介 */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              サービス
            </h2>
            <p className="text-lg text-neutral-600">
              2つのメイン事業でお客様をサポート
            </p>
          </div>

          <div className="space-y-16">
            {/* レンタルスペース事業 */}
            <div>
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-primary mb-2">レンタルスペース事業</h3>
                <p className="text-neutral-600">お客様の大切な時間と物語をサポートするスペースを運営</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="relative aspect-[4/3] rounded-lg overflow-hidden group">
                  <Image
                    src="/DAYS.jpeg"
                    alt="ダンススタジオ DAYS"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-4 left-4 text-white">
                    <h4 className="font-semibold">誰でも使いやすいダンススタジオ</h4>
                    <p className="text-sm opacity-90">DAYS</p>
                  </div>
                </div>

                <div className="relative aspect-[4/3] rounded-lg overflow-hidden group">
                  <Image
                    src="/tiarina.jpg"
                    alt="姫系フォトスタジオ Tiarina"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-4 left-4 text-white">
                    <h4 className="font-semibold">推し活に最適な姫系スタジオ</h4>
                    <p className="text-sm opacity-90">Tiarina</p>
                  </div>
                </div>

                <div className="relative aspect-[4/3] rounded-lg overflow-hidden group">
                  <Image
                    src="/party.jpeg"
                    alt="パーティスペース Rays・cotton"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-4 left-4 text-white">
                    <h4 className="font-semibold">最高の思い出の1ページを</h4>
                    <p className="text-sm opacity-90">パーティスペース（Rays・cotton etc.）</p>
                  </div>
                </div>

                <div className="relative aspect-[4/3] rounded-lg overflow-hidden group">
                  <Image
                    src="/torano.jpeg"
                    alt="とらのワークスペース"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-4 left-4 text-white">
                    <h4 className="font-semibold">最高に集中できる環境</h4>
                    <p className="text-sm opacity-90">とらのワークスペース</p>
                  </div>
                </div>
              </div>
            </div>

            {/* 運営代行・コンサルティング事業 */}
            <div>
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-primary mb-2">運営代行・コンサルティング事業</h3>
                <p className="text-neutral-600">豊富な実績とノウハウで事業成功をサポート</p>
              </div>
              <div className="bg-neutral-50 rounded-lg p-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                  <div className="relative aspect-[4/3] rounded-lg overflow-hidden">
                    <Image
                      src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                      alt="コンサルティング"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <div className="w-2 h-2 bg-primary-blue rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <span className="text-neutral-700">新規開業・立地選定・設備計画</span>
                      </li>
                      <li className="flex items-start">
                        <div className="w-2 h-2 bg-primary-blue rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <span className="text-neutral-700">運営代行・日々の管理業務</span>
                      </li>
                      <li className="flex items-start">
                        <div className="w-2 h-2 bg-primary-blue rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <span className="text-neutral-700">利用率向上・収益最適化</span>
                      </li>
                      <li className="flex items-start">
                        <div className="w-2 h-2 bg-primary-blue rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <span className="text-neutral-700">マーケティング・ブランディング支援</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <Button as="a" href="/services" className="px-6 py-3 text-base border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50">
              サービス詳細を見る
            </Button>
          </div>
        </div>
      </section>

      {/* 実績・数字で見るオサラロック */}
      <section className="py-20 bg-gradient-to-br from-neutral-50 to-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              数字で見るオサラロック
            </h2>
            <p className="text-lg text-neutral-600">
              お客様に選ばれ続ける理由
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* 直営店舗数 */}
            <div className="text-center bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-primary-blue/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-primary-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <div className="text-4xl font-bold text-primary mb-2">19</div>
              <div className="text-lg font-semibold text-neutral-800 mb-1">直営店舗</div>
              <div className="text-sm text-neutral-600">2025年9月現在</div>
            </div>

            {/* 運営年数 */}
            <div className="text-center bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-primary-blue/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-primary-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div className="text-4xl font-bold text-primary mb-2">4年+</div>
              <div className="text-lg font-semibold text-neutral-800 mb-1">運営実績</div>
              <div className="text-sm text-neutral-600">2021年創業以来</div>
            </div>

            {/* 満足度 */}
            <div className="text-center bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-primary-blue/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-primary-blue" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
              </div>
              <div className="text-4xl font-bold text-primary mb-2">4.7★</div>
              <div className="text-lg font-semibold text-neutral-800 mb-1">お客様満足度</div>
              <div className="text-sm text-neutral-600">スペースマーケット・インスタベース平均</div>
            </div>
          </div>

          <div className="text-center mt-12">
            <p className="text-lg text-neutral-700 font-medium">
              多くのお客様にご愛用いただき、<br className="sm:hidden" />
              高い評価をいただいております
            </p>
          </div>
        </div>
      </section>

      {/* お問い合わせ */}
      <section className="py-20 bg-primary text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            お気軽にお問い合わせください
          </h2>
          <p className="text-xl text-white/90 mb-8">
            サービスについてのご質問やご相談など、何でもお気軽にどうぞ。
          </p>
          <Button as="a" href="/contact" className="px-6 py-3 text-base bg-blue-600 text-white rounded-md hover:bg-blue-700">
            お問い合わせ
          </Button>
        </div>
      </section>
    </div>
  );
}