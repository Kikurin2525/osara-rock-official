export interface SpaceLocation {
  name: string;
  hours?: string;
  url: string;
}

export interface SpaceProfile {
  id: string;
  name: string;
  category: string;
  categoryJa: string;
  description: string;
  image: string;
  imageAspect: number;
  accent: string;
  /** ブランド公式サイト。設定されているブランドは店舗別リンクではなく公式サイトを案内する。 */
  officialSite?: string;
  locations: readonly SpaceLocation[];
}

// DAYS / Tiarina / とらのワークスペースはブランド公式サイトへ誘導する(2026-07-19ユーザー指示。各URLは実アクセスで確認済み)。
// パーティスペースはブランドサイトがないため、店舗別の予約ページを直接案内する。
// パーティスペースは運営を株式会社スペースモールに委託しており、掲載名は「811_HOME大宮」の
// ように管理番号付きだが、本サイトでは番号を除いた店舗名で表記する。
export const spaces: readonly SpaceProfile[] = [
  {
    id: 'days',
    name: 'DAYS',
    category: 'Dance studio',
    categoryJa: 'ダンススタジオ',
    description:
      '個人練習からレッスン、動画撮影まで。東京・埼玉・横浜で10スタジオを直営するレンタルダンススタジオです。24時間利用できる店舗もあります。',
    image: '/DAYS.jpeg',
    imageAspect: 16 / 9,
    accent: '#79a99b',
    officialSite: 'https://days-studio.com/',
    locations: [],
  },
  {
    id: 'tiarina',
    name: 'Tiarina',
    category: 'Photo studio',
    categoryJa: 'フォトスタジオ',
    description: '推し活、生誕祭、撮影に特化した世界観のあるセルフフォトスタジオ。',
    image: '/tiarina.jpg',
    imageAspect: 3 / 2,
    accent: '#c59aa5',
    officialSite: 'https://tiarina.jp/',
    locations: [],
  },
  {
    id: 'party',
    name: 'HOME / Fluffy ほか',
    category: 'Party space',
    categoryJa: 'パーティスペース',
    description: '集まる時間そのものを楽しめる、用途に合わせたパーティスペース。',
    image: '/fluffy.jpeg',
    imageAspect: 16 / 9,
    accent: '#bda56e',
    locations: [
      { name: 'HOME 大宮', url: 'https://www.spacemarket.com/spaces/rpairu3nv3es37cy' },
      { name: 'Fluffy 大宮', url: 'https://www.spacemarket.com/spaces/i3nhlepepbj58cac' },
      { name: 'GAME 大宮', url: 'https://www.spacemarket.com/spaces/dhjlpvodv-hzmkjp' },
      { name: 'Livre 大宮', url: 'https://www.spacemarket.com/spaces/9xcucl0qbi8yyj9p' },
      { name: 'Chillax 大宮', url: 'https://www.spacemarket.com/spaces/n0slg9drwvcywzou' },
    ],
  },
  {
    id: 'workspace',
    name: 'とらのワークスペース',
    category: 'Work space',
    categoryJa: 'ワークスペース',
    description: '仕事や勉強に集中できる、静かで機能的な個室空間。',
    image: '/torano.jpeg',
    imageAspect: 16 / 9,
    accent: '#7c95aa',
    officialSite: 'https://torano-space.com/',
    locations: [],
  },
];
