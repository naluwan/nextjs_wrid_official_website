import { CollectionType, collectionsData } from '@/public/constants';
import CollectionImage from './_components/collection-image';
import React from 'react';

const HomeCollection = () => {
  const [collections, setCollections] = React.useState<CollectionType[] | []>([]);

  React.useEffect(() => {
    setCollections(collectionsData);
  }, []);

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
        {collections
          .filter(
            (item) =>
              item.id === 'collection1' ||
              item.id === 'collection2' ||
              item.id === 'collection3',
          )
          .map((item) => (
            <CollectionImage img={item.images[0].img} name={item.label} key={item.id} />
          ))}
      </div>

      <div
        className='grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3'
        data-aos='fade-up'
        data-aos-delay='1000'
        data-aos-once
      >
        {collections
          .filter(
            (item) =>
              item.id === 'collection4' ||
              item.id === 'collection5' ||
              item.id === 'collection6',
          )
          .map((item) => (
            <CollectionImage img={item.images[0].img} name={item.label} key={item.id} />
          ))}
      </div>
    </section>
  );
};

export default HomeCollection;
