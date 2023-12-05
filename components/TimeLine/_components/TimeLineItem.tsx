'use client';
import { IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import AOS from 'aos';
import React from 'react';

interface TimeLineItemProps {
  data: {
    title: string;
    icon: IconDefinition;
    content: string;
  };
  direction: string;
  delay: number;
}

const TimeLineItem = ({ data, direction, delay }: TimeLineItemProps) => {
  React.useEffect(() => {
    AOS.init(); // 初始化 AOS 動畫庫
  }, []);

  const currentDirection =
    direction === 'left'
      ? 'left-0 before:h-0 before:absolute before:top-[22px] before:w-0 before:z-10 before:right-[30px] before:border-[10px] before:border-r-0 before:border-transparent before:border-l-white max-md:after:left-[21px]'
      : 'left-[50%] before:h-0 before:absolute before:top-[22px] before:w-0 before:z-10 before:left-[30px] after:-left-[10px] before:border-[10px] before:border-l-0 before:border-transparent before:border-r-white max-md:after:left-[21px] max-md:left-0';

  return (
    <div
      className={`relative w-[50%] bg-inherit px-[40px] py-[10px] after:absolute after:-right-[15px] after:top-[15px] after:z-10 after:h-[25px] after:w-[25px] after:rounded-[50%] after:border-[4px] after:border-gray-400 after:bg-white max-md:w-full max-md:pl-[70px] max-md:pr-[10px] max-md:before:left-[60px] max-md:before:border-[10px] max-md:before:border-l-0 max-md:before:border-transparent max-md:before:border-r-white ${currentDirection}`}
      data-aos='fade-up'
      data-aos-duration='1000'
      data-aos-delay={delay}
      data-aos-once
    >
      <article className='relative rounded-[6px] bg-white px-[30px] py-[20px] shadow-lg'>
        <div className='flex justify-center'>
          <FontAwesomeIcon
            icon={data.icon}
            width={50}
            height={50}
            className='h-auto w-auto'
          />
        </div>

        <h2>{data.title}</h2>
        <p>{data.content}</p>
      </article>
    </div>
  );
};

export default TimeLineItem;
