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
    id: '003',
    title: 'パーティスペース「ピース大宮」をオープンしました',
    slug: 'peace-omiya-opening',
    publishDate: '2025-01-29',
    category: '新店舗',
    summary: '埼玉県大宮にパーティスペース「ピース大宮」が新規オープン。生誕祭や推し活イベントに最適な空間をご提供いたします。',
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
    title: 'Tiarina 北千住店を2025年8月にオープンしました',
    slug: 'tiarina-kitasenju-opening',
    publishDate: '2025-08-26',
    category: '新店舗',
    summary: '推し活・コスプレ特化の姫系セルフフォトスタジオ「Tiarina」の新店舗が北千住にオープン。豊富な衣装と美しい背景セットでの撮影をお楽しみいただけます。',
    content: `
# Tiarina 北千住店 グランドオープン

この度、株式会社オサラロックは2025年8月26日、推し活・コスプレに特化した姫系セルフフォトスタジオ「Tiarina（ティアリナ）」の北千住店をグランドオープンいたしました。

## 店舗概要

**所在地**: 東京都足立区千住（詳細住所は別途ご案内）  
**最寄駅**: JR・地下鉄 北千住駅より徒歩5分  
**営業時間**: 10:00〜22:00（最終受付21:00）  
**定休日**: 年中無休

## 設備・サービス

- **豊富な衣装レンタル**: 姫系、ゴシック、ナチュラル系など100着以上をご用意
- **多彩な背景セット**: 3つの異なるテーマの撮影セット
- **プロ仕様の照明設備**: 美しい仕上がりをサポートする照明システム
- **充実の小道具**: 撮影を彩る様々なアクセサリー・小道具類
- **セルフ撮影サポート**: 初心者の方でも安心の撮影ガイド

## オープン記念キャンペーン

8月末まで、初回利用の方には30分延長無料サービスを実施中です。この機会にぜひ、理想の世界観での撮影をお楽しみください。

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
    summary: '2024年11月、個人事業から法人へと発展。より充実したサービス提供と事業拡大を目指してまいります。',
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