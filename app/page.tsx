'use client';

import React from 'react';
import AOS from 'aos';
import HomeCollection from '@/components/HomeCollection';

const Home = () => {
  React.useEffect(() => {
    // 初始化 AOS 套件
    AOS.init();
  }, []); // 第二個參數是空數組，表示只在組件掛載時執行一次

  return (
    <main className='p-8'>
      {/* 引導語 */}
      <section className='text-center tracking-widest'>
        <div className='flex flex-col items-center justify-center text-xl  md:flex-row md:text-2xl'>
          <h2 className='mb-4  font-bold ' data-aos='fade-up' data-aos-once>
            家乃身心歸依沉澱之處
          </h2>
          <h2 className='mb-4 hidden font-bold md:block' data-aos='fade-up'>
            ，
          </h2>
          <h2 className='mb-4 font-bold' data-aos='fade-up'>
            亦為喧囂中的一方淨土
          </h2>
        </div>

        <p className='text-base md:text-lg' data-aos='fade-up' data-aos-delay='200'>
          故以居者為核心發想
          <br />
          實亦輔虛，虛亦成境
        </p>
        <p className='text-base md:text-lg' data-aos='fade-up' data-aos-delay='400'>
          設計核心不侷限於實體架構
          <br />
          而是空間、人、自然的連結性
          <br />
          回到大地本然的屬性
          <br />
          重新構建出生活的本體
        </p>
      </section>

      {/* 精選案例 */}
      <HomeCollection />
    </main>
  );
};

export default Home;
