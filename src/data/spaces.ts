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
  textureImage: string;
  imageAspect: number;
  accent: string;
  locations: readonly SpaceLocation[];
}

// 各店舗の名称と予約URLは、2026-07-19に各予約ページ(instabase / spacemarket)の実掲載で照合済み。
// パーティスペースは運営を株式会社スペースモールに委託しており、掲載名は「811_HOME大宮」の
// ように管理番号付きだが、本サイトでは番号を除いた店舗名で表記する。
// 営業時間は運営側で確認できた店舗のみ記載する。未確認の店舗には記載しない。
export const spaces: readonly SpaceProfile[] = [
  {
    id: 'days',
    name: 'DAYS',
    category: 'Dance studio',
    categoryJa: 'ダンススタジオ',
    description:
      '個人練習からレッスン、動画撮影まで。東京・埼玉・横浜で10スタジオを直営するレンタルダンススタジオです。24時間利用できる店舗もあります。',
    image: '/DAYS.jpeg',
    textureImage: '/showroom/days.jpg',
    imageAspect: 16 / 9,
    accent: '#79a99b',
    locations: [
      { name: '千歳烏山', hours: '6:00-23:30', url: 'https://days-karasuyama.com/' },
      { name: '早稲田', hours: '24時間', url: 'https://www.instabase.jp/space/9929423880' },
      { name: '方南町', hours: '6:00-24:00', url: 'https://www.instabase.jp/space/296677270' },
      { name: '与野 2F', hours: '24時間', url: 'https://www.instabase.jp/space/8156762421' },
      { name: '与野 3F', hours: '24時間', url: 'https://www.instabase.jp/space/398679506' },
      { name: '横浜関内 1F', url: 'https://www.instabase.jp/space/6412748471' },
      { name: '横浜関内 2F', url: 'https://www.instabase.jp/space/4899918082' },
      { name: '横浜関内 3F', url: 'https://www.instabase.jp/space/8111693371' },
      { name: '横浜関内 4F', url: 'https://www.instabase.jp/space/5605669232' },
      { name: '横浜関内 5F', url: 'https://www.instabase.jp/space/6927531120' },
    ],
  },
  {
    id: 'tiarina',
    name: 'Tiarina',
    category: 'Photo studio',
    categoryJa: 'フォトスタジオ',
    description: '推し活、生誕祭、撮影に特化した世界観のあるセルフフォトスタジオ。',
    image: '/tiarina.jpg',
    textureImage: '/showroom/tiarina.jpg',
    imageAspect: 3 / 2,
    accent: '#c59aa5',
    locations: [
      { name: '北千住', url: 'https://spacemarket.com/p/r2gSey8YV82bEwI0' },
      { name: '秋葉原', url: 'https://spacemarket.com/p/CpvrkKIeItOunGpq' },
      { name: '新大久保', url: 'https://spacemarket.com/p/F2RCB8L2muLvAX4N' },
      { name: '町田', url: 'https://spacemarket.com/p/B5YoYU9nUdXMnc__' },
    ],
  },
  {
    id: 'party',
    name: 'HOME / Fluffy ほか',
    category: 'Party space',
    categoryJa: 'パーティスペース',
    description: '集まる時間そのものを楽しめる、用途に合わせたパーティスペース。',
    image: '/fluffy.jpeg',
    textureImage: '/showroom/fluffy.jpg',
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
    textureImage: '/showroom/torano.jpg',
    imageAspect: 16 / 9,
    accent: '#7c95aa',
    locations: [
      { name: '川口 301', url: 'https://www.instabase.jp/space/583230448' },
      { name: '川口 302', url: 'https://www.instabase.jp/space/8622076712' },
      { name: '川口 303', url: 'https://www.instabase.jp/space/9543145095' },
    ],
  },
];
