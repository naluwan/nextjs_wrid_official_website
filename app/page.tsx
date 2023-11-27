'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import AOS from 'aos';
import 'aos/dist/aos.css';

import logo from '@/public/logo.png';

const Home = () => {
  useEffect(() => {
    // 初始化 AOS 套件
    AOS.init();
  }, []); // 第二個參數是空數組，表示只在組件掛載時執行一次

  return (
    <div className='bg-mi-bai h-full'>
      <header className='flex items-end justify-between p-4'>
        {/* 公司Logo */}
        <div className='flex items-center'>
          <Image src={logo} alt='logo' width={75} height={75} />
        </div>

        {/* 導航菜單 */}
        <nav className='mt-4'>
          <ul className='flex space-x-4'>
            <li>
              <Link href='/portfolio'>作品集</Link>
            </li>
            <li>
              <Link href='/about'>關於我們</Link>
            </li>
            <li>
              <Link href='/contact'>聯繫我們</Link>
            </li>
          </ul>
        </nav>
      </header>

      <main className='p-8'>
        {/* 引導語 */}
        <section className='text-center'>
          <div className='flex flex-col items-center justify-center md:flex-row'>
            <h2 className='mb-4 text-3xl font-bold' data-aos='fade-up'>
              家乃身心歸依沉澱之處
            </h2>
            <h2 className='mb-4 hidden text-3xl font-bold md:block' data-aos='fade-up'>
              ，
            </h2>
            <h2 className='mb-4 text-3xl font-bold' data-aos='fade-up'>
              亦為喧囂中的一方淨土
            </h2>
          </div>

          <p className='text-lg' data-aos='fade-up' data-aos-delay='200'>
            故以居者為核心發想
            <br />
            實亦輔虛，虛亦成境
          </p>
          <p className='text-lg' data-aos='fade-up' data-aos-delay='400'>
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
        <section className='mt-8'>
          <h2 className='mb-4 text-2xl font-bold' data-aos='fade-up' data-aos-delay='600'>
            精選案例
          </h2>
          {/* 這裡可以使用輪播圖或其他方式展示案例 */}
          <div
            className='grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3'
            data-aos='fade-up'
            data-aos-delay='600'
          >
            <div className='rounded-lg bg-white p-4 shadow-md'>
              <Image src='/portfolio/1.jpg' alt='案例一' width={300} height={200} />
              <p className='mt-2'>現代簡約風格</p>
            </div>
            {/* 其他案例卡片 */}
            <div className='rounded-lg bg-white p-4 shadow-md'>
              <Image src='/portfolio/1.jpg' alt='案例一' width={300} height={200} />
              <p className='mt-2'>現代簡約風格</p>
            </div>

            <div className='rounded-lg bg-white p-4 shadow-md'>
              <Image src='/portfolio/1.jpg' alt='案例一' width={300} height={200} />
              <p className='mt-2'>現代簡約風格</p>
            </div>
          </div>

          <div
            className='mt-8 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3'
            data-aos='fade-up'
            data-aos-delay='800'
          >
            <div className='rounded-lg bg-white p-4 shadow-md'>
              <Image src='/portfolio/1.jpg' alt='案例一' width={300} height={200} />
              <p className='mt-2'>現代簡約風格</p>
            </div>
            {/* 其他案例卡片 */}
            <div className='rounded-lg bg-white p-4 shadow-md'>
              <Image src='/portfolio/1.jpg' alt='案例一' width={300} height={200} />
              <p className='mt-2'>現代簡約風格</p>
            </div>

            <div className='rounded-lg bg-white p-4 shadow-md'>
              <Image src='/portfolio/1.jpg' alt='案例一' width={300} height={200} />
              <p className='mt-2'>現代簡約風格</p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Home;
