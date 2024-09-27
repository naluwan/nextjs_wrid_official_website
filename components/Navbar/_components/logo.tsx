import Image from 'next/image';
import logo from '@/public/newLogo-1.png';

const Logo = () => {
  return (
    <Image
      src={logo}
      alt='logo'
      width={180}
      height={60}
      className='h-[42px] w-[55px] max-md:h-[37px] max-md:w-[47px]'
      priority
    />
  );
};

export default Logo;
