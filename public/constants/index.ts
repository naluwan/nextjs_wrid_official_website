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
import { StaticImageData } from 'next/image';

export const NAV_LINKS = [
  { href: '/', key: 'home', label: '首頁' },
  { href: '/portfolio', key: 'portfolio', label: '作品集' },
  { href: '/about', key: 'about', label: '關於我們' },
  { href: '/process', key: 'process', label: '設計流程' },
  { href: '/pricing', key: 'pricing', label: '收費標準' },
  { href: '/contact', key: 'contact', label: '聯繫我們' },
];

export type CollectionType = {
  id: string;
  label: string;
  category: string;
  images: { id: number; name: string; img: StaticImageData }[];
};

export const collectionsData = [
  {
    id: 'collection1',
    label: '天母-藝境',
    category: 'home',
    images: [
      { id: 1, name: '天母1', img: collection1.image1 },
      { id: 2, name: '天母2', img: collection1.image2 },
      { id: 3, name: '天母3', img: collection1.image3 },
    ],
  },
  {
    id: 'collection2',
    label: '敦化-隅',
    category: 'home',
    images: [
      { id: 4, name: '敦化1', img: collection2.image1 },
      { id: 5, name: '敦化2', img: collection2.image2 },
      { id: 6, name: '敦化3', img: collection2.image3 },
      { id: 7, name: '敦化4', img: collection2.image4 },
      { id: 8, name: '敦化5', img: collection2.image5 },
      { id: 9, name: '敦化6', img: collection2.image6 },
      { id: 10, name: '敦化7', img: collection2.image7 },
    ],
  },
  {
    id: 'collection3',
    label: '松山-璟',
    category: 'home',
    images: [
      { id: 11, name: '松山1', img: collection3.image1 },
      { id: 12, name: '松山2', img: collection3.image2 },
      { id: 13, name: '松山3', img: collection3.image3 },
      { id: 14, name: '松山4', img: collection3.image4 },
      { id: 15, name: '松山5', img: collection3.image5 },
      { id: 16, name: '松山6', img: collection3.image6 },
    ],
  },
  {
    id: 'collection4',
    label: '新竹-叁人',
    category: 'home',
    images: [
      { id: 17, name: '松山1', img: collection4.image1 },
      { id: 18, name: '松山2', img: collection4.image2 },
      { id: 19, name: '松山3', img: collection4.image3 },
      { id: 20, name: '松山4', img: collection4.image4 },
      { id: 21, name: '松山5', img: collection4.image5 },
      { id: 22, name: '松山6', img: collection4.image6 },
      { id: 23, name: '松山7', img: collection4.image7 },
      { id: 24, name: '松山8', img: collection4.image8 },
    ],
  },
  {
    id: 'collection5',
    label: '永和-桐',
    category: 'home',
    images: [
      { id: 25, name: '永和1', img: collection5.image1 },
      { id: 26, name: '永和2', img: collection5.image2 },
      { id: 27, name: '永和3', img: collection5.image3 },
      { id: 28, name: '永和4', img: collection5.image4 },
      { id: 29, name: '永和5', img: collection5.image5 },
    ],
  },
  {
    id: 'collection6',
    label: '大直-靜',
    category: 'home',
    images: [
      { id: 30, name: '大直1', img: collection6.image1 },
      { id: 31, name: '大直2', img: collection6.image2 },
      { id: 32, name: '大直3', img: collection6.image3 },
      { id: 33, name: '大直4', img: collection6.image4 },
      { id: 34, name: '大直5', img: collection6.image5 },
      { id: 35, name: '大直6', img: collection6.image6 },
      { id: 36, name: '大直7', img: collection6.image7 },
    ],
  },
  {
    id: 'collection7',
    label: '南港-山匯',
    category: 'home',
    images: [
      { id: 37, name: '南港1', img: collection7.image1 },
      { id: 38, name: '南港2', img: collection7.image2 },
      { id: 39, name: '南港3', img: collection7.image3 },
      { id: 40, name: '南港4', img: collection7.image4 },
      { id: 41, name: '南港5', img: collection7.image5 },
    ],
  },
  {
    id: 'collection8',
    label: '東湖-暖',
    category: 'home',
    images: [
      { id: 42, name: '東湖1', img: collection8.image1 },
      { id: 43, name: '東湖2', img: collection8.image2 },
      { id: 44, name: '東湖3', img: collection8.image3 },
      { id: 45, name: '東湖4', img: collection8.image4 },
      { id: 46, name: '東湖5', img: collection8.image5 },
    ],
  },
  {
    id: 'collection9',
    label: '新生南-家',
    category: 'home',
    images: [
      { id: 47, name: '新生南1', img: collection9.image1 },
      { id: 48, name: '新生南2', img: collection9.image2 },
      { id: 49, name: '新生南3', img: collection9.image3 },
      { id: 50, name: '新生南4', img: collection9.image4 },
      { id: 51, name: '新生南5', img: collection9.image5 },
    ],
  },
  {
    id: 'collection10',
    label: '龜山-仛',
    category: 'home',
    images: [
      { id: 52, name: '龜山1', img: collection10.image1 },
      { id: 53, name: '龜山2', img: collection10.image2 },
      { id: 54, name: '龜山3', img: collection10.image3 },
      { id: 55, name: '龜山4', img: collection10.image4 },
      { id: 56, name: '龜山5', img: collection10.image5 },
      { id: 57, name: '龜山6', img: collection10.image6 },
      { id: 58, name: '龜山7', img: collection10.image7 },
    ],
  },
  {
    id: 'collection11',
    label: '林口-境',
    category: 'home',
    images: [
      { id: 59, name: '林口1', img: collection11.image1 },
      { id: 60, name: '林口2', img: collection11.image2 },
      { id: 61, name: '林口3', img: collection11.image3 },
      { id: 62, name: '林口4', img: collection11.image4 },
    ],
  },
  {
    id: 'collection12',
    label: '竹北-招待所',
    category: 'company',
    images: [
      { id: 63, name: '竹北1', img: collection12.image1 },
      { id: 64, name: '竹北2', img: collection12.image2 },
      { id: 65, name: '竹北3', img: collection12.image3 },
      { id: 66, name: '竹北4', img: collection12.image4 },
      { id: 67, name: '竹北5', img: collection12.image5 },
      { id: 68, name: '竹北6', img: collection12.image6 },
    ],
  },
  // {
  //   id: 'collection91',
  //   label: '新生南-家1',
  //   category: 'home',
  //   images: [
  //     { id: 47, name: '新生南1', img: collection9.image1 },
  //     { id: 48, name: '新生南2', img: collection9.image2 },
  //     { id: 49, name: '新生南3', img: collection9.image3 },
  //     { id: 50, name: '新生南4', img: collection9.image4 },
  //     { id: 51, name: '新生南5', img: collection9.image5 },
  //   ],
  // },
  // {
  //   id: 'collection101',
  //   label: '龜山-仛1',
  //   category: 'home',
  //   images: [
  //     { id: 52, name: '龜山1', img: collection10.image1 },
  //     { id: 53, name: '龜山2', img: collection10.image2 },
  //     { id: 54, name: '龜山3', img: collection10.image3 },
  //     { id: 55, name: '龜山4', img: collection10.image4 },
  //     { id: 56, name: '龜山5', img: collection10.image5 },
  //     { id: 57, name: '龜山6', img: collection10.image6 },
  //     { id: 58, name: '龜山7', img: collection10.image7 },
  //   ],
  // },
  // {
  //   id: 'collection111',
  //   label: '林口-境1',
  //   category: 'home',
  //   images: [
  //     { id: 59, name: '林口1', img: collection11.image1 },
  //     { id: 60, name: '林口2', img: collection11.image2 },
  //     { id: 61, name: '林口3', img: collection11.image3 },
  //     { id: 62, name: '林口4', img: collection11.image4 },
  //   ],
  // },
  // {
  //   id: 'collection121',
  //   label: '竹北-招待所1',
  //   category: 'company',
  //   images: [
  //     { id: 63, name: '竹北1', img: collection12.image1 },
  //     { id: 64, name: '竹北2', img: collection12.image2 },
  //     { id: 65, name: '竹北3', img: collection12.image3 },
  //     { id: 66, name: '竹北4', img: collection12.image4 },
  //     { id: 67, name: '竹北5', img: collection12.image5 },
  //     { id: 68, name: '竹北6', img: collection12.image6 },
  //   ],
  // },
];
