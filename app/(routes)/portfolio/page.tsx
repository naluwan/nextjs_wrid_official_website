'use client';
import Image from 'next/image';
import React from 'react';
import { collectionsData, CollectionType } from '@/public/constants';
// import Slides from '@/components/Sildes/Slides';
// import dynamic from 'next/dynamic';
import { ArrowUpToLine } from 'lucide-react';
import Lightbox, { SlideImage } from 'yet-another-react-lightbox';
import Zoom from 'yet-another-react-lightbox/plugins/zoom';
import 'yet-another-react-lightbox/styles.css';
// import NextJsImage from '@/components/NextJsImage';

// const DynamicModal = dynamic(() => import('@/components/Modal'), { ssr: false });

const PortfolioPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = React.useState('all');
  const [selectedCollection, setSelectedCollection] = React.useState<SlideImage[] | null>(
    null,
  );
  const [isModalOpen, setIsModalOpen] = React.useState(false);

  const filteredCollections =
    selectedCategory === 'all'
      ? collectionsData
      : collectionsData.filter((collection) => collection.category === selectedCategory);

  const categories = [
    'all',
    ...Array.from(new Set(collectionsData.map((collection) => collection.category))),
  ];

  return (
    <div className='container mx-auto p-8'>
      <h1 className='mb-4 text-lg font-bold'>作品集</h1>
      <div className='mb-8 flex  flex-col text-[12px] md:flex-row'>
        <p>吾 亦以居者為中心發想</p>
        <p className='hidden md:block'>，</p>
        <p>境 即是描摹故事的場域</p>
      </div>

      {/* 分类筛选导航栏 */}
      {/* 分类筛选导航栏 */}
      <div className='mb-4'>
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => {
              setSelectedCategory(category);
              setSelectedCollection(null);
            }}
            className={`mr-4 rounded p-2 text-sm md:px-4 md:text-sm ${
              selectedCategory === category
                ? 'bg-gray-400 text-white'
                : 'bg-gray-200 text-gray-700'
            }`}
          >
            {category === 'all' ? '全部' : category === 'home' ? '居住空間' : '商業空間'}
          </button>
        ))}
      </div>

      {/* 作品集展示 */}
      <div className='grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
        {filteredCollections
          .sort((a, b) => b.images.length - a.images.length)
          .map((collection: CollectionType) => (
            <div key={collection.id}>
              <button
                onClick={() => {
                  setSelectedCollection(collection.images);
                  setIsModalOpen(true);
                }}
              >
                <div className='transform rounded-lg bg-transparent p-4 transition-transform duration-500 hover:scale-105 hover:shadow-xl'>
                  <h2 className='text-md mb-2 font-bold md:text-lg'>
                    {collection.label}
                  </h2>
                  <div className='grid grid-cols-1 gap-4'>
                    {collection.images.map((image) => (
                      <div key={image.id}>
                        <Image
                          src={image.src}
                          alt={image.name}
                          width={400}
                          height={300}
                          placeholder='blur'
                          blurDataURL={image.src}
                          className='h-auto w-auto rounded-md'
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </button>
            </div>
          ))}
      </div>
      {/* <DynamicModal
        open={isModalOpen}
        onClose={() => {
          setIsModalOpen(false);
        }}
      >
        <h1 className='text-center text-3xl tracking-widest'>
          {selectedCollection?.label}
        </h1>
        <Slides
          collection={selectedCollection as CollectionType}
          autoPlay={false}
          key={selectedCollection?.id}
        />
      </DynamicModal> */}
      <Lightbox
        open={isModalOpen}
        close={() => setIsModalOpen(false)}
        slides={selectedCollection as SlideImage[]}
        plugins={[Zoom]}
      />

      <button
        className='sticky bottom-4 left-[100%] mt-4 flex h-6 w-6 items-center justify-center rounded-full bg-black p-4 dark:bg-white md:p-6'
        onClick={() =>
          window.scrollTo({
            top: 0,
            behavior: 'smooth',
          })
        }
      >
        <div>
          <ArrowUpToLine className='h-5 w-5 text-white dark:text-black md:h-8 md:w-8' />
        </div>
      </button>
    </div>
  );
};

export default PortfolioPage;
