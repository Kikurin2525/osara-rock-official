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
    description: 'さいたま市にてレンタルスペース事業を開始',
    category: 'milestone',
  },
  {
    date: '2024年11月',
    title: '法人設立',
    description: '株式会社オサラロックとして法人化',
    category: 'milestone',
  },
  {
    date: '2025年8月',
    title: 'Tiarina 北千住店 オープン',
    description: '姫系セルフフォトスタジオ「Tiarina」の第1号店を北千住にオープン',
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