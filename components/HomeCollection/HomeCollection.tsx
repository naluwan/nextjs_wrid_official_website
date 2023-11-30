import { CollectionType, collectionsData } from '@/public/constants';
import CollectionImage from './_components/collection-image';
import React from 'react';
import Slides from '../Sildes';
import dynamic from 'next/dynamic';

const DynamicModal = dynamic(() => import('@/components/Modal'), { ssr: false });

const HomeCollection = () => {
  const [collections] = React.useState<CollectionType[] | []>(
    collectionsData.slice(0, 7),
  );

  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const [selectedCollection, setSelectedCollection] =
    React.useState<CollectionType | null>(null);

  const clickImage = (collection: CollectionType) => {
    setIsModalOpen(true);
    setSelectedCollection(collection);
  };

  return (
    <section className='mt-8'>
      <h2
        className='mb-4 text-2xl font-bold'
        data-aos='fade-up'
        data-aos-delay='800'
        data-aos-once
      >
        精選案例
      </h2>
      {/* 這裡可以使用輪播圖或其他方式展示案例 */}
      <div
        className='mb-4 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3'
        data-aos='fade-up'
        data-aos-delay='600'
        data-aos-once
      >
        {collections.slice(0, 3).map((item) => (
          <CollectionImage
            img={item.images[0].img}
            name={item.label}
            key={item.id}
            onClick={() => clickImage(item)}
          />
        ))}
      </div>

      <div
        className='grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3'
        data-aos='fade-up'
        data-aos-delay='1000'
        data-aos-once
      >
        {collections.slice(4, 7).map((item) => (
          <CollectionImage
            img={item.images[0].img}
            name={item.label}
            key={item.id}
            onClick={() => clickImage(item)}
          />
        ))}
      </div>

      <DynamicModal
        open={isModalOpen}
        onClose={() => {
          setIsModalOpen(false);
        }}
      >
        <Slides
          collection={selectedCollection as CollectionType}
          autoPlay={false}
          key={selectedCollection?.id}
        />
      </DynamicModal>
    </section>
  );
};

export default HomeCollection;
