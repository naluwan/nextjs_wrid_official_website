'use client';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faUser,
  faRuler,
  faImages,
  faFileContract,
  faDraftingCompass,
  faMoneyBill,
  faFileSignature,
  faHome,
  faCheckCircle,
} from '@fortawesome/free-solid-svg-icons';

import TimeLine from '@/components/TimeLine';

const ProcessPage: React.FC = () => {
  const steps = [
    {
      title: '1. 詢問需求',
      icon: faUser,
      content: '了解客戶成員、空間需求、裝修預算、起居環境及喜好風格',
    },
    { title: '2. 現埸丈量', icon: faRuler, content: '實地丈量、拍照做為設計規劃的依據' },
    {
      title: '3. 設計提案',
      icon: faImages,
      content: '提案内容包含：公區渲染圖、平面配置、動線配置、光影分析等',
    },
    {
      title: '4. 設計委任',
      icon: faFileContract,
      content: '簽訂設計合約,根據設計草案做必要之修正,收取階段性設計費用',
    },
    {
      title: '5. 圖面繪製',
      icon: faDraftingCompass,
      content: '繪製設計合約內容包含：3D圖面、平面系統圖、立面施工圖、細部大樣圖',
    },
    {
      title: '6. 工程報價',
      icon: faMoneyBill,
      content: '以設計圖面之内容為準則, 進行工程完整報價、材質打樣及進度排程討論',
    },
    {
      title: '7. 工程合約',
      icon: faFileSignature,
      content:
        '以設計圖面之内容附件合併至工程合約, 以合約進度收取階段性工程費用, 確保工程進度及品質及依照圖面施工',
    },
    {
      title: '8. 完工交屋',
      icon: faHome,
      content: '現場驗收交屋測試，並附上保固書，拍攝交屋結案',
    },
    {
      title: '9. 結案',
      icon: faCheckCircle,
      content: '整理結案文件，並提供後續服務支援',
    },
  ];

  return (
    <div className='container mx-auto p-8'>
      <h1 className='mb-4 text-3xl font-bold'>設計流程</h1>
      <TimeLine data={steps} />
    </div>
  );
};

export default ProcessPage;
