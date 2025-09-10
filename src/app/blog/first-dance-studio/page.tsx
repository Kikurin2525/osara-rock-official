import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import { ArrowLeft, Music, Clock, CheckCircle } from 'lucide-react';

export const metadata: Metadata = {
  title: 'ダンス初心者でも安心！レンタルスタジオの使い方',
  description: '予約から当日の流れ、片付けまで。失敗しないチェックポイントを初心者向けに解説。',
};

export default function FirstDanceStudioPage() {
  return (
    <div className="flex flex-col">
      {/* ヒーローセクション */}
      <section className="relative bg-gradient-to-br from-neutral-50 to-white py-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
            alt="ダンススタジオで練習する人たち"
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
              <span className="text-xs bg-primary-blue/10 text-primary-blue px-2 py-1 rounded-full">ダンス</span>
              <span className="text-xs bg-primary-blue/10 text-primary-blue px-2 py-1 rounded-full">スタジオ</span>
              <span className="text-xs bg-primary-blue/10 text-primary-blue px-2 py-1 rounded-full">初心者</span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary mb-6">
              ダンス初心者でも安心！<br />
              レンタルスタジオの使い方
            </h1>
            <p className="text-lg sm:text-xl text-neutral-600 max-w-2xl mx-auto">
              予約から当日の流れ、片付けまで。<br />
              失敗しないチェックポイントを初心者向けに解説。
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
                <Music className="w-5 h-5 mr-2" />
                この記事で分かること
              </h2>
              <ul className="text-neutral-700 space-y-2">
                <li>• レンタルスタジオの予約から利用までの流れ</li>
                <li>• 初心者が注意すべきポイント</li>
                <li>• 当日の持ち物と準備事項</li>
              </ul>
            </div>

            <h2 className="text-2xl font-bold text-primary border-b-2 border-primary-blue/20 pb-2 mb-6">
              なぜレンタルスタジオがおすすめ？
            </h2>
            <p className="text-neutral-700 leading-relaxed mb-6">
              ダンスを始めたいけれど、自宅では音楽を大きくかけられない、鏡がない、スペースが狭い…そんな悩みを解決してくれるのがレンタルスタジオです。
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="bg-neutral-50 rounded-lg p-6">
                <h3 className="text-lg font-bold text-primary mb-3">スタジオのメリット</h3>
                <ul className="text-neutral-700 space-y-2">
                  <li>• 大きな鏡で動きをチェック</li>
                  <li>• 音響設備で本格練習</li>
                  <li>• 広いスペースで思い切り動ける</li>
                  <li>• エアコン完備で快適</li>
                </ul>
              </div>
              <div className="bg-neutral-50 rounded-lg p-6">
                <h3 className="text-lg font-bold text-primary mb-3">初心者にも優しい</h3>
                <ul className="text-neutral-700 space-y-2">
                  <li>• 1時間から利用可能</li>
                  <li>• 個人利用OK</li>
                  <li>• 清潔で安全な環境</li>
                  <li>• アクセスの良い立地</li>
                </ul>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-primary border-b-2 border-primary-blue/20 pb-2 mb-6">
              【ステップ1】予約をしよう
            </h2>
            <div className="bg-neutral-50 rounded-lg p-6 mb-6">
              <h3 className="text-lg font-bold text-primary mb-3">予約前のチェックポイント</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-primary-blue mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <strong>利用目的を明確に：</strong> 個人練習、友人との練習、撮影など
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-primary-blue mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <strong>利用時間を決める：</strong> 初心者は1〜2時間がおすすめ
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-primary-blue mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <strong>立地を確認：</strong> アクセスしやすい場所を選ぶ
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-primary-blue mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <strong>設備をチェック：</strong> 音響、鏡、更衣室の有無
                  </div>
                </div>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-primary border-b-2 border-primary-blue/20 pb-2 mb-6">
              【ステップ2】当日の準備
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="bg-primary-blue/5 rounded-lg p-6">
                <h3 className="text-lg font-bold text-primary mb-3">持ち物リスト</h3>
                <ul className="text-neutral-700 space-y-2">
                  <li><strong>必須：</strong></li>
                  <li>• 動きやすい服装</li>
                  <li>• 室内用シューズ</li>
                  <li>• タオル</li>
                  <li>• 水分補給用ドリンク</li>
                  <li><strong>あると便利：</strong></li>
                  <li>• 音楽データ（USBやスマホ）</li>
                  <li>• 着替え</li>
                  <li>• ヘアゴム</li>
                </ul>
              </div>
              <div className="bg-primary-blue/5 rounded-lg p-6">
                <h3 className="text-lg font-bold text-primary mb-3">服装のポイント</h3>
                <ul className="text-neutral-700 space-y-2">
                  <li>• <strong>動きやすさ重視：</strong> ストレッチ素材</li>
                  <li>• <strong>鏡で見やすい：</strong> 体のラインが分かる</li>
                  <li>• <strong>シューズ：</strong> 滑りにくいソール</li>
                  <li>• <strong>髪型：</strong> 邪魔にならないよう結ぶ</li>
                </ul>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-primary border-b-2 border-primary-blue/20 pb-2 mb-6">
              【ステップ3】スタジオ利用の流れ
            </h2>
            
            <div className="space-y-6 mb-8">
              <div className="flex">
                <div className="flex-shrink-0 w-12 h-12 bg-primary-blue rounded-full flex items-center justify-center text-white font-bold mr-4">
                  1
                </div>
                <div>
                  <h3 className="text-lg font-bold text-primary mb-2">到着・受付</h3>
                  <p className="text-neutral-700">予約時間の5〜10分前に到着。受付で本人確認と利用説明を受けます。</p>
                </div>
              </div>
              
              <div className="flex">
                <div className="flex-shrink-0 w-12 h-12 bg-primary-blue rounded-full flex items-center justify-center text-white font-bold mr-4">
                  2
                </div>
                <div>
                  <h3 className="text-lg font-bold text-primary mb-2">スタジオ確認</h3>
                  <p className="text-neutral-700">設備の使い方、注意事項を確認。音響機器の操作方法も教えてもらいましょう。</p>
                </div>
              </div>
              
              <div className="flex">
                <div className="flex-shrink-0 w-12 h-12 bg-primary-blue rounded-full flex items-center justify-center text-white font-bold mr-4">
                  3
                </div>
                <div>
                  <h3 className="text-lg font-bold text-primary mb-2">練習開始</h3>
                  <p className="text-neutral-700">まずは軽くストレッチから。徐々に体を慣らしていきましょう。</p>
                </div>
              </div>
              
              <div className="flex">
                <div className="flex-shrink-0 w-12 h-12 bg-primary-blue rounded-full flex items-center justify-center text-white font-bold mr-4">
                  4
                </div>
                <div>
                  <h3 className="text-lg font-bold text-primary mb-2">終了・片付け</h3>
                  <p className="text-neutral-700">使った道具を元の位置に戻し、ゴミがあれば持ち帰ります。</p>
                </div>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-primary border-b-2 border-primary-blue/20 pb-2 mb-6">
              初心者がやりがちな失敗と対策
            </h2>
            <div className="space-y-4 mb-8">
              <div className="bg-red-50 border-l-4 border-red-400 p-4 rounded-r-lg">
                <h3 className="font-bold text-red-800 mb-2">❌ 時間ギリギリに到着</h3>
                <p className="text-red-700">→ <strong>対策：</strong> 余裕を持って15分前には到着する</p>
              </div>
              <div className="bg-red-50 border-l-4 border-red-400 p-4 rounded-r-lg">
                <h3 className="font-bold text-red-800 mb-2">❌ 音楽の準備不足</h3>
                <p className="text-red-700">→ <strong>対策：</strong> 事前に使いたい曲をスマホやUSBに保存</p>
              </div>
              <div className="bg-red-50 border-l-4 border-red-400 p-4 rounded-r-lg">
                <h3 className="font-bold text-red-800 mb-2">❌ 無理な練習で怪我</h3>
                <p className="text-red-700">→ <strong>対策：</strong> ストレッチを十分に行い、無理をしない</p>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-primary border-b-2 border-primary-blue/20 pb-2 mb-6">
              DAYSスタジオで快適練習
            </h2>
            <div className="bg-gradient-to-r from-primary to-primary-navy text-white rounded-lg p-8 text-center mb-8">
              <h3 className="text-xl font-bold mb-4 flex items-center justify-center">
                <Clock className="w-6 h-6 mr-2" />
                初心者に優しいDAYSスタジオ
              </h3>
              <p className="mb-6">
                1時間から利用可能、清潔で使いやすい設備、駅チカでアクセス抜群。<br />
                ダンス初心者の方でも安心してご利用いただけます。
              </p>
              <Button 
                as="a" 
                href="https://linktr.ee/osara_rock" 
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 text-base bg-white text-primary rounded-md hover:bg-gray-50"
              >
                スタジオ一覧を見る
              </Button>
            </div>

            <h2 className="text-2xl font-bold text-primary border-b-2 border-primary-blue/20 pb-2 mb-6">
              まとめ
            </h2>
            <p className="text-neutral-700 leading-relaxed mb-6">
              レンタルスタジオの利用は、最初は緊張するかもしれませんが、一度使ってみると「こんなに快適だったのか！」と驚くはずです。
            </p>
            <div className="bg-primary-blue/5 rounded-lg p-6 mb-8">
              <h3 className="text-lg font-bold text-primary mb-3">覚えておきたいポイント</h3>
              <ul className="text-neutral-700 space-y-2">
                <li>• 予約は余裕を持って</li>
                <li>• 持ち物は前日に準備</li>
                <li>• 時間厳守で気持ちよく利用</li>
                <li>• 分からないことは遠慮なく質問</li>
              </ul>
            </div>
            <p className="text-neutral-700 leading-relaxed mb-8">
              ダンスは続けることが一番大切です。快適な環境で練習して、楽しいダンスライフを送りましょう！
            </p>

            <div className="border-t-2 border-neutral-200 pt-8">
              <div className="flex justify-between items-center">
                <Button as="a" href="/blog" className="inline-flex items-center px-4 py-2 text-sm border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  ブログ一覧に戻る
                </Button>
                <div className="flex gap-2">
                  <span className="text-xs bg-primary-blue/10 text-primary-blue px-2 py-1 rounded-full">ダンス</span>
                  <span className="text-xs bg-primary-blue/10 text-primary-blue px-2 py-1 rounded-full">スタジオ</span>
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