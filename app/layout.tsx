import Footer from '@/components/Footer';
import './globals.css';
import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
// import { Inter } from 'next/font/google';

// const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: '吾境設計',
  description:
    '吾境室內設計，提供裝潢、設計、室內設計服務，服務內容大致分為以下，客變服務、新成屋、毛胚屋、實品屋、中古屋、辦公空間和商業空間',
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang='zh-tw'>
      <body className='hide-scrollbar h-auto'>
        <Navbar />
        <main className='h-full mx-auto max-w-[1440px]'>{children}</main>
        <Footer />
      </body>
    </html>
  );
};

export default RootLayout;
