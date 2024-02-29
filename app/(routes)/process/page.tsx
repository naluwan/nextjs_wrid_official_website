'use client';
import {
  faUser,
  faRuler,
  faImages,
  faFileContract,
  faDraftingCompass,
  faMoneyBill,
  faFileSignature,
  faHome,
} from '@fortawesome/free-solid-svg-icons';

import WorkFlowCard from './_components/WorkFlowCard';
import { CardContent } from '@/components/ui/card';

const ProcessPage: React.FC = () => {
  const steps = [
    {
      title: '詢問需求',
      icon: faUser,
      content: '了解客戶成員、空間需求、裝修預算、起居環境及喜好風格',
    },
    { title: '現埸丈量', icon: faRuler, content: '實地丈量、拍照做為設計規劃的依據' },
    {
      title: '設計提案',
      icon: faImages,
      content: '提案內容包含：公區渲染圖、平面配置、動線配置、光影分析等',
    },
    {
      title: '設計委任',
      icon: faFileContract,
      content: '簽訂設計合約,根據設計草案做必要之修正,收取階段性設計費用',
    },
    {
      title: '圖面繪製',
      icon: faDraftingCompass,
      content: '繪製設計合約內容包含：3D圖面、平面系統圖、立面施工圖、細部大樣圖',
    },
    {
      title: '工程報價',
      icon: faMoneyBill,
      content: '以設計圖面之內容為準則, 進行工程完整報價、材質打樣及進度排程討論',
    },
    {
      title: '工程合約',
      icon: faFileSignature,
      content:
        '以設計圖面之內容附件合併至工程合約, 以合約進度收取階段性工程費用, 確保工程進度及品質及依照圖面施工',
    },
    {
      title: '完工交屋',
      icon: faHome,
      content: '現場驗收交屋測試，並附上保固書，拍攝交屋結案',
    },
  ];

  return (
    <div className='container mx-auto h-full p-8'>
      <h1 className='mb-4 text-lg font-bold'>設計流程</h1>
      {/* <TimeLine data={steps} /> */}
      <div className='grid gap-4 lg:grid-cols-4'>
        {steps.map((step) => (
          <WorkFlowCard
            key={step.title}
            icon={step.icon}
            title={step.title}
            content={
              <CardContent className='text-center text-sm'>
                <p>{step.content}</p>
              </CardContent>
            }
          />
        ))}
      </div>
      <div className='item-center flex justify-center pt-6'>
        <div className='grid grid-cols-1 text-[#333] max-md:gap-y-4 md:grid-cols-2 md:gap-x-4'>
          <div className='text-sm'>
            <ul className='list-inside list-none md:list-disc'>
              <li>客變服務 - 3000元/坪</li>
              <li>新成屋、商業空間、辦公空間 - 5000元/坪</li>
              <li>中古屋、毛胚屋、實品屋 - 6000元/坪</li>
            </ul>
          </div>

          <div className='text-sm'>
            <ul className='list-inside list-none md:list-disc'>
              <li>委任設計/工程 最小承攬面積：20坪(實內設計坪)</li>
              <li>設計費用未滿20坪，以20坪計算(實內設計坪)</li>
              <li>最低工程承攬金額：6萬元起/實際施工坪</li>
              <li>工程承攬金額不含家具、窗飾、擺飾、家電(協助設計、選樣)</li>
              <li>工程監管費用為總工程款費用之5-10%(依設計或現況複雜度為準則)</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProcessPage;
