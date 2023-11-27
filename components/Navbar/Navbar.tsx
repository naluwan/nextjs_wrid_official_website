import Link from 'next/link';
import MobileSidebar from './_components/mobile-sidebar';
import SidebarRoutes from './_components/sidebar-routes';
import Logo from './_components/logo';

const Navbar = () => {
  return (
    <nav className='flex justify-between items-end relative bg-transparent p-4 mx-auto max-w-[1440px]'>
      <Link className='flex' href='/'>
        <Logo />
      </Link>
      <div className='hidden lg:flex'>
        <SidebarRoutes device='desktop' />
      </div>
      <MobileSidebar />
    </nav>
  );
};

export default Navbar;
