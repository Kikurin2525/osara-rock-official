import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/Button';

export default function HomePage() {
  return (
    <div className="flex flex-col">
      {/* ヒーローセクション */}
      <section className="relative min-h-[90vh] flex items-center justify-center bg-gradient-to-br from-neutral-50 to-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-primary mb-6">
            思い出を受け止める、<br />
            <span className="text-primary-blue">お皿のような場所づくり</span>
          </h1>
          <p className="text-xl text-neutral-600 mb-8 max-w-2xl mx-auto">
            ダンススタジオから姫系フォトスタジオまで、<br />
            あなたの大切な時間と物語をサポートします。
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="blue">
              <Link href="/services">サービスを見る</Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href="/contact">お問い合わせ</Link>
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
                    src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                    alt="ダンススタジオ"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-4 left-4 text-white">
                    <h4 className="font-semibold">ダンススタジオ</h4>
                    <p className="text-sm opacity-90">誰でも気軽に使えるスタジオ設計</p>
                  </div>
                </div>

                <div className="relative aspect-[4/3] rounded-lg overflow-hidden group">
                  <Image
                    src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                    alt="姫系フォトスタジオ"
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
                    src="https://images.unsplash.com/photo-1582719508461-905c673771fd?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                    alt="パーティスペース"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-4 left-4 text-white">
                    <h4 className="font-semibold">最高の思い出の1ページを</h4>
                    <p className="text-sm opacity-90">パーティスペース</p>
                  </div>
                </div>

                <div className="relative aspect-[4/3] rounded-lg overflow-hidden group">
                  <Image
                    src="https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                    alt="ワークスペース"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-4 left-4 text-white">
                    <h4 className="font-semibold">ワークスペース</h4>
                    <p className="text-sm opacity-90">集中できる環境</p>
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
            <Button asChild size="lg" variant="outline">
              <Link href="/services">サービス詳細を見る</Link>
            </Button>
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
          <Button asChild size="lg" variant="blue">
            <Link href="/contact">お問い合わせ</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}