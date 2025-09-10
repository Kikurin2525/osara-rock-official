export interface CompanyInfo {
  name: string;
  nameEn: string;
  established: string;
  incorporation: string;
  mission: string;
  vision: string;
  values: string[];
  address: string;
  phone: string;
  email: string;
  socialMedia: {
    twitter?: string;
    instagram?: string;
    tiktok?: string;
  };
}

export const companyInfo: CompanyInfo = {
  name: '株式会社オサラロック',
  nameEn: 'Osara Rock Inc.',
  established: '2021年3月',
  incorporation: '2024年11月',
  mission: 'Rock Your Story, We\'re the Plate.',
  vision: '人の大切な時間・物語を"受け止めるお皿"として、付加価値・楽しさ・喜び・思い出を支える。10年後、日本一のダンススタジオチェーンを目指す。',
  values: [
    '体験価値へのこだわり',
    'お客様の物語を大切に',
    '清潔で安心できる空間提供',
    '継続的な成長と改善',
  ],
  address: '埼玉県さいたま市中央区下落合1088-3',
  phone: '070-1327-6907',
  email: 'support@osara-rock.com',
  socialMedia: {
    tiktok: 'https://tiktok.com/@osara_rock',
  },
};

export interface TimelineItem {
  date: string;
  title: string;
  description: string;
  category: 'milestone' | 'opening' | 'expansion';
}

export const companyTimeline: TimelineItem[] = [
  {
    date: '2021年3月',
    title: '創業',
    description: 'さいたま市にてレンタルスペース事業を開始（とらのスタジオ創業、大宮とらのスタジオ与野店オープン）',
    category: 'milestone',
  },
  {
    date: '2021年7月',
    title: '川口駅前とらのワークスペース オープン',
    description: '川口市栄町',
    category: 'opening',
  },
  {
    date: '2021年11月',
    title: '大宮とらのスタジオ 大宮店 オープン',
    description: 'さいたま市大宮区',
    category: 'opening',
  },
  {
    date: '2022年8月',
    title: 'パーティスペース「ポケット」オープン',
    description: 'さいたま市大宮区',
    category: 'opening',
  },
  {
    date: '2022年12月',
    title: 'パーティスペース「コットン」オープン',
    description: 'さいたま市大宮区',
    category: 'opening',
  },
  {
    date: '2023年1月',
    title: 'パーティスペース「ナチュラ」「レイズ」オープン',
    description: 'さいたま市大宮区',
    category: 'opening',
  },
  {
    date: '2023年6月',
    title: 'レンタルスタジオDAYS横浜関内店 オープン',
    description: '横浜市中区',
    category: 'opening',
  },
  {
    date: '2024年10月',
    title: 'レンタルスタジオDAYS千歳烏山店 オープン',
    description: '東京都世田谷区',
    category: 'opening',
  },
  {
    date: '2024年11月',
    title: '法人設立',
    description: '個人事業を法人化、株式会社オサラロック設立',
    category: 'milestone',
  },
  {
    date: '2025年2月',
    title: 'パーティスペース「ピース」オープン / レンタルスタジオDAYS早稲田店 オープン',
    description: 'さいたま市大宮区 / 東京都新宿区',
    category: 'opening',
  },
  {
    date: '2025年8月',
    title: 'Tiarina 北千住店 オープン',
    description: '姫系セルフフォトスタジオ「Tiarina」北千住店オープン（東京都足立区）',
    category: 'opening',
  },
];

export interface BusinessStats {
  totalRooms: string;
  monthlyUsers: string;
  operatingAreas: string;
  yearsInBusiness: string;
}

export const businessStats: BusinessStats = {
  totalRooms: '20室以上',
  monthlyUsers: '500組以上',
  operatingAreas: '3都県',
  yearsInBusiness: '5年以上',
};