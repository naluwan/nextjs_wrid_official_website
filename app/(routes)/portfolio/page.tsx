'use client';
import Image from 'next/image';
import { useState } from 'react';
import { collectionsData, CollectionType } from '@/public/constants';
import Modal from '@/components/Modal';
import Slides from '@/components/Sildes/Slides';

const PortfolioPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedCollection, setSelectedCollection] = useState<CollectionType | null>(
    null,
  );
  const [isModalOpen, setIsModalOpen] = useState(false);

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
      <h1 className='mb-4 text-3xl font-bold'>作品集</h1>
      <div className='mb-8 flex flex-col md:flex-row'>
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
            }}
            className={`mr-4 rounded px-4 py-2 ${
              selectedCategory === category
                ? 'bg-blue-500 text-white'
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
          .sort((a, b) => a.images.length - b.images.length)
          .map((collection: CollectionType) => (
            <div key={collection.id}>
              <button
                onClick={() => {
                  setSelectedCollection(collection);
                  setIsModalOpen(true);
                }}
              >
                <div className='transform rounded-lg bg-white p-4 shadow-md transition-transform hover:scale-105'>
                  <h2 className='mb-2 text-xl font-bold'>{collection.label}</h2>
                  <div className='grid grid-cols-1 gap-4'>
                    {collection.images.map((image) => (
                      <div key={image.id}>
                        <Image
                          src={image.img}
                          alt={image.name}
                          width={400}
                          height={300}
                          className='rounded-md'
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </button>
            </div>
          ))}
      </div>

      <Modal
        open={isModalOpen}
        onClose={() => {
          setIsModalOpen(false);
          setSelectedCollection(null);
        }}
      >
        <Slides
          collection={selectedCollection as CollectionType}
          autoPlay={false}
          key={selectedCollection?.id}
        />
      </Modal>
    </div>
  );
};

export default PortfolioPage;
