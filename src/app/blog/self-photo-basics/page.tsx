import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import { ArrowLeft, Camera, Smartphone, Users } from 'lucide-react';

export const metadata: Metadata = {
  title: 'スマホ1台でOK！セルフフォト初心者の始め方',
  description: '推し活やコスプレでセルフフォトをはじめたい人へ。スマホだけで失敗しない3ステップ。',
};

export default function SelfPhotoBasicsPage() {
  return (
    <div className="flex flex-col">
      {/* ヒーローセクション */}
      <section className="relative bg-gradient-to-br from-neutral-50 to-white py-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1516035069371-29a1b244cc32?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
            alt="スマートフォンで撮影する女性"
            fill
            className="object-cover opacity-40"
            priority
          />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <Button as="a" href="/blog" className="inline-flex items-center px-4 py-2 text-sm border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50">
              <ArrowLeft className="w-4 h-4 mr-2" />
              ブログ一覧に戻る
            </Button>
          </div>
          <div className="text-center">
            <div className="flex justify-center gap-2 mb-4">
              <span className="text-xs bg-primary-blue/10 text-primary-blue px-2 py-1 rounded-full">撮影</span>
              <span className="text-xs bg-primary-blue/10 text-primary-blue px-2 py-1 rounded-full">推し活</span>
              <span className="text-xs bg-primary-blue/10 text-primary-blue px-2 py-1 rounded-full">初心者</span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary mb-6">
              スマホ1台でOK！<br />
              セルフフォト初心者の始め方
            </h1>
            <p className="text-lg sm:text-xl text-neutral-600 max-w-2xl mx-auto">
              推し活やコスプレでセルフフォトをはじめたい人へ。<br />
              スマホだけで失敗しない3ステップ。
            </p>
            <div className="mt-8 text-sm text-neutral-500">
              公開日：2025年9月9日
            </div>
          </div>
        </div>
      </section>

      {/* 記事本文 */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            
            <div className="bg-primary-blue/5 border-l-4 border-primary-blue p-6 rounded-r-lg mb-8">
              <h2 className="text-xl font-bold text-primary mb-3 flex items-center">
                <Camera className="w-5 h-5 mr-2" />
                この記事で分かること
              </h2>
              <ul className="text-neutral-700 space-y-2">
                <li>• スマホだけでプロ級のセルフフォトを撮る方法</li>
                <li>• 推し活やコスプレ撮影に役立つテクニック</li>
                <li>• 初心者でも失敗しない3つのステップ</li>
              </ul>
            </div>

            <h2 className="text-2xl font-bold text-primary border-b-2 border-primary-blue/20 pb-2 mb-6">
              セルフフォトって何？
            </h2>
            <p className="text-neutral-700 leading-relaxed mb-6">
              セルフフォトとは、自分で自分を撮影する写真のことです。推し活では生誕祭や記念日に、コスプレでは衣装のお披露目に、SNSでは日常の記録として、多くの人に愛されている撮影方法です。
            </p>
            <p className="text-neutral-700 leading-relaxed mb-8">
              「カメラがないから無理」「技術がないから難しそう」と思っている方も多いですが、実はスマートフォン1台あれば、誰でも素敵なセルフフォトが撮れるんです。
            </p>

            <h2 className="text-2xl font-bold text-primary border-b-2 border-primary-blue/20 pb-2 mb-6">
              【ステップ1】光を味方につけよう
            </h2>
            <div className="bg-neutral-50 rounded-lg p-6 mb-6">
              <h3 className="text-lg font-bold text-primary mb-3">自然光を活用する</h3>
              <p className="text-neutral-700 mb-4">
                最も重要なのは光です。窓際の自然光を使うことで、肌が綺麗に見え、全体的に明るい印象の写真が撮れます。
              </p>
              <ul className="text-neutral-700 space-y-2">
                <li><strong>ベストタイム：</strong> 午前10時〜午後2時</li>
                <li><strong>避けるべき：</strong> 直射日光（影が強く出すぎる）</li>
                <li><strong>曇りの日：</strong> 実は柔らかい光でおすすめ</li>
              </ul>
            </div>

            <h2 className="text-2xl font-bold text-primary border-b-2 border-primary-blue/20 pb-2 mb-6">
              【ステップ2】スマホの設定を最適化
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="bg-neutral-50 rounded-lg p-6">
                <h3 className="text-lg font-bold text-primary mb-3 flex items-center">
                  <Smartphone className="w-5 h-5 mr-2" />
                  基本設定
                </h3>
                <ul className="text-neutral-700 space-y-2">
                  <li>• 画質を最高に設定</li>
                  <li>• グリッド線をON</li>
                  <li>• タイマー機能を活用</li>
                  <li>• フラッシュはOFF</li>
                </ul>
              </div>
              <div className="bg-neutral-50 rounded-lg p-6">
                <h3 className="text-lg font-bold text-primary mb-3">
                  撮影のコツ
                </h3>
                <ul className="text-neutral-700 space-y-2">
                  <li>• 少し上から撮る</li>
                  <li>• 連写機能を使う</li>
                  <li>• ポーズを3つ準備</li>
                  <li>• 背景もチェック</li>
                </ul>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-primary border-b-2 border-primary-blue/20 pb-2 mb-6">
              【ステップ3】ポーズと表情のバリエーション
            </h2>
            <p className="text-neutral-700 leading-relaxed mb-6">
              同じ場所でも、ポーズや表情を変えることで全く違う印象の写真が撮れます。事前に鏡の前で練習しておくと、撮影当日にスムーズに進められます。
            </p>
            
            <div className="bg-primary-blue/5 rounded-lg p-6 mb-8">
              <h3 className="text-lg font-bold text-primary mb-4">推し活撮影におすすめポーズ</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                <div className="text-center">
                  <div className="w-12 h-12 bg-primary-blue/20 rounded-full flex items-center justify-center mx-auto mb-2">
                    <span className="text-lg">💖</span>
                  </div>
                  <p className="font-medium">ハートポーズ</p>
                  <p className="text-neutral-600">手でハートを作る</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-primary-blue/20 rounded-full flex items-center justify-center mx-auto mb-2">
                    <span className="text-lg">✌️</span>
                  </div>
                  <p className="font-medium">ピースサイン</p>
                  <p className="text-neutral-600">顔の横でピース</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-primary-blue/20 rounded-full flex items-center justify-center mx-auto mb-2">
                    <span className="text-lg">🌟</span>
                  </div>
                  <p className="font-medium">決めポーズ</p>
                  <p className="text-neutral-600">推しの真似ポーズ</p>
                </div>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-primary border-b-2 border-primary-blue/20 pb-2 mb-6">
              レンタルスペースを活用しよう
            </h2>
            <p className="text-neutral-700 leading-relaxed mb-6">
              自宅では難しい本格的なセルフフォトを撮りたい場合は、フォトスタジオのレンタルがおすすめです。プロ仕様の照明や背景が揃っているので、スマホでもワンランク上の写真が撮れます。
            </p>
            
            <div className="bg-gradient-to-r from-primary to-primary-navy text-white rounded-lg p-8 text-center">
              <h3 className="text-xl font-bold mb-4">
                Tiarina北千住店でプロ級セルフフォト体験
              </h3>
              <p className="mb-6">
                4つの背景とプロ仕様の照明、レンタルドレスまで完備。<br />
                手ぶらで本格的なセルフフォトが楽しめます。
              </p>
              <Button 
                as="a" 
                href="https://linktr.ee/osara_rock" 
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 text-base bg-white text-primary rounded-md hover:bg-gray-50"
              >
                詳細を見る
              </Button>
            </div>

            <h2 className="text-2xl font-bold text-primary border-b-2 border-primary-blue/20 pb-2 mb-6 mt-12">
              まとめ
            </h2>
            <p className="text-neutral-700 leading-relaxed mb-6">
              セルフフォトは特別な機材がなくても、ちょっとしたコツで格段に良くなります。最初は思うようにいかなくても、練習を重ねることで必ず上達します。
            </p>
            <p className="text-neutral-700 leading-relaxed mb-8">
              大切なのは楽しむこと。推し活やコスプレの思い出を、素敵なセルフフォトで残してみませんか？
            </p>

            <div className="border-t-2 border-neutral-200 pt-8">
              <div className="flex justify-between items-center">
                <Button as="a" href="/blog" className="inline-flex items-center px-4 py-2 text-sm border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  ブログ一覧に戻る
                </Button>
                <div className="flex gap-2">
                  <span className="text-xs bg-primary-blue/10 text-primary-blue px-2 py-1 rounded-full">撮影</span>
                  <span className="text-xs bg-primary-blue/10 text-primary-blue px-2 py-1 rounded-full">推し活</span>
                  <span className="text-xs bg-primary-blue/10 text-primary-blue px-2 py-1 rounded-full">初心者</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}