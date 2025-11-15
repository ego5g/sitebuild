'use client';

import { useEffect } from 'react';
import Link from 'next/link';

interface PortfolioItem {
  id: number;
  title: string;
  description: string;
  image: string; // Still useful for the main portfolio grid
  link: string;
}

interface PortfolioModalProps {
  item: PortfolioItem;
  viewProjectText: string;
  onClose: () => void;
}

export default function PortfolioModal({ item, viewProjectText, onClose }: PortfolioModalProps) {
  useEffect(() => {
    // Disable scrolling on the body when the modal is open
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
    // Close modal if clicked outside the content area
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75 overflow-y-auto"
      onClick={handleOverlayClick}
    >
      {/* Close Button - positioned relative to the outer overlay */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 text-white text-3xl font-bold cursor-pointer z-50"
        aria-label="Close modal"
      >
        &times;
      </button>

      {/* Main Modal Content Area */}
      <div className="relative bg-white shadow-lg flex flex-col overflow-hidden w-full h-full sm:max-w-full lg:max-w-screen-xl mx-auto md:rounded-lg p-0">
        {/* Modal Header and Title */}
        <div className="flex-shrink-0 bg-gray-900 px-4 py-2 sm:px-6 sm:py-4">
          <h2 className="text-2xl sm:text-3xl font-bold text-white text-center mb-2">
            {item.title}
          </h2>
        </div>

        {/* Iframe and Button Container */}
        <div className="flex flex-col flex-grow w-full overflow-hidden">
          {/* Iframe Wrapper - no horizontal padding on mobile, sm:px-4 for larger screens */}
          <div className="flex-grow relative w-full h-full bg-gray-800 overflow-hidden px-0 sm:px-4">
            <iframe
              src={item.link}
              title={item.title}
              className="w-full h-full border-none"
              sandbox="allow-forms allow-scripts allow-popups allow-same-origin"
              allowFullScreen
            ></iframe>
          </div>

          {/* Button section - compact and visually separated */}
          <div className="flex-shrink-0 flex justify-center py-2 bg-gray-900 border-t border-gray-700 sm:py-4 px-4">
            {/* Button to open site in new tab */}
            <Link href={item.link} passHref legacyBehavior>
              <a
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-lime-500 text-gray-900 font-semibold px-8 py-3 rounded-md hover:bg-lime-400 transition-colors duration-200 text-lg w-full sm:w-auto text-center"
              >
                {viewProjectText}
              </a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}