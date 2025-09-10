import { Metadata } from 'next';
import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import { companyInfo } from '@/data/company';
import { ArrowLeft, FileText } from 'lucide-react';

export const metadata: Metadata = {
  title: '利用規約',
  description: '株式会社オサラロックのサービス利用規約。レンタルスペース利用時のルールと注意事項について説明しています。',
};

export default function TermsPage() {
  return (
    <div className="flex flex-col">
      {/* ナビゲーション */}
      <section className="py-6 bg-white border-b border-neutral-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Button as="a" href="/contact" className="px-3 py-1 text-sm rounded-md hover:bg-gray-100">
            <ArrowLeft className="w-4 h-4 mr-2" />
            お問い合わせページに戻る
          </Button>
        </div>
      </section>

      {/* ヘッダー */}
      <section className="py-12 bg-gradient-to-br from-neutral-50 to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="w-16 h-16 bg-primary-blue/10 rounded-full flex items-center justify-center mx-auto mb-6">
            <FileText className="h-8 w-8 text-primary-blue" />
          </div>
          <h1 className="text-3xl lg:text-4xl font-bold text-primary mb-4">
            利用規約
          </h1>
          <p className="text-lg text-neutral-600">
            サービス利用時のルールと注意事項
          </p>
        </div>
      </section>

      {/* 利用規約本文 */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <div className="text-sm text-neutral-600 mb-8">
              制定日：2024年11月1日<br />
              最終更新：2024年11月1日
            </div>

            <p className="text-neutral-700 leading-relaxed mb-8">
              この利用規約（以下「本規約」といいます）は、株式会社オサラロック（以下「当社」といいます）が提供する
              レンタルスペースサービス（以下「本サービス」といいます）の利用条件を定めるものです。
              本サービスをご利用される皆様（以下「利用者」といいます）には、本規約に従って本サービスをご利用いただきます。
            </p>

            <h2 className="text-2xl font-bold text-primary mb-6 mt-12">第1条（適用）</h2>
            <p className="text-neutral-700 leading-relaxed mb-6">
              本規約は、利用者と当社との間の本サービスの利用に関わる一切の関係に適用されるものとします。
              当社は本サービスに関し、本規約のほか、ご利用にあたってのルール等、各種の定め（以下「個別規定」といいます）をすることがあります。
              これら個別規定はその名称のいかんに関わらず、本規約の一部を構成するものとします。
            </p>

            <h2 className="text-2xl font-bold text-primary mb-6 mt-12">第2条（利用登録）</h2>
            <p className="text-neutral-700 leading-relaxed mb-6">
              本サービスにおいて、登録希望者が当社の定める方法によって利用登録を申請し、
              当社がこれを承認することによって、利用登録が完了するものとします。
              当社は、利用登録の申請者に以下の事由があると判断した場合、利用登録の申請を承認しないことがあり、
              その理由については一切の開示義務を負わないものとします。
            </p>

            <h2 className="text-2xl font-bold text-primary mb-6 mt-12">第3条（予約・利用料金）</h2>
            <p className="text-neutral-700 leading-relaxed mb-4">
              本サービスの利用料金は、当社のウェブサイトまたは各施設に掲示する料金表に従うものとします。
            </p>
            <ul className="list-disc list-inside text-neutral-700 space-y-2 mb-6">
              <li>利用料金は、利用開始前にお支払いいただきます</li>
              <li>お支払い方法は、現金、クレジットカード、電子マネー等、当社指定の方法とします</li>
              <li>利用時間の延長については、追加料金を申し受けます</li>
              <li>料金の返金は、当社の過失による場合を除き、原則として行いません</li>
            </ul>

            <h2 className="text-2xl font-bold text-primary mb-6 mt-12">第4条（キャンセルポリシー）</h2>
            <p className="text-neutral-700 leading-relaxed mb-4">
              予約のキャンセルについては、以下の取り消し料を申し受けます。
            </p>
            <ul className="list-disc list-inside text-neutral-700 space-y-2 mb-6">
              <li>当日キャンセル：利用料金の100%</li>
              <li>前日キャンセル：利用料金の50%</li>
              <li>2日前まで：キャンセル料無料</li>
            </ul>
            <p className="text-neutral-700 leading-relaxed mb-6">
              ただし、天災地変その他やむを得ない事由による場合は、この限りではありません。
            </p>

            <h2 className="text-2xl font-bold text-primary mb-6 mt-12">第5条（施設利用時のルール）</h2>
            <p className="text-neutral-700 leading-relaxed mb-4">
              利用者は、施設利用時において以下のルールを遵守するものとします。
            </p>
            
            <h3 className="text-lg font-semibold text-primary mb-4 mt-8">共通ルール</h3>
            <ul className="list-disc list-inside text-neutral-700 space-y-2 mb-6">
              <li>施設内は禁煙です</li>
              <li>他の利用者や近隣住民への迷惑行為は禁止します</li>
              <li>設備・備品を丁寧に取り扱い、破損した場合は速やかに報告してください</li>
              <li>利用終了時は清掃・片付けを行い、原状復帰してください</li>
              <li>貴重品の管理は各自で行ってください</li>
              <li>法令に反する行為、公序良俗に反する行為は禁止します</li>
            </ul>

            <h3 className="text-lg font-semibold text-primary mb-4 mt-8">ダンススタジオ利用時</h3>
            <ul className="list-disc list-inside text-neutral-700 space-y-2 mb-6">
              <li>室内履きまたは裸足でご利用ください</li>
              <li>汗をかいた際は適宜タオルで拭き取ってください</li>
              <li>大きな音を出す場合は近隣への配慮をお願いします</li>
              <li>機材の操作方法が不明な場合は、スタッフまでお声がけください</li>
            </ul>

            <h3 className="text-lg font-semibold text-primary mb-4 mt-8">パーティスペース利用時</h3>
            <ul className="list-disc list-inside text-neutral-700 space-y-2 mb-6">
              <li>食べ物・飲み物の持ち込みは可能ですが、後片付けをお願いします</li>
              <li>アルコール類の過度な摂取はご遠慮ください</li>
              <li>キッチン使用後は清掃をお願いします</li>
              <li>ゴミは分別して指定の場所に捨ててください</li>
            </ul>

            <h3 className="text-lg font-semibold text-primary mb-4 mt-8">フォトスタジオ利用時</h3>
            <ul className="list-disc list-inside text-neutral-700 space-y-2 mb-6">
              <li>衣装・小道具は大切に取り扱ってください</li>
              <li>メイク・着替えは指定エリアで行ってください</li>
              <li>商用利用の場合は事前にご相談ください</li>
              <li>他者の著作権・肖像権を侵害しないようご注意ください</li>
            </ul>

            <h2 className="text-2xl font-bold text-primary mb-6 mt-12">第6条（禁止事項）</h2>
            <p className="text-neutral-700 leading-relaxed mb-4">
              利用者は、本サービスの利用にあたり、以下の行為をしてはなりません。
            </p>
            <ul className="list-disc list-inside text-neutral-700 space-y-2 mb-6">
              <li>法令または公序良俗に違反する行為</li>
              <li>犯罪行為に関連する行為</li>
              <li>当社、本サービスの他の利用者、または第三者のサーバーまたはネットワークの機能を破壊したり、妨害したりする行為</li>
              <li>当社のサービスの運営を妨害するおそれのある行為</li>
              <li>他の利用者に関する個人情報等を収集または蓄積する行為</li>
              <li>不正アクセスをし、またはこれを試みる行為</li>
              <li>他の利用者に成りすます行為</li>
              <li>反社会的勢力に対して直接または間接に利益を供与する行為</li>
              <li>その他、当社が不適切と判断する行為</li>
            </ul>

            <h2 className="text-2xl font-bold text-primary mb-6 mt-12">第7条（本サービスの提供の停止等）</h2>
            <p className="text-neutral-700 leading-relaxed mb-6">
              当社は、以下のいずれかの事由があると判断した場合、利用者に事前に通知することなく
              本サービスの全部または一部の提供を停止または中断することができるものとします。
              本サービスの提供の停止または中断により、利用者または第三者が被ったいかなる不利益または損害についても、
              当社は一切の責任を負わないものとします。
            </p>

            <h2 className="text-2xl font-bold text-primary mb-6 mt-12">第8条（保証の否認および免責事項）</h2>
            <p className="text-neutral-700 leading-relaxed mb-6">
              当社は、本サービスに事実上または法律上の瑕疵（安全性、信頼性、正確性、完全性、有効性、
              特定の目的への適合性、セキュリティなどに関する欠陥、エラーやバグ、権利侵害などを含みます）がないことを
              明示的にも黙示的にも保証しておりません。
              当社は、本サービスに起因してお客様に生じたあらゆる損害について一切の責任を負いません。
            </p>

            <h2 className="text-2xl font-bold text-primary mb-6 mt-12">第9条（サービス内容の変更等）</h2>
            <p className="text-neutral-700 leading-relaxed mb-6">
              当社は、利用者への事前の告知をもって、本サービスの内容を変更、追加または廃止することがあり、
              利用者はこれに同意するものとします。
            </p>

            <h2 className="text-2xl font-bold text-primary mb-6 mt-12">第10条（利用規約の変更）</h2>
            <p className="text-neutral-700 leading-relaxed mb-6">
              当社は以下の場合には、利用者の個別の同意を要せず、本規約を変更することができるものとします。
              本規約の変更が、利用者の一般の利益に適合するとき。
              本規約の変更が、本サービス利用契約の目的に反せず、かつ、変更の必要性、変更後の内容の相当性その他の変更に係る事情に照らして合理的なものであるとき。
            </p>

            <h2 className="text-2xl font-bold text-primary mb-6 mt-12">第11条（個人情報の取扱い）</h2>
            <p className="text-neutral-700 leading-relaxed mb-6">
              当社は、本サービスの利用によって取得する個人情報については、当社「プライバシーポリシー」に従い適切に取り扱うものとします。
            </p>

            <h2 className="text-2xl font-bold text-primary mb-6 mt-12">第12条（準拠法・裁判管轄）</h2>
            <p className="text-neutral-700 leading-relaxed mb-6">
              本規約の解釈にあたっては、日本法を準拠法とします。
              本サービスに関して紛争が生じた場合には、当社の本店所在地を管轄する裁判所を専属的合意管轄とします。
            </p>

            <div className="bg-neutral-50 p-6 rounded-lg mt-12">
              <h3 className="text-lg font-semibold text-primary mb-4">お問い合わせ</h3>
              <p className="text-neutral-700 mb-4">
                本規約に関するお問い合わせは、下記までご連絡ください。
              </p>
              <p className="text-neutral-700 mb-2"><strong>会社名：</strong>{companyInfo.name}</p>
              <p className="text-neutral-700 mb-2"><strong>住所：</strong>{companyInfo.address}</p>
              <p className="text-neutral-700 mb-2"><strong>電話番号：</strong>{companyInfo.phone}</p>
              <p className="text-neutral-700"><strong>メールアドレス：</strong>{companyInfo.email}</p>
            </div>
          </div>
        </div>
      </section>

      {/* フッター */}
      <section className="py-12 bg-neutral-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-neutral-600 mb-6">
            ご不明な点がございましたら、お気軽にお問い合わせください。
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button as="a" href="/contact" className="px-4 py-2 text-sm bg-blue-600 text-white rounded-md hover:bg-blue-700">
              お問い合わせ
            </Button>
            <Button as="a" href="/privacy" className="px-4 py-2 text-sm border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50">
              プライバシーポリシー
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}