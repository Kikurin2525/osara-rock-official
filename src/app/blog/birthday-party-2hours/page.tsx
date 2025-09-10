import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import { ArrowLeft, PartyPopper, Clock, Gift } from 'lucide-react';

export const metadata: Metadata = {
  title: '2時間で楽しむ！初心者向けバースデーパーティの進め方',
  description: '準備30分・本番80分・片付け10分。最低限の飾り付けで"映える"空間を作るコツ。',
};

export default function BirthdayParty2HoursPage() {
  return (
    <div className="flex flex-col">
      {/* ヒーローセクション */}
      <section className="relative bg-gradient-to-br from-neutral-50 to-white py-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1530103862676-de8c9debad1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
            alt="カラフルな誕生日パーティーの装飾"
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
              <span className="text-xs bg-primary-blue/10 text-primary-blue px-2 py-1 rounded-full">パーティ</span>
              <span className="text-xs bg-primary-blue/10 text-primary-blue px-2 py-1 rounded-full">生誕祭</span>
              <span className="text-xs bg-primary-blue/10 text-primary-blue px-2 py-1 rounded-full">初心者</span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary mb-6">
              2時間で楽しむ！<br />
              初心者向けバースデーパーティの進め方
            </h1>
            <p className="text-lg sm:text-xl text-neutral-600 max-w-2xl mx-auto">
              準備30分・本番80分・片付け10分。<br />
              最低限の飾り付けで"映える"空間を作るコツ。
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
                <PartyPopper className="w-5 h-5 mr-2" />
                この記事で分かること
              </h2>
              <ul className="text-neutral-700 space-y-2">
                <li>• 2時間で完結するパーティーの進め方</li>
                <li>• 最小限の準備で最大の効果を得る方法</li>
                <li>• 推し活・生誕祭に使えるアイデア</li>
              </ul>
            </div>

            <h2 className="text-2xl font-bold text-primary border-b-2 border-primary-blue/20 pb-2 mb-6">
              なぜ2時間がベストなの？
            </h2>
            <p className="text-neutral-700 leading-relaxed mb-6">
              初めてパーティーを企画する人にとって、2時間という短時間設定はメリットがたくさんあります。費用を抑えられる、準備が簡単、参加者も集中して楽しめる、そして何より失敗のリスクが少ないのです。
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
              <div className="bg-neutral-50 rounded-lg p-4 text-center">
                <Clock className="w-8 h-8 text-primary-blue mx-auto mb-2" />
                <h3 className="font-bold text-primary mb-2">時間管理しやすい</h3>
                <p className="text-sm text-neutral-600">短時間なので集中して楽しめる</p>
              </div>
              <div className="bg-neutral-50 rounded-lg p-4 text-center">
                <Gift className="w-8 h-8 text-primary-blue mx-auto mb-2" />
                <h3 className="font-bold text-primary mb-2">コスト削減</h3>
                <p className="text-sm text-neutral-600">会場費や飲食費を抑えられる</p>
              </div>
              <div className="bg-neutral-50 rounded-lg p-4 text-center">
                <PartyPopper className="w-8 h-8 text-primary-blue mx-auto mb-2" />
                <h3 className="font-bold text-primary mb-2">準備が簡単</h3>
                <p className="text-sm text-neutral-600">最低限の装飾で十分映える</p>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-primary border-b-2 border-primary-blue/20 pb-2 mb-6">
              【準備30分】効率的なセットアップ
            </h2>
            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 rounded-r-lg mb-6">
              <h3 className="font-bold text-yellow-800 mb-3">事前準備が成功の鍵！</h3>
              <p className="text-yellow-700">当日慌てないよう、前日までに装飾品の準備と配置プランを決めておきましょう。</p>
            </div>

            <div className="space-y-6 mb-8">
              <div className="bg-neutral-50 rounded-lg p-6">
                <h3 className="text-lg font-bold text-primary mb-4">必須アイテム（最低限）</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <ul className="text-neutral-700 space-y-2">
                    <li>• バルーン（3〜5個）</li>
                    <li>• バースデーバナー</li>
                    <li>• テーブルクロス</li>
                    <li>• 使い捨て食器セット</li>
                  </ul>
                  <ul className="text-neutral-700 space-y-2">
                    <li>• キャンドル</li>
                    <li>• 写真撮影用小道具</li>
                    <li>• 音楽再生機器</li>
                    <li>• ケーキまたはお菓子</li>
                  </ul>
                </div>
              </div>

              <div className="bg-primary-blue/5 rounded-lg p-6">
                <h3 className="text-lg font-bold text-primary mb-4">セットアップの手順（30分で完了）</h3>
                <ol className="text-neutral-700 space-y-3">
                  <li><strong>1. 会場チェック（5分）：</strong> 電源、音響、照明の確認</li>
                  <li><strong>2. テーブル準備（10分）：</strong> クロスを敷き、食器を配置</li>
                  <li><strong>3. 装飾設置（10分）：</strong> バルーン、バナーを設置</li>
                  <li><strong>4. 最終確認（5分）：</strong> 写真撮影、音楽テスト</li>
                </ol>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-primary border-b-2 border-primary-blue/20 pb-2 mb-6">
              【本番80分】タイムスケジュール例
            </h2>
            <div className="space-y-4 mb-8">
              <div className="flex items-start bg-white border-l-4 border-primary-blue p-4 rounded-r-lg shadow-sm">
                <div className="bg-primary-blue text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-4 flex-shrink-0">
                  1
                </div>
                <div>
                  <h3 className="font-bold text-primary">0-15分：ウェルカムタイム</h3>
                  <p className="text-neutral-700">参加者到着、飲み物配布、軽い雑談で雰囲気作り</p>
                </div>
              </div>
              
              <div className="flex items-start bg-white border-l-4 border-primary-blue p-4 rounded-r-lg shadow-sm">
                <div className="bg-primary-blue text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-4 flex-shrink-0">
                  2
                </div>
                <div>
                  <h3 className="font-bold text-primary">15-45分：メインイベント</h3>
                  <p className="text-neutral-700">ケーキカット、お祝いメッセージ、記念撮影</p>
                </div>
              </div>
              
              <div className="flex items-start bg-white border-l-4 border-primary-blue p-4 rounded-r-lg shadow-sm">
                <div className="bg-primary-blue text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-4 flex-shrink-0">
                  3
                </div>
                <div>
                  <h3 className="font-bold text-primary">45-70分：フリータイム</h3>
                  <p className="text-neutral-700">食事、歓談、ゲーム、自由な写真撮影</p>
                </div>
              </div>
              
              <div className="flex items-start bg-white border-l-4 border-primary-blue p-4 rounded-r-lg shadow-sm">
                <div className="bg-primary-blue text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-4 flex-shrink-0">
                  4
                </div>
                <div>
                  <h3 className="font-bold text-primary">70-80分：エンディング</h3>
                  <p className="text-neutral-700">集合写真、お見送り準備、プレゼント渡し</p>
                </div>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-primary border-b-2 border-primary-blue/20 pb-2 mb-6">
              推し活・生誕祭におすすめアイデア
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="bg-pink-50 rounded-lg p-6">
                <h3 className="text-lg font-bold text-primary mb-3">💖 推し色テーマ</h3>
                <ul className="text-neutral-700 space-y-2">
                  <li>• 推しのメンバーカラーで統一</li>
                  <li>• バルーンやクロスも推し色に</li>
                  <li>• 写真パネルを設置</li>
                  <li>• ファンアートを飾る</li>
                </ul>
              </div>
              <div className="bg-blue-50 rounded-lg p-6">
                <h3 className="text-lg font-bold text-primary mb-3">🎵 音楽とダンス</h3>
                <ul className="text-neutral-700 space-y-2">
                  <li>• 推しの楽曲でBGM</li>
                  <li>• みんなでダンス練習</li>
                  <li>• 歌詞カードを用意</li>
                  <li>• ペンライト持参</li>
                </ul>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-primary border-b-2 border-primary-blue/20 pb-2 mb-6">
              【片付け10分】スムーズな撤収
            </h2>
            <div className="bg-green-50 border-l-4 border-green-400 p-6 rounded-r-lg mb-6">
              <h3 className="font-bold text-green-800 mb-3">参加者みんなで協力！</h3>
              <p className="text-green-700">最後まで楽しい思い出にするため、みんなで協力して片付けをしましょう。</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="bg-neutral-50 rounded-lg p-6">
                <h3 className="text-lg font-bold text-primary mb-3">効率的な片付け手順</h3>
                <ol className="text-neutral-700 space-y-2">
                  <li>1. ゴミを分別して袋にまとめる</li>
                  <li>2. 装飾品を丁寧に取り外す</li>
                  <li>3. テーブルを元の状態に戻す</li>
                  <li>4. 最終チェックで忘れ物確認</li>
                </ol>
              </div>
              <div className="bg-neutral-50 rounded-lg p-6">
                <h3 className="text-lg font-bold text-primary mb-3">持ち帰りリスト</h3>
                <ul className="text-neutral-700 space-y-2">
                  <li>• 装飾品（再利用可能）</li>
                  <li>• ゴミ（持ち帰りが基本）</li>
                  <li>• 余った食べ物</li>
                  <li>• 個人の荷物</li>
                </ul>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-primary border-b-2 border-primary-blue/20 pb-2 mb-6">
              パーティスペースを活用しよう
            </h2>
            <div className="bg-gradient-to-r from-primary to-primary-navy text-white rounded-lg p-8 text-center mb-8">
              <h3 className="text-xl font-bold mb-4">
                オサラロックのパーティスペースで特別な時間を
              </h3>
              <p className="mb-6">
                生誕祭や推し活イベントに最適な設備が充実。<br />
                装飾自由、音響完備で思い出に残るパーティーを！
              </p>
              <div className="space-y-2 mb-6 text-sm">
                <p>🎉 コットン・レイズ・ナチュラ・ポケット・ピース</p>
                <p>📍 大宮エリア中心に展開中</p>
              </div>
              <Button 
                as="a" 
                href="https://linktr.ee/osara_rock" 
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 text-base bg-white text-primary rounded-md hover:bg-gray-50"
              >
                パーティスペース一覧
              </Button>
            </div>

            <h2 className="text-2xl font-bold text-primary border-b-2 border-primary-blue/20 pb-2 mb-6">
              失敗しないためのチェックリスト
            </h2>
            <div className="bg-yellow-50 rounded-lg p-6 mb-8">
              <h3 className="text-lg font-bold text-primary mb-4">当日朝の最終確認</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <ul className="text-neutral-700 space-y-2">
                  <li>☑️ 会場の予約確認</li>
                  <li>☑️ 装飾品の持参チェック</li>
                  <li>☑️ ケーキの受け取り時間</li>
                  <li>☑️ 参加者への最終連絡</li>
                </ul>
                <ul className="text-neutral-700 space-y-2">
                  <li>☑️ 音楽プレイリスト準備</li>
                  <li>☑️ カメラ・スマホの充電</li>
                  <li>☑️ ゴミ袋の準備</li>
                  <li>☑️ 緊急連絡先の確認</li>
                </ul>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-primary border-b-2 border-primary-blue/20 pb-2 mb-6">
              まとめ
            </h2>
            <p className="text-neutral-700 leading-relaxed mb-6">
              2時間という限られた時間だからこそ、集中して特別な時間を過ごすことができます。完璧を目指さず、みんなが楽しめることを第一に考えましょう。
            </p>
            <div className="bg-primary-blue/5 rounded-lg p-6 mb-8">
              <h3 className="text-lg font-bold text-primary mb-3">成功のポイント</h3>
              <ul className="text-neutral-700 space-y-2">
                <li>• シンプルな装飾でも心がこもっていれば十分</li>
                <li>• 時間管理を徹底して余裕を持つ</li>
                <li>• 参加者みんなで作り上げる雰囲気を大切に</li>
                <li>• 写真撮影で思い出を残すことを忘れずに</li>
              </ul>
            </div>
            <p className="text-neutral-700 leading-relaxed mb-8">
              推しの誕生日や特別な記念日を、心に残る素敵なパーティーでお祝いしてください。きっと最高の思い出になるはずです！
            </p>

            <div className="border-t-2 border-neutral-200 pt-8">
              <div className="flex justify-between items-center">
                <Button as="a" href="/blog" className="inline-flex items-center px-4 py-2 text-sm border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  ブログ一覧に戻る
                </Button>
                <div className="flex gap-2">
                  <span className="text-xs bg-primary-blue/10 text-primary-blue px-2 py-1 rounded-full">パーティ</span>
                  <span className="text-xs bg-primary-blue/10 text-primary-blue px-2 py-1 rounded-full">生誕祭</span>
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