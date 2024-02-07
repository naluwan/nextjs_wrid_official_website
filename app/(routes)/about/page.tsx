'use client';
import React from 'react';
import AOS from 'aos';

const AboutUsPage: React.FC = () => {
  React.useEffect(() => {
    AOS.init(); // 初始化 AOS 動畫庫
  }, []);

  return (
    <div className='mx-auto p-8 sm:p-16'>
      <div className='flex flex-col items-start justify-between pb-8 md:flex-row md:p-28'>
        {/* 左邊標語 */}
        <div
          className='grid gap-y-4 pb-4 md:pb-0'
          data-aos='fade-right'
          data-aos-easing='ease-in-out'
        >
          <h1 className='text-2xl font-extrabold'>吾境 -</h1>
          <div className='w-1/3 border-b-4 border-gray-500' />
          <div className='text-2xl'>
            <p>
              <span className='font-bold'>吾</span> 慢生活
            </p>
            <p>
              <span className='font-bold'>境</span> 在眼前
            </p>
          </div>
          <div className='text-2xl'>
            <p>盡顯您的品味</p>
            <p>讓家的步調，慢下來</p>
          </div>
        </div>

        {/* 設計理念 */}
        <div
          className='grid w-full gap-y-4 md:w-1/2'
          data-aos='fade-left'
          data-aos-easing='ease-in-out'
        >
          <div className='flex'>
            <p>家乃身心沉澱之處</p>
            <p>&nbsp;&nbsp;&nbsp;&nbsp;</p>
            <p>喧囂中的一方淨土</p>
          </div>
          <div className='flex'>
            <p>以居者為核心發想</p>
            <p>&nbsp;&nbsp;&nbsp;&nbsp;</p>
            <p>實亦輔虛，虛亦成境</p>
          </div>
          <div>
            <p>不侷限於實體架構</p>
            <p>而以</p>
            <p>空間、人、自然的連結性</p>
          </div>
          <div>
            <p>回到大地本然的本質</p>
            <p>重新構建出生活的輪廓</p>
          </div>
        </div>
      </div>

      <div className='flex flex-col items-start justify-between md:flex-row md:p-28'>
        {/* 管理團隊 */}
        <div
          className='grid gap-y-2 pb-4 md:pb-0'
          data-aos='fade-right'
          data-aos-easing='ease-in-out'
        >
          <h1 className='text-xl'>管理團隊</h1>
          <div className='w-full border-b border-gray-500' />
          <p>執行長CEO Eason 陳奕嘉</p>
          <p>設計總監 Evan 陳映志</p>
          <p>行政財務長 Andy 王彙均</p>
        </div>

        {/* 公司介紹 */}
        <div
          className='grid w-full gap-y-2 md:w-1/2'
          data-aos='fade-left'
          data-aos-easing='ease-in-out'
        >
          <h1 className='text-xl'>公司介紹</h1>
          <div className='w-full border-b border-gray-500' />
          <div>
            <p>吾境設計在室內設計及工程裝修扎根十年經驗。</p>
            <p>經歷無數磨練，以專業及優秀的設計團隊為每位客戶一對一服務。</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUsPage;
