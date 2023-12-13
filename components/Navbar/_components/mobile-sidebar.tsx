'use client';
import { Menu } from 'lucide-react';

import { Sheet, SheetClose, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { cn } from '@/lib/utils';
import { NAV_LINKS } from '@/public/constants';
import React from 'react';
import Image from 'next/image';
import sheetLogo from '@/public/logo.png';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

const MobileSidebar = () => {
  const routes = NAV_LINKS;
  const pathName = usePathname();

  return (
    <Sheet>
      <SheetTrigger className='transition hover:opacity-75 lg:hidden'>
        <Menu className='h-8 w-8' />
      </SheetTrigger>
      <SheetContent side='right' className='bg-white p-0'>
        <div className='flex h-full flex-col overflow-y-auto border-r bg-white shadow-sm'>
          <div className='p-6'>
            <Image
              src={sheetLogo}
              width={100}
              height={60}
              className='h-[60px] w-[90px]'
              alt='sheet-logo'
            />
          </div>
          <div className='flex h-full w-full flex-col'>
            <div className={cn('flex w-full flex-col items-start gap-y-2')}>
              {routes.map((route) => {
                const isActive =
                  (pathName === '/' && route.href === '/') ||
                  pathName === route.href ||
                  pathName?.startsWith(`${route.href}/`);

                const ItemContent = (
                  <>
                    <div
                      className={cn(
                        'mr-auto h-full border-2 border-slate-400 opacity-0 transition-all duration-500',
                        isActive && 'opacity-100',
                      )}
                    />
                    <div className='flex justify-start pl-2'>{route.label}</div>
                  </>
                );
                return (
                  <SheetClose asChild key={route.key}>
                    <Link
                      href={route.href}
                      type='button'
                      className={cn(
                        'flex h-full flex-row items-center text-lg font-[500] text-black outline-none transition-all duration-500 hover:text-slate-600',
                        isActive && 'text-slate-700 hover:text-slate-600',
                      )}
                    >
                      {ItemContent}
                    </Link>
                  </SheetClose>
                );
              })}
            </div>
          </div>
          <div className='flex flex-col items-center justify-center py-2 text-[10px]'>
            <p className='m-0'> &copy; 2023 吾境設計有限公司 版權所有</p>
            <p className='m-0'>
              Copyright 2023 © Wurealm Design Co. Ltd. All rights reserved.
            </p>
            <p className='m-0'>Powered by NaLuWan</p>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileSidebar;
