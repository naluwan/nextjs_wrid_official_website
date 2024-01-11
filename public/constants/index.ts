import collection1 from '@/public/collections/collection1';
import collection2 from '@/public/collections/collection2';
import collection3 from '@/public/collections/collection3';
import collection4 from '@/public/collections/collection4';
import collection5 from '@/public/collections/collection5';
import collection6 from '@/public/collections/collection6';
import collection7 from '@/public/collections/collection7';
import collection8 from '@/public/collections/collection8';
import collection9 from '@/public/collections/collection9';
import collection10 from '@/public/collections/collection10';
import collection11 from '@/public/collections/collection11';
import collection12 from '@/public/collections/collection12';

export const NAV_LINKS = [
  { href: '/', key: 'home', label: '首頁' },
  { href: '/portfolio', key: 'portfolio', label: '作品集' },
  { href: '/about', key: 'about', label: '關於我們' },
  { href: '/process', key: 'process', label: '設計流程' },
  { href: '/pricing', key: 'pricing', label: '收費標準' },
  { href: '/contact', key: 'contact', label: '聯絡我們' },
];

export type CollectionType = {
  id: string;
  label: string;
  category: string;
  images: { id: number; name: string; src: string }[];
};

export const collectionsData = [
  {
    id: 'collection1',
    label: '天母-藝境',
    category: 'home',
    images: [
      { id: 1, name: '天母1', src: collection1.image1.src },
      { id: 2, name: '天母2', src: collection1.image2.src },
      { id: 3, name: '天母3', src: collection1.image3.src },
    ],
  },
  {
    id: 'collection2',
    label: '敦化-隅',
    category: 'home',
    images: [
      { id: 4, name: '敦化1', src: collection2.image1.src },
      { id: 5, name: '敦化2', src: collection2.image2.src },
      { id: 6, name: '敦化3', src: collection2.image3.src },
      { id: 7, name: '敦化4', src: collection2.image4.src },
      { id: 8, name: '敦化5', src: collection2.image5.src },
      { id: 9, name: '敦化6', src: collection2.image6.src },
      { id: 10, name: '敦化7', src: collection2.image7.src },
    ],
  },
  {
    id: 'collection3',
    label: '松山-璟',
    category: 'home',
    images: [
      { id: 11, name: '松山1', src: collection3.image1.src },
      { id: 12, name: '松山2', src: collection3.image2.src },
      { id: 13, name: '松山3', src: collection3.image3.src },
      { id: 14, name: '松山4', src: collection3.image4.src },
      { id: 15, name: '松山5', src: collection3.image5.src },
      { id: 16, name: '松山6', src: collection3.image6.src },
    ],
  },
  {
    id: 'collection4',
    label: '新竹-叁人',
    category: 'home',
    images: [
      { id: 17, name: '松山1', src: collection4.image1.src },
      { id: 18, name: '松山2', src: collection4.image2.src },
      { id: 19, name: '松山3', src: collection4.image3.src },
      { id: 20, name: '松山4', src: collection4.image4.src },
      { id: 21, name: '松山5', src: collection4.image5.src },
      { id: 22, name: '松山6', src: collection4.image6.src },
      { id: 23, name: '松山7', src: collection4.image7.src },
      { id: 24, name: '松山8', src: collection4.image8.src },
    ],
  },
  {
    id: 'collection5',
    label: '永和-桐',
    category: 'home',
    images: [
      { id: 25, name: '永和1', src: collection5.image1.src },
      { id: 26, name: '永和2', src: collection5.image2.src },
      { id: 27, name: '永和3', src: collection5.image3.src },
      { id: 28, name: '永和4', src: collection5.image4.src },
      { id: 29, name: '永和5', src: collection5.image5.src },
    ],
  },
  {
    id: 'collection6',
    label: '大直-靜',
    category: 'home',
    images: [
      { id: 30, name: '大直1', src: collection6.image1.src },
      { id: 31, name: '大直2', src: collection6.image2.src },
      { id: 32, name: '大直3', src: collection6.image3.src },
      { id: 33, name: '大直4', src: collection6.image4.src },
      { id: 34, name: '大直5', src: collection6.image5.src },
      { id: 35, name: '大直6', src: collection6.image6.src },
      { id: 36, name: '大直7', src: collection6.image7.src },
    ],
  },
  {
    id: 'collection7',
    label: '南港-山匯',
    category: 'home',
    images: [
      { id: 37, name: '南港1', src: collection7.image1.src },
      { id: 38, name: '南港2', src: collection7.image2.src },
      { id: 39, name: '南港3', src: collection7.image3.src },
      { id: 40, name: '南港4', src: collection7.image4.src },
      { id: 41, name: '南港5', src: collection7.image5.src },
    ],
  },
  {
    id: 'collection8',
    label: '東湖-暖',
    category: 'home',
    images: [
      { id: 42, name: '東湖1', src: collection8.image1.src },
      { id: 43, name: '東湖2', src: collection8.image2.src },
      { id: 44, name: '東湖3', src: collection8.image3.src },
      { id: 45, name: '東湖4', src: collection8.image4.src },
      { id: 46, name: '東湖5', src: collection8.image5.src },
    ],
  },
  {
    id: 'collection9',
    label: '新生南-家',
    category: 'home',
    images: [
      { id: 47, name: '新生南1', src: collection9.image1.src },
      { id: 48, name: '新生南2', src: collection9.image2.src },
      { id: 49, name: '新生南3', src: collection9.image3.src },
      { id: 50, name: '新生南4', src: collection9.image4.src },
      { id: 51, name: '新生南5', src: collection9.image5.src },
    ],
  },
  {
    id: 'collection10',
    label: '龜山-仛',
    category: 'home',
    images: [
      { id: 52, name: '龜山1', src: collection10.image1.src },
      { id: 53, name: '龜山2', src: collection10.image2.src },
      { id: 54, name: '龜山3', src: collection10.image3.src },
      { id: 55, name: '龜山4', src: collection10.image4.src },
      { id: 56, name: '龜山5', src: collection10.image5.src },
      { id: 57, name: '龜山6', src: collection10.image6.src },
      { id: 58, name: '龜山7', src: collection10.image7.src },
    ],
  },
  {
    id: 'collection11',
    label: '林口-境',
    category: 'home',
    images: [
      { id: 59, name: '林口1', src: collection11.image1.src },
      { id: 60, name: '林口2', src: collection11.image2.src },
      { id: 61, name: '林口3', src: collection11.image3.src },
      { id: 62, name: '林口4', src: collection11.image4.src },
    ],
  },
  {
    id: 'collection12',
    label: '竹北-招待所',
    category: 'company',
    images: [
      { id: 63, name: '竹北1', src: collection12.image1.src },
      { id: 64, name: '竹北2', src: collection12.image2.src },
      { id: 65, name: '竹北3', src: collection12.image3.src },
      { id: 66, name: '竹北4', src: collection12.image4.src },
      { id: 67, name: '竹北5', src: collection12.image5.src },
      { id: 68, name: '竹北6', src: collection12.image6.src },
    ],
  },
  // {
  //   id: 'collection91',
  //   label: '新生南-家1',
  //   category: 'home',
  //   images: [
  //     { id: 47, name: '新生南1', src: collection9.image1 },
  //     { id: 48, name: '新生南2', src: collection9.image2 },
  //     { id: 49, name: '新生南3', src: collection9.image3 },
  //     { id: 50, name: '新生南4', src: collection9.image4 },
  //     { id: 51, name: '新生南5', src: collection9.image5 },
  //   ],
  // },
  // {
  //   id: 'collection101',
  //   label: '龜山-仛1',
  //   category: 'home',
  //   images: [
  //     { id: 52, name: '龜山1', src: collection10.image1 },
  //     { id: 53, name: '龜山2', src: collection10.image2 },
  //     { id: 54, name: '龜山3', src: collection10.image3 },
  //     { id: 55, name: '龜山4', src: collection10.image4 },
  //     { id: 56, name: '龜山5', src: collection10.image5 },
  //     { id: 57, name: '龜山6', src: collection10.image6 },
  //     { id: 58, name: '龜山7', src: collection10.image7 },
  //   ],
  // },
  // {
  //   id: 'collection111',
  //   label: '林口-境1',
  //   category: 'home',
  //   images: [
  //     { id: 59, name: '林口1', src: collection11.image1 },
  //     { id: 60, name: '林口2', src: collection11.image2 },
  //     { id: 61, name: '林口3', src: collection11.image3 },
  //     { id: 62, name: '林口4', src: collection11.image4 },
  //   ],
  // },
  // {
  //   id: 'collection121',
  //   label: '竹北-招待所1',
  //   category: 'company',
  //   images: [
  //     { id: 63, name: '竹北1', src: collection12.image1 },
  //     { id: 64, name: '竹北2', src: collection12.image2 },
  //     { id: 65, name: '竹北3', src: collection12.image3 },
  //     { id: 66, name: '竹北4', src: collection12.image4 },
  //     { id: 67, name: '竹北5', src: collection12.image5 },
  //     { id: 68, name: '竹北6', src: collection12.image6 },
  //   ],
  // },
];

export const ceoExp = [
  { title: 2023, cardTitle: '任職 吾境設計 設計執行總監' },
  { title: 2022, cardTitle: '任職 新境創作設計 設計部主管' },
  { title: 2019, cardTitle: '任職 浩室設計 設計部主管' },
  { title: 2017, cardTitle: '任職 帷圓設計 設計師' },
  { title: 2015, cardTitle: '任職 萊得爾室內設計 設計師' },
];

export const costData = [
  { title: '客變服務', designCost: '3000元起/坪', workCost: '-' },
  { title: '新成屋', designCost: '5000元起/坪', workCost: '6萬元起/實際施工坪' },
  { title: '毛胚屋', designCost: '6000元起/坪', workCost: '8萬元起/實際施工坪' },
  { title: '實品屋', designCost: '6000元起/坪', workCost: '10萬元起/實際施工坪' },
  { title: '中古屋', designCost: '8000元起/坪', workCost: '12萬元起/實際施工坪' },
  { title: '辦公空間', designCost: '6000元起/坪', workCost: '10萬元起/實際施工坪' },
  { title: '商業空間', designCost: '6000元起/坪', workCost: '10萬元起/實際施工坪' },
];
