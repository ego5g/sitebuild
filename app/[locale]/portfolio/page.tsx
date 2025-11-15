'use client'; // This component needs to be a client component to use useState

import {useState} from 'react'; // Import useState for managing component state
import {useTranslations} from 'next-intl';
import Image from 'next/image'; // Import Image component for optimized images
import PortfolioModal from '@/components/PortfolioModal'; // Import the new PortfolioModal component

// Define the type for a portfolio item for better type safety
interface PortfolioItem {
  id: number;
  title: string;
  description: string;
  image: string;
  link: string;
}

export default function Portfolio() {
  const t = useTranslations('Navigation'); // Using 'Navigation' namespace for translations

  // State to manage the currently selected portfolio item for the modal
  const [selectedItem, setSelectedItem] = useState<PortfolioItem | null>(null);
  // State to control the visibility of the modal
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Automatically generate preview images for real links
  const portfolioItems: PortfolioItem[] = [
    {
      id: 1,
      title: 'Лендинг пейдж',
      description: 'Пример одностраничного сайта (лендинга).',
      link: 'https://testik-git-mobile-kam-projects.vercel.app/',
      image: 'https://image.thum.io/get/width/1200/crop/900/trim/10/https://testik-git-mobile-kam-projects.vercel.app/',
    },
    {
      id: 2,
      title: 'Helpmame',
      description: 'Сайт услуг для мам с новорожденными.',
      link: 'http://helpmame.ru/',
      image: 'https://image.thum.io/get/width/1200/crop/900/trim/10/http://helpmame.ru/',
    },
    {
      id: 3,
      title: 'Sneakers Shop',
      description: 'Магазин оригинальных кроссовок из USA.',
      link: 'https://sneakers-5c581.firebaseapp.com/',
      image: 'https://image.thum.io/get/width/1200/crop/900/trim/10/https://sneakers-5c581.firebaseapp.com/',
    },
    {
      id: 4,
      title: 'Bazariara',
      description: 'Маркетплейс с доставкой и упрощенным заказом.',
      link: 'https://market-git-main-kam-projects.vercel.app/',
      image: 'https://image.thum.io/get/width/1200/crop/900/trim/10/https://bazariara.ge/'
    },
    {
      id: 5,
      title: 'Проект Дельта',
      description: 'Краткое описание проекта.',
      image: '/placeholder-image.jpg',
      link: 'https://example.com/project-delta',
    },
     {
      id: 6,
      title: 'Проект Эпсилон',
      description: 'Краткое описание проекта.',
      image: '/placeholder-image.jpg',
      link: 'https://example.com/project-epsilon',
    },
     {
      id: 7,
      title: 'Проект Дзета',
      description: 'Краткое описание проекта.',
      image: '/placeholder-image.jpg',
      link: 'https://example.com/project-zeta',
    },
     {
      id: 8,
      title: 'Проект Эта',
      description: 'Краткое описание проекта.',
      image: '/placeholder-image.jpg',
      link: 'https://example.com/project-eta',
    },
  ];

  // Function to handle clicking on a portfolio item card
  const handleCardClick = (item: PortfolioItem) => {
    setSelectedItem(item);
    setIsModalOpen(true);
  };

  // Function to close the modal
  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedItem(null); // Clear selected item when modal closes
  };

  return (
    <div className="container mx-auto py-3 px-4 sm:px-6 lg:px-8">
      <h1 className="text-4xl font-bold text-center mb-4">{t('portfolio')}</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {portfolioItems.map((item) => (
          <div
            key={item.id}
            className="flex flex-col h-full bg-white rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105 cursor-pointer" // Refined main card styling
            onClick={() => handleCardClick(item)} // Attach click handler to the card
          >
            {/* Using Next.js Image component for performance optimization */}
            <div className="relative w-full h-72 bg-gray-200">
              <Image
                src={item.image}
                alt={item.title}
                layout="fill"
                objectFit="cover"
                unoptimized={true} // Required for external image services like thum.io
              />
            </div>
            <div className="flex flex-col justify-end flex-grow px-4 py-2 border-t-2 border-slate-700"> {/* Refined text content div styling with darker border */}
              <h2 className="text-lg font-semibold text-gray-900 mb-1">{item.title}</h2> {/* Consistent title styling */}
              <p className="text-gray-700 text-sm line-clamp-2">{item.description}</p> {/* Consistent description styling */}
              {/* Removed direct link button from here, as it's now in the modal */}
            </div>
          </div>
        ))}
      </div>

      {/* Render the PortfolioModal if it's open and an item is selected */}
      {isModalOpen && selectedItem && (
        <PortfolioModal
          item={selectedItem}
          viewProjectText={"Открыть проект"} // Pass the translated text for the button
          onClose={handleCloseModal}
        />
      )}
    </div>
  );
}
