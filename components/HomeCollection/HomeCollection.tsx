import { CollectionType, collectionsData } from '@/public/constants';
import CollectionImage from './_components/collection-image';
import React from 'react';
// import Slides from '../Sildes';
// import dynamic from 'next/dynamic';
import Lightbox, { SlideImage } from 'yet-another-react-lightbox';
import Zoom from 'yet-another-react-lightbox/plugins/zoom';
import 'yet-another-react-lightbox/styles.css';
// import NextJsImage from '../NextJsImage';

// const DynamicModal = dynamic(() => import('@/components/Modal'), { ssr: false });

const HomeCollection = () => {
  // 精選案例設定
  const [collections, setCollections] = React.useState<CollectionType[] | null>(null);

  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const [selectedCollection, setSelectedCollection] = React.useState<SlideImage[] | null>(
    null,
  );

  const clickImage = (images: SlideImage[]) => {
    setIsModalOpen(true);
    setSelectedCollection(images);
  };

  React.useEffect(() => {
    setCollections(
      collectionsData
        .filter(
          (collection) =>
            collection.label === '敦化' ||
            collection.label === '大直' ||
            collection.label === '信義' ||
            collection.label === '新竹' ||
            collection.label === '桃園' ||
            collection.label === '天母',
        )
        .sort((a, b) => (a.order as number) - (b.order as number)),
    );
  }, []);

  return (
    <>
      <section className='mt-8'>
        {/* <h2
          className='mb-4 text-xl font-bold md:text-2xl'
          data-aos='fade-up'
          data-aos-delay='800'
          data-aos-once
        >
          精選案例
        </h2> */}
        {/* 這裡可以使用輪播圖或其他方式展示案例 */}
        <div
          className='mb-4 hidden gap-4 md:grid md:grid-cols-2 lg:grid-cols-3'
          data-aos='fade-up'
          data-aos-once
          data-aos-delay='600'
        >
          {collections?.slice(0, 3).map((item) => (
            <CollectionImage
              img={item.images[0].src}
              name={item.label}
              key={item.id}
              onClick={() => clickImage(item.images)}
            />
          ))}
        </div>

        <div
          className='hidden gap-4 md:grid md:grid-cols-2 lg:grid-cols-3'
          data-aos='fade-up'
          data-aos-once
          data-aos-delay='1000'
        >
          {collections?.slice(3, 7).map((item) => (
            <CollectionImage
              img={item.images[0].src}
              name={item.label}
              key={item.id}
              onClick={() => clickImage(item.images)}
            />
          ))}
        </div>

        <div className='mb-4 grid grid-cols-1 gap-4 md:hidden'>
          {collections?.slice(0, 7).map((item) => (
            <div data-aos='fade-up' key={item.id}>
              <CollectionImage
                img={item.images[0].src}
                name={item.label}
                onClick={() => clickImage(item.images)}
              />
            </div>
          ))}
        </div>

        {/* <DynamicModal
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
      </DynamicModal> */}
      </section>
      <Lightbox
        open={isModalOpen}
        close={() => setIsModalOpen(false)}
        slides={selectedCollection as SlideImage[]}
        // render={{ slide: NextJsImage }}
        plugins={[Zoom]}
      />
    </>
  );
};

export default HomeCollection;
