export interface SpaceProfile {
  id: string;
  name: string;
  category: string;
  categoryJa: string;
  description: string;
  image: string;
  imageAspect: number;
  accent: string;
}

export const spaces: readonly SpaceProfile[] = [
  {
    id: 'days',
    name: 'DAYS',
    category: 'Dance studio',
    categoryJa: 'ダンススタジオ',
    description: 'ダンス練習からレッスンまで、日常的に使いやすいスタジオ。',
    image: '/DAYS.jpeg',
    imageAspect: 16 / 9,
    accent: '#79a99b',
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
  },
  {
    id: 'party',
    name: 'Rays / cotton etc.',
    category: 'Party space',
    categoryJa: 'パーティスペース',
    description: '集まる時間そのものを楽しめる、用途に合わせたパーティスペース。',
    image: '/party.jpeg',
    imageAspect: 16 / 9,
    accent: '#bda56e',
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
  },
];
