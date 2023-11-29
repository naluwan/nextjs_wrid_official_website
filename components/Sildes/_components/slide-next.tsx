import { useSwiper } from 'swiper/react';
import { ChevronRightCircle } from 'lucide-react';
import { cn } from '@/lib/utils';

interface SlideNextProps {
  disabled: boolean;
}

const SlideNext = ({ disabled }: SlideNextProps) => {
  const swiper = useSwiper();
  return (
    <button
      className='absolute right-0 top-[45%] z-20 bg-transparent p-0 px-2'
      onClick={() => swiper.slideNext()}
      disabled={!disabled}
    >
      <ChevronRightCircle
        className={cn('h-10 w-10', !disabled ? 'text-slate-400/50' : 'text-black')}
      />
    </button>
  );
};

export default SlideNext;
