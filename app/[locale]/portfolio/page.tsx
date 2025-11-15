import {useTranslations} from 'next-intl';
import Image from 'next/image'; // Import Image component for optimized images
import Link from 'next/link'; // Import Link component for client-side navigation

export default function Portfolio() {
  const t = useTranslations('Navigation'); // Using 'Navigation' namespace for translations

  // Placeholder data for portfolio items
  const portfolioItems = [
    {
      id: 1,
      title: 'Project Alpha',
      description: 'A brief description of Project Alpha, highlighting its key features and technologies used.',
      image: '/public/placeholder-image.jpg', // Placeholder image path, you'll replace this
      link: 'https://example.com/project-alpha', // Example project link
    },
    {
      id: 2,
      title: 'Project Beta',
      description: 'An overview of Project Beta, showcasing its design and functionality.',
      image: '/public/placeholder-image.jpg',
      link: 'https://example.com/project-beta',
    },
    {
      id: 3,
      title: 'Project Gamma',
      description: 'Details about Project Gamma, including its challenges and solutions.',
      image: '/public/placeholder-image.jpg',
      link: 'https://example.com/project-gamma',
    },
    {
      id: 4,
      title: 'Project Delta',
      description: 'A summary of Project Delta, emphasizing user experience and innovation.',
      image: '/public/placeholder-image.jpg',
      link: 'https://example.com/project-delta',
    },
  ];

  return (
    <div className="container mx-auto py-20 px-4 sm:px-6 lg:px-8">
      <h1 className="text-4xl font-bold text-center mb-12">{t('portfolio')}</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {portfolioItems.map((item) => (
          <div key={item.id} className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105">
            {/* Using Next.js Image component for performance optimization */}
            <div className="relative w-full h-48 bg-gray-200">
              <Image
                src={item.image}
                alt={item.title}
                layout="fill"
                objectFit="cover"
                // Consider adding a proper `alt` for accessibility, using item.title
                // For local development, you might need to add `unoptimized={true}` if you don't configure image domains
              />
            </div>
            <div className="p-6">
              <h2 className="text-2xl font-semibold mb-2">{item.title}</h2>
              <p className="text-gray-700 mb-4">{item.description}</p>
              <Link href={item.link} passHref legacyBehavior>
                <a
                  target="_blank" // Open in a new tab
                  rel="noopener noreferrer" // Security best practice
                  className="inline-block bg-blue-600 text-white px-5 py-2 rounded-md hover:bg-blue-700 transition-colors duration-200"
                >
                  {t('viewProject')} {/* Translate "View Project" button text */}
                </a>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}