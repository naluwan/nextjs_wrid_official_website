import Image from 'next/image';
import fbIcon from '@/public/fb-black.png';
import igIcon from '@/public/ig-black.png';
import lineIcon from '@/public/line-black.png';
import footerIcon from '@/public/logo.png';
import { cn } from '@/lib/utils';

const Footer = () => {
  const socialMediaData = [
    {
      title: 'facebook',
      src: 'https://www.facebook.com/profile.php?id=100091738475786',
      icon: fbIcon,
    },
    {
      title: 'instagram',
      src: 'https://www.instagram.com/wurealm_design/',
      icon: igIcon,
    },
    {
      title: 'line',
      src: 'https://line.me/R/ti/p/@038hsoeq',
      icon: lineIcon,
    },
  ];
  return (
    <footer className='3xl:px-0 mx-auto mt-8 h-auto max-w-[1440px] px-6 py-4 text-[#333] lg:px-20'>
      <div className='flex h-auto justify-evenly py-5 max-md:flex-col max-md:items-center'>
        <div className='flex w-full flex-col items-start justify-between'>
          <Image
            src={footerIcon}
            alt='footer logo'
            width={180}
            height={60}
            className='h-[92px] w-[200px]'
            priority
          />
        </div>

        <div className='hidden h-full w-full flex-col items-start justify-start py-4 text-base max-md:text-xs md:block md:py-0'>
          {/* <p>聯絡我們</p>
          <p className='pt-2'>整新、裝潢、設計等任何問題</p>
          <p className='pt-2'>可透過Line或E-mail詢問，我們將盡快回覆</p> */}
        </div>

        <div className='mt-2 flex h-full w-full flex-col items-start justify-start text-base max-md:text-xs md:mt-0'>
          {/* <p>聯絡電話：0900-427-410</p>
          <p className='pt-2'>官方Line：@038hsoeq</p>
          <p className='pt-2'>E-mail：wurealm.design@gmail.com</p> */}
          <div className='flex items-center justify-center gap-x-2 py-4 md:mt-2 md:justify-start md:py-1'>
            {socialMediaData.map((item) => (
              <div className='group' key={item.title}>
                <a href={item.src} target='_black'>
                  <Image
                    src={item.icon}
                    alt='fbBtn'
                    className={cn(
                      'h-9 w-9 transition-all duration-300 group-hover:scale-110',
                      item.title === 'line' && 'h-10 w-10',
                      item.title === 'facebook' && 'mr-4 h-7 w-7',
                      item.title === 'instagram' && 'mr-2',
                    )}
                    priority
                  />
                </a>
              </div>
            ))}
          </div>

          <p className='text-base max-md:text-xs'>營業時間：Mon. - Sat. 0800-1800</p>
        </div>
      </div>

      <div className='flex flex-col items-center justify-center pt-20 text-sm max-md:text-[10px] md:pt-0'>
        <p className='m-0'> &copy; 2023 吾境設計有限公司 版權所有</p>
        <p className='m-0'>
          Copyright 2023 © Wurealm Design Co. Ltd. All rights reserved.
        </p>
        <p className='m-0'>Powered by 仨恩網頁設計工作室</p>
      </div>
    </footer>
  );
};

export default Footer;
