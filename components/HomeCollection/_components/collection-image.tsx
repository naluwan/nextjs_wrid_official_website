import { Link, Search } from 'lucide-react';
import Image, { StaticImageData } from 'next/image';

interface CollectionImageProps {
  img: StaticImageData;
  name: string;
}

const CollectionImage = ({ img, name }: CollectionImageProps) => {
  return (
    <div className='group relative overflow-hidden rounded-lg bg-white shadow-md'>
      <Image
        src={img}
        alt='collection img'
        width={300}
        height={200}
        className='h-auto w-full object-cover transition-all delay-500 duration-300 ease-in-out group-hover:scale-110'
        priority
      />
      <div className='absolute left-0 top-0 z-20 h-full w-full bg-black/40 opacity-0 delay-200 duration-1000 group-hover:opacity-100'>
        <div className='flex h-full w-full flex-col items-start justify-center px-4'>
          <span className='text-2xl tracking-widest text-white'>{name}</span>
          <div className='flex w-full items-center pt-2'>
            <button
              onClick={() => {}}
              className='relative h-4 w-4 rounded-full bg-orange-300 p-4 duration-500 hover:bg-orange-500/80 hover:dark:bg-orange-500/80'
            >
              <Search
                className='absolute left-2 top-2 h-4 w-4 text-white'
                strokeWidth={4}
              />
            </button>
            <button
              onClick={() => {}}
              className='relative ml-5 h-4 w-4 rounded-full bg-orange-300 p-4 duration-500 hover:bg-orange-500/80 hover:dark:bg-orange-500/80'
            >
              <Link
                className='absolute left-2 top-2 h-4 w-4 text-white'
                strokeWidth={4}
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CollectionImage;
