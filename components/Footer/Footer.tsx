import Image from 'next/image';
import fbIcon from '@/public/fbIconWhite.png';
import igIcon from '@/public/igIconWhite.png';
import lineIcon from '@/public/lineIconWhite.png';
import footerIcon from '@/public/newLogoWhite.png';
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
      src: 'https://line.me/ti/p/QRKALR7F0n',
      icon: lineIcon,
    },
  ];
  return (
    <footer className='3xl:px-0 mx-auto mt-8 h-auto max-w-[1440px] px-6 py-4 text-white lg:px-20'>
      <div className='flex justify-evenly max-md:flex-col max-md:items-center'>
        <Image
          src={footerIcon}
          alt='footer logo'
          width={180}
          height={60}
          className='hidden h-[200px] w-[192px] md:block'
          priority
        />
        <div className='flex flex-col items-center justify-center p-4'>
          <div className='relative mb-2 flex w-full justify-center'>
            <Image
              src={footerIcon}
              alt='footer logo'
              width={180}
              height={60}
              className='absolute left-0 block h-[25px] w-[30px] md:hidden'
              priority
            />
            <h1 className='text-xl font-bold tracking-wide max-md:text-xl'>聯絡我們</h1>
          </div>
          <div className='text-base max-md:text-xs'>
            <p>整新、裝潢、設計等任何問題</p>
            <p>可透過Line或E-mail，我們將盡快回覆</p>
            <p>聯絡電話：0900-427-410</p>
            <p>官方Line：evannn219</p>
            <p>E-mail：wurealm.design@gmail.com</p>
            <div className='mt-2 flex items-center justify-center gap-x-2 md:justify-start'>
              {socialMediaData.map((item) => (
                <div className='group' key={item.title}>
                  <a href={item.src} target='_black'>
                    <Image
                      src={item.icon}
                      alt='fbBtn'
                      className={cn(
                        'h-8 w-8 transition-all duration-300 group-hover:scale-110',
                        item.title === 'line' && 'h-8 w-8',
                        (item.title === 'facebook' || item.title === 'instagram') &&
                          'mr-2',
                      )}
                      priority
                    />
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className='flex flex-col items-center justify-center pt-4 text-sm max-md:text-[10px]'>
        <p className='m-0'> &copy; 2023 吾境設計有限公司 版權所有</p>
        <p className='m-0'>
          Copyright 2023 © Wurealm Design Co. Ltd. All rights reserved.
        </p>
        <p className='m-0'>Powered by NaLuWan</p>
      </div>
    </footer>
  );
};

export default Footer;
