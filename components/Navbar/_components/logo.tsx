import Image from 'next/image';
import logo from '@/public/logo.png';

const Logo = () => {
  return (
    <Image
      src={logo}
      alt='logo'
      width={180}
      height={60}
      className='aspect-auto h-[75px] w-[100px] max-md:h-[50px] max-md:w-[65px]'
      priority
    />
  );
};

export default Logo;
