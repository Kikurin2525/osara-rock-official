import { Metadata } from 'next';
import { ContactBand } from '@/components/layout/ContactBand';
import { PageIntro } from '@/components/layout/PageIntro';
import { companyInfo } from '@/data/company';

export const metadata: Metadata = {
  title: '特定商取引法に基づく表記',
  description: '株式会社オサラロックの特定商取引法に基づく表記。レンタルスタジオ・レンタルスペースのご利用料金のお支払いについて記載しています。',
};

// 2026-10-01 新設(Stripe・PayPayの審査条件)。DAYSの表記(days-studio.com/tokushoho.html)と内容をそろえる
const rows: { label: string; value: React.ReactNode }[] = [
  { label: '販売業者', value: companyInfo.name },
  { label: '代表者', value: '菊田 大介' },
  { label: '所在地', value: `〒338-0002 ${companyInfo.address}` },
  { label: '電話番号', value: companyInfo.phone },
  { label: 'メールアドレス', value: companyInfo.email },
  {
    label: 'サービスの内容',
    value: (
      <>
        レンタルスタジオ・レンタルスペース(時間貸しのスペース)の提供。店舗は
        <a href="/spaces" className="underline">店舗一覧</a>
        をご覧ください
      </>
    ),
  },
  { label: '販売価格', value: '各店舗のサイト・予約画面に表示した料金(税込)。定期利用は、ご利用月の請求書に記載した金額(税込)' },
  { label: '商品代金以外の必要料金', value: '銀行振込の場合の振込手数料、インターネット接続の通信費はお客様のご負担です' },
  { label: '支払方法', value: 'クレジットカード、PayPay(決済代行: Stripe ほか各予約サイト)。定期利用のみ、銀行振込も選べます' },
  { label: '支払時期', value: '通常のご予約: 予約時に決済が確定します。定期利用: 月末締め・翌月末までにお支払いください' },
  { label: 'サービスの提供時期', value: 'ご予約いただいた日時' },
  {
    label: 'キャンセル・変更',
    value: '通常のご予約: 予約時にご案内するキャンセル規定に従います。定期利用: 利用日の8日前までは無料/7日前〜2日前は料金の50%/前日・当日は料金の100%をキャンセル料として申し受けます',
  },
  { label: '返金', value: '当社の都合で利用できなかった場合は全額を返金します。返金の方法はお支払い方法に準じます' },
];

export default function TokushohoPage() {
  return (
    <div className="flex flex-col">
      <PageIntro
        eyebrow="Legal"
        title="特定商取引法に基づく表記"
        description="レンタルスタジオ・レンタルスペースのご利用料金のお支払いについての表記です。"
      />

      <section className="section-space bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <dl className="divide-y divide-primary/15 border-y border-primary/15">
            {rows.map((r) => (
              <div key={r.label} className="grid gap-2 py-5 sm:grid-cols-[14rem_1fr] sm:gap-6">
                <dt className="font-bold text-primary">{r.label}</dt>
                <dd className="text-neutral-700 leading-relaxed">{r.value}</dd>
              </div>
            ))}
          </dl>
          <p className="mt-8 text-sm text-neutral-600 leading-relaxed">
            教材・デジタルコンテンツの販売については、各販売ページに記載の表記に従います。
          </p>
        </div>
      </section>

      <ContactBand
        title="お支払いに関するお問い合わせ"
        description="ご不明な点がありましたら、お問い合わせフォームよりご連絡ください。"
        showSpacesLink={false}
      />
    </div>
  );
}
