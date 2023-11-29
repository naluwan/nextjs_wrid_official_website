import { useSwiper } from 'swiper/react';
import { ChevronLeftCircle } from 'lucide-react';
import { cn } from '@/lib/utils';

interface SlidePrevProps {
  disabled: boolean;
}

const SlidePrev = ({ disabled }: SlidePrevProps) => {
  const swiper = useSwiper();
  return (
    <button
      className='absolute left-0 top-[45%] z-20 bg-transparent p-0 px-2'
      onClick={() => swiper.slidePrev()}
      disabled={!disabled}
    >
      <ChevronLeftCircle
        className={cn('h-10 w-10', !disabled ? 'text-slate-400/50' : 'text-black')}
      />
    </button>
  );
};

export default SlidePrev;
