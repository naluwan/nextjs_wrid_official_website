'use client';
import React from 'react';
import Image from 'next/image';
import AOS from 'aos';
import ceoImage from '@/public/CEO.png';
import { ceoExp } from '@/public/constants';

const AboutUsPage: React.FC = () => {
  React.useEffect(() => {
    AOS.init(); // 初始化 AOS 動畫庫
  }, []);

  return (
    <div className='mx-auto p-8 sm:p-16'>
      <div
        className='text-center'
        data-aos='fade-up'
        data-aos-duration='1000'
        data-aos-once
      >
        {/* 文字介紹 */}
        <h1 className='mb-4 text-xl font-bold md:text-2xl'>
          住宅設計 ｜客變規劃 ｜ 商業空間
        </h1>
        <div>
          <p>台北 · 台中 · 高雄</p>
          <p>Mon. - Sat. 0800-1800</p>
        </div>
      </div>
      <div
        className='my-8 flex flex-col justify-around md:flex-row'
        data-aos='fade-up'
        data-aos-duration='1000'
        data-aos-delay='400'
        data-aos-once
      >
        <div className='flex flex-col items-center text-[#fdfdfd] max-md:mb-8'>
          <div className='aspect-square max-h-[500px] max-w-[500px] overflow-hidden rounded-md p-6 md:p-0'>
            {/* 照片 */}
            <Image
              src={ceoImage}
              alt='Designer'
              width={200}
              height={300}
              priority
              className='h-auto w-auto'
            />
          </div>
          <p className='mt-2'>吾境設計總監 - 陳映志</p>
        </div>

        <div>
          {/* 時間軸 */}
          <h1 className='text-center text-xl'>設計旅程</h1>
          <ul className='relative mx-auto max-w-[1200px] list-none p-[20px]'>
            {ceoExp.map((item, idx) => {
              const delay = 600 + idx * 200;
              return (
                <li
                  key={item.title}
                  className='relative mb-[50px] flex w-full justify-start'
                  data-aos='fade-up'
                  data-aos-duration='1000'
                  data-aos-delay={delay}
                  data-aos-once
                >
                  <div className='flex-1 rounded-[8px] bg-[#fff] p-[20px]'>
                    <p className='text-sm md:text-base'>
                      {item.title}, {item.cardTitle}
                    </p>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>

      <div
        className='flex h-full w-full flex-col items-center justify-start pt-0 text-center text-[#333]'
        data-aos='fade-up'
        data-aos-duration='1000'
        data-aos-delay='600'
        data-aos-once
      >
        <p className='text-lg tracking-widest'>吾慢生活．境舒享悠</p>
        <p className='text-lg tracking-widest'>尊享客製．細緻品味</p>
      </div>
    </div>
  );
};

export default AboutUsPage;
