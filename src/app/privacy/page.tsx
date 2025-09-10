import { Metadata } from 'next';
import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import { companyInfo } from '@/data/company';
import { ArrowLeft, Shield } from 'lucide-react';

export const metadata: Metadata = {
  title: 'プライバシーポリシー',
  description: '株式会社オサラロックのプライバシーポリシー。お客様の個人情報の取り扱いについて説明しています。',
};

export default function PrivacyPage() {
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
            <Shield className="h-8 w-8 text-primary-blue" />
          </div>
          <h1 className="text-3xl lg:text-4xl font-bold text-primary mb-4">
            プライバシーポリシー
          </h1>
          <p className="text-lg text-neutral-600">
            お客様の個人情報の取り扱いについて
          </p>
        </div>
      </section>

      {/* プライバシーポリシー本文 */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <div className="text-sm text-neutral-600 mb-8">
              制定日：2024年11月1日<br />
              最終更新：2024年11月1日
            </div>

            <p className="text-neutral-700 leading-relaxed mb-8">
              株式会社オサラロック（以下「当社」といいます）は、当社が提供するサービス（以下「本サービス」といいます）における、
              お客様の個人情報の取扱いについて、以下のとおりプライバシーポリシー（以下「本ポリシー」といいます）を定めます。
            </p>

            <h2 className="text-2xl font-bold text-primary mb-6 mt-12">第1条（個人情報）</h2>
            <p className="text-neutral-700 leading-relaxed mb-6">
              「個人情報」とは、個人情報保護法にいう「個人情報」を指すものとし、生存する個人に関する情報であって、
              当該情報に含まれる氏名、生年月日、住所、電話番号、連絡先その他の記述等により特定の個人を識別することができる情報
              及び容貌、指紋、声紋にかかるデータ、及び健康保険証の保険者番号などの当該情報単体から特定の個人を識別することができる情報
              （個人識別情報）を指します。
            </p>

            <h2 className="text-2xl font-bold text-primary mb-6 mt-12">第2条（個人情報の収集方法）</h2>
            <p className="text-neutral-700 leading-relaxed mb-6">
              当社は、お客様が利用登録をする際に氏名、生年月日、住所、電話番号、メールアドレス、
              その他当社が定める情報を収集いたします。また、お客様と当社のサービス提供者との間でなされる、
              お客様の個人情報を含む取引記録や決済に関する情報を、当社の関係者（情報提供元、広告主、広告配信先などを含みます。
              以下、「関係者」といいます）から収集することがあります。
            </p>

            <h2 className="text-2xl font-bold text-primary mb-6 mt-12">第3条（個人情報を収集・利用する目的）</h2>
            <p className="text-neutral-700 leading-relaxed mb-4">
              当社が個人情報を収集・利用する目的は、以下のとおりです。
            </p>
            <ul className="list-disc list-inside text-neutral-700 space-y-2 mb-6">
              <li>当社サービスの提供・運営のため</li>
              <li>お客様からのお問い合わせに回答するため</li>
              <li>お客様にご購入いただいた商品・サービスに関するご案内のため</li>
              <li>メンテナンス、重要なお知らせなど必要に応じたご連絡のため</li>
              <li>利用規約に違反したお客様や、不正・不当な目的でサービスを利用しようとするお客様の特定をし、ご利用をお断りするため</li>
              <li>お客様にご自身の登録情報の閲覧や変更、削除、ご利用状況の閲覧を行っていただくため</li>
              <li>上記の利用目的に付随する目的</li>
            </ul>

            <h2 className="text-2xl font-bold text-primary mb-6 mt-12">第4条（利用目的の変更）</h2>
            <p className="text-neutral-700 leading-relaxed mb-6">
              当社は、利用目的が変更前と関連性を有すると合理的に認められる場合に限り、
              個人情報の利用目的を変更するものとします。利用目的の変更を行った場合には、
              変更後の目的について、当社所定の方法により、お客様に通知し、または本ウェブサイト上に公表するものとします。
            </p>

            <h2 className="text-2xl font-bold text-primary mb-6 mt-12">第5条（個人情報の第三者提供）</h2>
            <p className="text-neutral-700 leading-relaxed mb-4">
              当社は、次に掲げる場合を除いて、あらかじめお客様の同意を得ることなく、
              第三者に個人情報を提供することはありません。ただし、個人情報保護法その他の法令で認められる場合を除きます。
            </p>
            <ul className="list-disc list-inside text-neutral-700 space-y-2 mb-6">
              <li>人の生命、身体または財産の保護のために必要がある場合であって、本人の同意を得ることが困難であるとき</li>
              <li>公衆衛生の向上または児童の健全な育成の推進のために特に必要がある場合であって、本人の同意を得ることが困難であるとき</li>
              <li>国の機関もしくは地方公共団体またはその委託を受けた者が法令の定める事務を遂行することに対して協力する必要がある場合であって、本人の同意を得ることにより当該事務の遂行に支障を及ぼすおそれがあるとき</li>
            </ul>

            <h2 className="text-2xl font-bold text-primary mb-6 mt-12">第6条（個人情報の開示）</h2>
            <p className="text-neutral-700 leading-relaxed mb-6">
              当社は、本人から個人情報の開示を求められたときは、本人に対し、遅滞なくこれを開示します。
              ただし、開示することにより次のいずれかに該当する場合は、その全部または一部を開示しないこともあり、
              開示しない決定をした場合には、その旨を遅滞なく通知します。
            </p>

            <h2 className="text-2xl font-bold text-primary mb-6 mt-12">第7条（個人情報の訂正および削除）</h2>
            <p className="text-neutral-700 leading-relaxed mb-6">
              お客様は、当社の保有する自己の個人情報が誤った情報である場合には、
              当社が定める手続きにより、当社に対して個人情報の訂正、追加または削除（以下、「訂正等」といいます）を請求することができます。
              当社は、お客様から前項の請求を受けてその請求に理由があると判断した場合には、
              遅滞なく、当該個人情報の訂正等を行うものとします。
            </p>

            <h2 className="text-2xl font-bold text-primary mb-6 mt-12">第8条（個人情報の利用停止等）</h2>
            <p className="text-neutral-700 leading-relaxed mb-6">
              当社は、本人から、個人情報が、利用目的の範囲を超えて取り扱われているという理由、
              または不正の手段により取得されたものであるという理由により、その利用の停止または消去（以下、「利用停止等」といいます）を求められた場合には、
              遅滞なく必要な調査を行います。
            </p>

            <h2 className="text-2xl font-bold text-primary mb-6 mt-12">第9条（プライバシーポリシーの変更）</h2>
            <p className="text-neutral-700 leading-relaxed mb-6">
              本ポリシーの内容は、法令その他本ポリシーに別段の定めのある事項を除いて、
              お客様に通知することなく、変更することができるものとします。
              当社が別途定める場合を除いて、変更後のプライバシーポリシーは、本ウェブサイトに掲載したときから効力を生じるものとします。
            </p>

            <h2 className="text-2xl font-bold text-primary mb-6 mt-12">第10条（お問い合わせ窓口）</h2>
            <p className="text-neutral-700 leading-relaxed mb-4">
              本ポリシーに関するお問い合わせは、下記の窓口までお願いいたします。
            </p>
            <div className="bg-neutral-50 p-6 rounded-lg">
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
          <Button as="a" href="/contact" className="px-4 py-2 text-sm bg-blue-600 text-white rounded-md hover:bg-blue-700">
            お問い合わせ
          </Button>
        </div>
      </section>
    </div>
  );
}