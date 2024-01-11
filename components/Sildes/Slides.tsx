import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, A11y, EffectFade } from 'swiper/modules';
import Image from 'next/image';

import { cn } from '@/lib/utils';
import { CollectionType } from '@/public/constants';
import SlideNext from './_components/slide-next';
import SlidePrev from './_components/slide-prev';

type SlidesProps = {
  collection: CollectionType | null;
  autoPlay: boolean;
};

const Slides: React.FC<SlidesProps> = (props) => {
  const { collection, autoPlay } = props;

  const paginationType = !autoPlay ? 'fraction' : 'bullets';

  const [isNext, setIsNext] = React.useState(true);
  const [isPrev, setIsPrev] = React.useState(false);
  const [activeIndex, setActiveIndex] = React.useState(1);

  React.useEffect(() => {
    if (collection !== null) {
      setIsNext(activeIndex < collection?.images.length);
    }
    setIsPrev(activeIndex > 1);
  }, [activeIndex, collection]);

  return (
    <Swiper
      modules={[Navigation, Pagination, A11y, Autoplay, EffectFade]}
      slidesPerView={1}
      pagination={{ type: paginationType, clickable: autoPlay }}
      initialSlide={0}
      autoplay={autoPlay && { delay: 5000 }}
      effect={'fade'}
      onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex + 1)}
    >
      {collection &&
        collection.images.map((image) => (
          <SwiperSlide key={`${image.name}-slide`}>
            <Image
              src={image.src}
              alt={image.name}
              width={300}
              height={200}
              className={cn('h-full max-h-[570px] w-full object-contain')}
            />
          </SwiperSlide>
        ))}
      {!autoPlay && (
        <>
          <SlideNext disabled={isNext} />
          <SlidePrev disabled={isPrev} />
        </>
      )}
    </Swiper>
  );
};

export default Slides;
