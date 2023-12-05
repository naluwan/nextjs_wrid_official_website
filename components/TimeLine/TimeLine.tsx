import TimeLineItem from './_components/TimeLineItem';
import { IconDefinition } from '@fortawesome/free-solid-svg-icons';

interface TimeLineProps {
  data: {
    title: string;
    icon: IconDefinition;
    content: string;
  }[];
}

const TimeLine = ({ data }: TimeLineProps) => {
  let direction = '';
  return (
    <>
      <div
        className='relative mx-auto max-w-7xl bg-transparent after:absolute after:bottom-0 after:left-[50%] after:top-0 after:z-0 after:w-[6px] after:bg-white max-md:after:left-[31px]'
        data-aos='fade-up'
        data-aos-duration='1000'
        data-aos-delay='500'
        data-aos-once
      >
        {data.map((item, idx) => {
          direction = direction === 'left' ? 'right' : 'left';
          const delay = 400 + idx * 200;
          return (
            <TimeLineItem
              data={item}
              direction={direction}
              key={item.title}
              delay={delay}
            />
          );
        })}
      </div>
    </>
  );
};

export default TimeLine;
