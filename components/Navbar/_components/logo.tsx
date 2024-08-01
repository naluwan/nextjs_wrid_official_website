import Image from 'next/image';
import logo from '@/public/newLogo-1.png';

const Logo = () => {
  return (
    <Image
      src={logo}
      alt='logo'
      width={180}
      height={60}
      className='h-[52px] w-[60px] max-md:h-[50px] max-md:w-[65px]'
      priority
    />
  );
};

export default Logo;
