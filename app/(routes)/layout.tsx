import React from 'react';

const ContentLayout = ({ children }: { children: React.ReactNode }) => {
  return <div className='h-auto w-full max-w-[1440px]'>{children}</div>;
};

export default ContentLayout;
