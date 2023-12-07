import Footer from '@/components/Footer';
import './globals.css';
import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import { ToastProvider } from '@/components/providers/toaster-provider';
// import { Inter } from 'next/font/google';

// const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: {
    default: '吾境設計',
    template: '%s | 吾境設計',
  },
  description:
    '吾境室內設計，提供裝潢、設計、室內設計服務，服務內容大致分為以下，住宅設計、客變服務、新成屋、毛胚屋、實品屋、中古屋、辦公空間和商業空間',
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang='zh-tw'>
      <body className='hide-scrollbar h-auto'>
        <Navbar />
        <main className='mx-auto h-full min-h-[910px] max-w-[1440px]'>
          <ToastProvider />
          {children}
        </main>
        {/* <div className='w-full border-t border-dashed border-white' /> */}
        <Footer />
      </body>
    </html>
  );
};

export default RootLayout;
