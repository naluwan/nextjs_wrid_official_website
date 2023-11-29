import { Menu } from 'lucide-react';

import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import Sidebar from './sidebar';
import React from 'react';

const MobileSidebar = () => {
  return (
    <Sheet>
      <SheetTrigger className='transition hover:opacity-75 lg:hidden'>
        <Menu className='h-8 w-8' />
      </SheetTrigger>
      <SheetContent side='right' className='bg-white p-0'>
        <Sidebar />
      </SheetContent>
    </Sheet>
  );
};

export default MobileSidebar;
