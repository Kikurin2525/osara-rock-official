export interface NewsItem {
  id: string;
  title: string;
  slug: string;
  publishDate: string;
  category: 'お知らせ' | '新店舗' | 'キャンペーン' | 'イベント' | 'メディア';
  summary: string;
  content: string;
  image?: string;
  isPublished: boolean;
  tags: string[];
}

export const newsItems: NewsItem[] = [
  {
    id: '004',
    title: 'レンタルスタジオDAYS 早稲田店をオープンしました',
    slug: 'days-waseda-opening',
    publishDate: '2025-02-01',
    category: '新店舗',
    summary: '早稲田にダンススタジオDAYSがオープン。初心者からプロまで幅広くご利用いただけます。',
    content: `
# レンタルスタジオDAYS 早稲田店 グランドオープン

この度、株式会社オサラロックは2025年2月1日、東京都新宿区早稲田にレンタルスタジオDAYS早稲田店をグランドオープンいたしました。

## 店舗概要

**所在地**: 東京都新宿区早稲田  
**最寄駅**: JR・地下鉄 早稲田駅より徒歩圏内  
**営業時間**: 10:00〜22:00（最終受付21:00）  
**定休日**: 年中無休

## 設備・サービス

- **プロ仕様のスタジオ設備**: 音響システム、照明設備を完備
- **広々とした空間**: ダンス練習に最適な広いフロア
- **防音設備**: 周囲を気にせず練習に集中できる環境
- **清潔で快適**: 常に清潔に保たれた安心してご利用いただける空間
- **柔軟な利用時間**: 1時間から長時間利用まで対応

## DAYSブランドの特徴

誰でも使いやすいダンススタジオとして、初心者からプロまで幅広い層の方々にご利用いただけるよう設計されています。アクセスの良い立地で、個人練習からグループ練習まで様々な用途にお応えします。

## オープン記念キャンペーン

2月末まで、初回利用の方には特別料金でご案内いたします。この機会にぜひ、快適なスタジオ環境での練習をお試しください。

皆様のご利用を心よりお待ちしております。

**公式サイト**: [DAYS早稲田店](https://days-waseda.com/)

*お問い合わせ・ご予約は公式サイトまたは当社お問い合わせフォームにて承ります。*
    `,
    image: '/images/news/days-waseda-opening.jpg',
    isPublished: true,
    tags: ['DAYS', '新店舗', 'レンタルスタジオ', '早稲田', 'ダンス'],
  },
  {
    id: '003',
    title: 'パーティスペース「ピース大宮」をオープンしました',
    slug: 'peace-omiya-opening',
    publishDate: '2025-01-29',
    category: '新店舗',
    summary: '大宮駅近くにパーティスペース「ピース大宮」オープン。生誕祭や推し活イベントに最適。',
    content: `
# パーティスペース「ピース大宮」グランドオープン

この度、株式会社オサラロックは2025年1月29日、埼玉県大宮にパーティスペース「ピース大宮」をグランドオープンいたしました。

## 店舗概要

**所在地**: 埼玉県さいたま市大宮区  
**最寄駅**: JR大宮駅より徒歩圏内  
**営業時間**: 10:00〜22:00（最終受付21:00）  
**定休日**: 年中無休

## 設備・サービス

- **パーティに最適な空間**: 生誕祭や推し活イベントに特化した設計
- **充実の設備**: 音響システム、照明設備を完備
- **装飾対応**: お客様のご希望に合わせた装飾が可能
- **アクセス良好**: 大宮駅からのアクセスが便利

## オープン記念キャンペーン

2月末まで、初回利用の方には特別料金でご案内いたします。この機会にぜひ、特別な時間をお過ごしください。

皆様のご利用を心よりお待ちしております。

**ご予約・詳細はこちら**: [スペースマーケット](https://spacemarket.com/p/eIKNVVP7dR6nYaBr)

*お問い合わせは公式サイトのお問い合わせフォームまたはお電話にて承ります。*
    `,
    image: '/images/news/peace-omiya-opening.jpg',
    isPublished: true,
    tags: ['ピース大宮', '新店舗', 'パーティスペース', '大宮'],
  },
  {
    id: '001',
    title: '北千住にフォトスタジオTiarinaをオープンしました',
    slug: 'tiarina-kitasenju-opening',
    publishDate: '2025-08-26',
    category: '新店舗',
    summary: '北千住駅徒歩3分の姫系フォトスタジオ「ティアリナ」オープン。推し活や生誕祭に最適です。',
    content: `
# 【新規オープン】北千住駅3分✨ 推し活・生誕祭にぴったりの姫系撮影スタジオ「ティアリナ北千住」がOPENしました！💖

2025年9月、北千住駅徒歩3分に「ティアリナ北千住店」がオープンいたしました。
選べる4つの背景と2種類のゴージャスな家具、さらにレンタルドレスを備えた、姫系のセルフ撮影スタジオです。推し活やコスプレ撮影、生誕祭の会場としてぜひご利用ください。

## スタジオの特徴

### 4つの世界観を1部屋で楽しめる
「クラシカルな黒」「純白の白」「可愛いピンク」「爽やかなミントブルー」
シーンに合わせて雰囲気を自由に切り替え可能です。

### 手ぶらで変身できるレンタルドレス
白・黒・ピンクのプリンセスドレスをご用意。お友達との双子コーデにもおすすめです。

### アクセス抜群の駅チカ立地
北千住駅1番出口から徒歩3分。撮影前後の買い出しにも便利な環境です。

### 撮影＆配信サポートも充実
LEDリングライト、スマホ三脚、撮影小物を無料でご利用いただけます。動画配信にも対応！

## 基本情報

- **広さ**: 35㎡
- **設備**: 無料WiFi、レンタルドレス3着、撮影小物、LEDリングライト、スマホ三脚ほか

## 利用シーン

推し活（本人不在の誕生日会・生誕祭）、ポートレート、コスプレ、記念日撮影、宣材写真、商品撮影、YouTube/TikTok配信など幅広く活用いただけます。

皆様のご利用を心よりお待ちしております。

*お問い合わせ・ご予約は公式サイトのお問い合わせフォームまたはお電話にて承ります。*
    `,
    image: '/images/news/tiarina-opening.jpg',
    isPublished: true,
    tags: ['Tiarina', '新店舗', '北千住', 'フォトスタジオ'],
  },
  {
    id: '002',
    title: '株式会社オサラロック 法人設立のお知らせ',
    slug: 'company-incorporation',
    publishDate: '2024-11-22',
    category: 'お知らせ',
    summary: '2024年11月、株式会社オサラロックとして法人化。さらなるサービス向上を目指します。',
    content: `
# 法人設立のお知らせ

平素より格別のご愛顧を賜り、厚く御礼申し上げます。

この度、弊社は2024年11月22日をもちまして法人組織へと移行し、「株式会社オサラロック（Osara Rock Inc.）」として新たなスタートを切ることとなりました。

## 法人設立の背景

2021年3月の創業以来、皆様に支えられながら事業を拡大してまいりました。この度の法人化により、以下の点でさらなるサービス向上を図ってまいります：

- **より安定したサービス提供体制の構築**
- **新規事業・新店舗展開の加速**
- **お客様により安心してご利用いただける経営基盤の確立**
- **従業員の雇用環境整備と人材育成の強化**

## 今後の展望

法人化を機に、現在運営中のレンタルスタジオDAYS、各種パーティスペース、ワークスペースに加え、新ブランド「Tiarina」の展開も本格化してまいります。

「Rock Your Story, We're the Plate.」の理念のもと、皆様の大切な時間と物語を受け止めるお皿として、さらなる価値提供に努めてまいります。

今後とも変わらぬご愛顧のほど、よろしくお願い申し上げます。

株式会社オサラロック  
代表取締役
    `,
    image: '/images/news/company-incorporation.jpg',
    isPublished: true,
    tags: ['会社設立', '法人化', 'お知らせ'],
  },
];

export const getPublishedNews = () => 
  newsItems.filter(item => item.isPublished)
    .sort((a, b) => new Date(b.publishDate).getTime() - new Date(a.publishDate).getTime());

export const getNewsByCategory = (category: NewsItem['category']) => 
  newsItems.filter(item => item.category === category && item.isPublished)
    .sort((a, b) => new Date(b.publishDate).getTime() - new Date(a.publishDate).getTime());

export const getNewsBySlug = (slug: string) => 
  newsItems.find(item => item.slug === slug && item.isPublished);

export const getRecentNews = (limit: number = 3) => 
  getPublishedNews().slice(0, limit);

export const getNewsById = (id: string) => 
  newsItems.find(item => item.id === id);