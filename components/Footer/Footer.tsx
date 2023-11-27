import Image from 'next/image';
import fbIcon from '@/public/fbIcon.png';
import igIcon from '@/public/igIcon.png';
import lineIcon from '@/public/lineIcon.png';
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
      src: 'https://line.me/ti/p/QRKALR7F0n',
      icon: lineIcon,
    },
  ];
  return (
    <footer className='mt-8 h-auto bg-[#fdfdfd] p-4 text-center'>
      <div className='flex justify-evenly max-md:flex-col max-md:items-center'>
        <Image
          src={footerIcon}
          alt='footer logo'
          width={180}
          height={60}
          className='h-[200px] w-[192px]'
          priority
        />
        <div className='flex flex-col items-center justify-center p-4'>
          <h1 className='text-4xl tracking-wide max-md:text-2xl'>聯絡我們</h1>
          <div className='max-md:text-xs'>
            <p>整新、裝潢、設計等任何問題</p>
            <p>可透過Line或E-mail，我們將盡快回覆</p>
            <p>聯絡電話：0900-427-410</p>
            <p>官方Line：evannn219</p>
            <p>E-mail：wurealm.design@gmail.com</p>
            <div className='flex items-center justify-center gap-x-2 md:justify-start'>
              {socialMediaData.map((item) => (
                <div className='group' key={item.title}>
                  <a href={item.src} target='_black'>
                    <Image
                      src={item.icon}
                      alt='fbBtn'
                      className={cn(
                        'h-8 w-8 transition-all duration-300 group-hover:scale-110',
                        item.title === 'line' && 'h-11 w-11',
                        item.title === 'facebook' && 'mr-2',
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
