import { useParams, useNavigate } from "react-router-dom";
import React, { useState, useEffect } from 'react';
import { ArrowLeft, ChevronLeft, ChevronRight } from 'lucide-react';

const SquareCardsContent = () => {
  const { categoryName } = useParams();
  const navigate = useNavigate();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const onBack = () => navigate(-1);

  // Complete category data
  const categoryData = {
    "aarti-sangrah": {
      displayName: 'Aarti',
      hindiName: 'आरती',
      icon: '🪔',
      color: 'from-orange-400 to-red-500',
      headerImages: [
        {
          url: 'https://images.unsplash.com/photo-1582555172866-f73bb12a2ab3?w=1200&q=80',
          deity: 'Divine Aarti',
          mantra: 'ॐ ज्योति स्वरूपाय नमः'
        },
        {
          url: 'https://images.unsplash.com/photo-1604948501466-4e9c339b9c24?w=1200&q=80',
          deity: 'Sacred Flames',
          mantra: 'ॐ दीपज्योतिः परब्रह्म'
        }
      ],
      items: [
        { id: 1, title: 'Shiv Ji Ki Aarti', icon: '🔱', plays: '2.5M', color: 'from-gray-600 to-indigo-800' },
        { id: 2, title: 'Ganesh Aarti', icon: '🐘', plays: '3.2M', color: 'from-orange-400 to-red-500' },
        { id: 3, title: 'Hanuman Aarti', icon: '⚡', plays: '4.1M', color: 'from-yellow-400 to-orange-600' },
        { id: 4, title: 'Krishna Aarti', icon: '🪶', plays: '2.8M', color: 'from-blue-500 to-purple-600' },
        { id: 5, title: 'Lakshmi Aarti', icon: '🪷', plays: '1.9M', color: 'from-pink-400 to-red-500' },
        { id: 6, title: 'Durga Aarti', icon: '⚔️', plays: '2.3M', color: 'from-red-500 to-yellow-500' },
        { id: 7, title: 'Saraswati Aarti', icon: '🎵', plays: '1.5M', color: 'from-blue-200 to-blue-500' },
        { id: 8, title: 'Vishnu Aarti', icon: '🌀', plays: '1.7M', color: 'from-teal-400 to-blue-600' },
        { id: 9, title: 'Ram Aarti', icon: '🏹', plays: '2.1M', color: 'from-green-400 to-blue-500' },
        { id: 10, title: 'Sai Baba Aarti', icon: '🙏', plays: '3.5M', color: 'from-yellow-300 to-orange-500' }
      ]
    },

    "chalisa-sangrah": {
      displayName: 'Chalisa',
      hindiName: 'चालीसा',
      icon: '📿',
      color: 'from-red-400 to-pink-500',
      headerImages: [
        {
          url: 'https://images.unsplash.com/photo-1528402514002-0c9dc4c09939?w=1200&q=80',
          deity: 'Divine Chalisa',
          mantra: 'ॐ नमो भगवते वासुदेवाय'
        },
        {
          url: 'https://images.unsplash.com/photo-1609619385002-f40de264d5b6?w=1200&q=80',
          deity: 'Sacred Prayers',
          mantra: 'ॐ श्री गणेशाय नमः'
        }
      ],
      items: [
        { id: 1, title: 'Hanuman Chalisa', icon: '⚡', plays: '5.8M', color: 'from-orange-500 to-red-600' },
        { id: 2, title: 'Shiv Chalisa', icon: '🔱', plays: '3.4M', color: 'from-blue-600 to-purple-700' },
        { id: 3, title: 'Ganesh Chalisa', icon: '🐘', plays: '2.9M', color: 'from-orange-400 to-yellow-500' },
        { id: 4, title: 'Krishna Chalisa', icon: '🪶', plays: '2.2M', color: 'from-blue-500 to-indigo-600' },
        { id: 5, title: 'Durga Chalisa', icon: '⚔️', plays: '2.7M', color: 'from-red-500 to-pink-600' },
        { id: 6, title: 'Lakshmi Chalisa', icon: '🪷', plays: '1.8M', color: 'from-pink-400 to-red-500' },
        { id: 7, title: 'Saraswati Chalisa', icon: '🎵', plays: '1.4M', color: 'from-blue-300 to-teal-500' },
        { id: 8, title: 'Ram Chalisa', icon: '🏹', plays: '2.5M', color: 'from-green-500 to-emerald-600' },
        { id: 9, title: 'Vishnu Chalisa', icon: '🌀', plays: '1.6M', color: 'from-teal-500 to-cyan-600' },
        { id: 10, title: 'Sai Baba Chalisa', icon: '🙏', plays: '3.1M', color: 'from-yellow-400 to-orange-500' }
      ]
    },

    "bhajan": {
      displayName: 'Bhajan',
      hindiName: 'भजन',
      icon: '🎵',
      color: 'from-pink-400 to-red-500',
      headerImages: [
        {
          url: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=1200&q=80',
          deity: 'Divine Music',
          mantra: 'संगीतं सर्वदेवानां'
        },
        {
          url: 'https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=1200&q=80',
          deity: 'Sacred Songs',
          mantra: 'भजन कीर्तन सुखदायक'
        }
      ],
      items: [
        { id: 1, title: 'Shiv Bhajan', icon: '🔱', plays: '4.2M', color: 'from-indigo-600 to-purple-700' },
        { id: 2, title: 'Krishna Bhajan', icon: '🪶', plays: '5.5M', color: 'from-blue-500 to-cyan-600' },
        { id: 3, title: 'Ram Bhajan', icon: '🏹', plays: '3.8M', color: 'from-green-500 to-teal-600' },
        { id: 4, title: 'Hanuman Bhajan', icon: '⚡', plays: '4.9M', color: 'from-orange-500 to-red-600' },
        { id: 5, title: 'Ganesh Bhajan', icon: '🐘', plays: '3.3M', color: 'from-yellow-400 to-orange-500' },
        { id: 6, title: 'Durga Bhajan', icon: '⚔️', plays: '2.8M', color: 'from-red-500 to-pink-600' },
        { id: 7, title: 'Lakshmi Bhajan', icon: '🪷', plays: '2.4M', color: 'from-pink-400 to-rose-500' },
        { id: 8, title: 'Saraswati Bhajan', icon: '🎵', plays: '2.1M', color: 'from-blue-300 to-indigo-500' },
        { id: 9, title: 'Sai Baba Bhajan', icon: '🙏', plays: '4.6M', color: 'from-yellow-500 to-amber-600' },
        { id: 10, title: 'Radha Krishna Bhajan', icon: '💕', plays: '3.9M', color: 'from-pink-500 to-purple-600' }
      ]
    },

    "mantra": {
      displayName: 'Mantra',
      hindiName: 'मंत्र',
      icon: '🕉️',
      color: 'from-purple-500 to-indigo-600',
      headerImages: [
        {
          url: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=1200&q=80',
          deity: 'Sacred Mantras',
          mantra: 'ॐ नमः शिवाय'
        },
        {
          url: 'https://images.unsplash.com/photo-1545389336-cf090694435e?w=1200&q=80',
          deity: 'Divine Chants',
          mantra: 'ॐ गं गणपतये नमः'
        }
      ],
      items: [
        { id: 1, title: 'Gayatri Mantra', icon: '☀️', plays: '6.2M', color: 'from-yellow-400 to-orange-500' },
        { id: 2, title: 'Mahamrityunjaya Mantra', icon: '🔱', plays: '5.1M', color: 'from-blue-600 to-indigo-700' },
        { id: 3, title: 'Om Namah Shivaya', icon: '🕉️', plays: '4.8M', color: 'from-purple-600 to-pink-600' },
        { id: 4, title: 'Ganesh Mantra', icon: '🐘', plays: '4.3M', color: 'from-orange-500 to-red-600' },
        { id: 5, title: 'Lakshmi Mantra', icon: '🪷', plays: '3.7M', color: 'from-pink-500 to-rose-600' },
        { id: 6, title: 'Hanuman Mantra', icon: '⚡', plays: '4.5M', color: 'from-orange-600 to-amber-700' },
        { id: 7, title: 'Durga Mantra', icon: '⚔️', plays: '3.2M', color: 'from-red-600 to-pink-700' },
        { id: 8, title: 'Saraswati Mantra', icon: '🎵', plays: '2.9M', color: 'from-blue-400 to-cyan-600' },
        { id: 9, title: 'Vishnu Mantra', icon: '🌀', plays: '3.4M', color: 'from-teal-500 to-emerald-600' },
        { id: 10, title: 'Krishna Mantra', icon: '🪶', plays: '3.8M', color: 'from-blue-500 to-purple-600' }
      ]
    },

    "stotram": {
      displayName: 'Stotram',
      hindiName: 'स्तोत्रम्',
      icon: '📖',
      color: 'from-blue-500 to-teal-500',
      headerImages: [
        {
          url: 'https://images.unsplash.com/photo-1532012197267-da84d127e765?w=1200&q=80',
          deity: 'Sacred Hymns',
          mantra: 'श्लोकं पठति यः'
        },
        {
          url: 'https://images.unsplash.com/photo-1519682337058-a94d519337bc?w=1200&q=80',
          deity: 'Divine Verses',
          mantra: 'स्तोत्रं देवानां'
        }
      ],
      items: [
        { id: 1, title: 'Vishnu Sahasranamam', icon: '🌀', plays: '3.9M', color: 'from-teal-600 to-cyan-700' },
        { id: 2, title: 'Shiv Tandav Stotram', icon: '🔱', plays: '4.4M', color: 'from-indigo-600 to-purple-700' },
        { id: 3, title: 'Hanuman Chalisa', icon: '⚡', plays: '5.2M', color: 'from-orange-600 to-red-700' },
        { id: 4, title: 'Durga Saptashati', icon: '⚔️', plays: '2.8M', color: 'from-red-600 to-pink-700' },
        { id: 5, title: 'Ganesh Atharvashirsha', icon: '🐘', plays: '2.5M', color: 'from-yellow-500 to-orange-600' },
        { id: 6, title: 'Lakshmi Ashtakam', icon: '🪷', plays: '2.1M', color: 'from-pink-500 to-rose-600' },
        { id: 7, title: 'Saraswati Stotram', icon: '🎵', plays: '1.9M', color: 'from-blue-400 to-indigo-600' },
        { id: 8, title: 'Ram Raksha Stotram', icon: '🏹', plays: '3.3M', color: 'from-green-600 to-emerald-700' },
        { id: 9, title: 'Krishna Ashtakam', icon: '🪶', plays: '2.7M', color: 'from-blue-500 to-purple-600' },
        { id: 10, title: 'Surya Namaskar', icon: '☀️', plays: '2.4M', color: 'from-yellow-400 to-orange-500' }
      ]
    }
  };

  // Get current category with fallback
  const currentCategory = categoryData[categoryName] || categoryData["aarti-sangrah"];
  const { displayName, hindiName, icon, color, headerImages, items } = currentCategory;

  // Auto-change slider
  useEffect(() => {
    if (!headerImages || headerImages.length === 0) return;
    
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % headerImages.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [headerImages]);

  // Scroll function
  const scrollContainer = (direction) => {
    const container = document.getElementById('scroll-container');
    if (container) {
      const scrollAmount = window.innerWidth < 640 ? 200 : 300;
      container.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 to-amber-50">
      {/* Header Slider with Border and Back Button */}
      <div className="px-3 sm:px-4 md:px-6 pt-3 sm:pt-4 md:pt-6">
        <div className="relative w-full h-64 sm:h-80 md:h-96 lg:h-[28rem] overflow-hidden rounded-2xl sm:rounded-3xl border-2 sm:border-4 border-white shadow-xl sm:shadow-2xl ring-2 sm:ring-4 ring-orange-200">
          {headerImages.map((img, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                index === currentImageIndex ? "opacity-100" : "opacity-0"
              }`}
            >
              <img 
                src={img.url} 
                alt={img.deity} 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>

              {/* Text Overlay - Responsive */}
              <div className="absolute bottom-0 p-4 sm:p-6 md:p-8 text-center text-white w-full">
                <div className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl mb-2 sm:mb-3 md:mb-4 animate-pulse">
                  {icon}
                </div>
                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-1 sm:mb-2 md:mb-3 tracking-wide drop-shadow-lg">
                  {img.deity}
                </h1>
                <p className="text-sm sm:text-lg md:text-xl lg:text-2xl text-orange-200 drop-shadow-md">
                  {img.mantra}
                </p>
              </div>
            </div>
          ))}

          {/* Back Button - Inside Header */}
          <button
            onClick={onBack}
            className="absolute top-2 left-2 sm:top-3 sm:left-3 md:top-4 md:left-4 z-50 bg-white/80 backdrop-blur-sm hover:bg-white shadow-md rounded-full p-1.5 sm:p-2 md:p-2.5 transition-all duration-300 hover:scale-110 active:scale-95"
            aria-label="Go back"
          >
            <ArrowLeft className="w-5 h-5 sm:w-5 sm:h-5 md:w-6 md:h-6 text-gray-700" />
          </button>
        </div>
      </div>

      {/* Trending Section */}
      <div className="px-3 sm:px-4 md:px-6 lg:px-8 py-6 sm:py-8 md:py-10">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-1 bg-gradient-to-r from-orange-600 via-red-600 to-yellow-600 bg-clip-text text-transparent">
          Trending {displayName}
        </h2>
        <p className="text-lg sm:text-xl md:text-2xl text-center text-orange-500 font-semibold mb-6 sm:mb-8">
          {hindiName}
        </p>

        {/* Horizontal Scrollable Cards */}
        <div className="relative max-w-7xl mx-auto">
          {/* Left Arrow - Hidden on mobile */}
          <button
            onClick={() => scrollContainer("left")}
            className="hidden sm:block absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/90 rounded-full p-2 md:p-3 shadow-lg hover:scale-110 active:scale-95 transition-transform"
          >
            <ChevronLeft className="w-5 h-5 md:w-6 md:h-6 text-orange-600" />
          </button>

          {/* Cards Container */}
          <div
            id="scroll-container"
            className="flex overflow-x-auto gap-3 sm:gap-4 md:gap-6 pb-4 scrollbar-hide scroll-smooth px-0 sm:px-8 md:px-12"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {items.map((item, index) => (
              <div
                key={item.id}
                className="group flex-shrink-0 cursor-pointer"
                style={{ 
                  width: "clamp(150px, 45vw, 280px)",
                  animation: `fadeInScale 0.5s ease-out ${index * 0.1}s both`
                }}
              >
                <div
                  className={`relative aspect-square bg-gradient-to-br ${item.color} rounded-xl sm:rounded-2xl shadow-md sm:shadow-lg hover:scale-105 active:scale-95 hover:shadow-xl sm:hover:shadow-2xl transition-all duration-300`}
                >
                  {/* Icon */}
                  <div className="absolute inset-0 flex items-center justify-center text-5xl sm:text-6xl md:text-7xl lg:text-8xl">
                    {item.icon}
                  </div>

                  {/* Play Count Badge */}
                  <div className="absolute bottom-2 sm:bottom-3 right-2 sm:right-3 bg-black/60 text-white px-2 py-0.5 sm:px-3 sm:py-1 rounded-full text-xs sm:text-sm font-semibold backdrop-blur-sm">
                    {item.plays}
                  </div>

                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl sm:rounded-2xl"></div>
                </div>

                {/* Title */}
                <h3 className="text-center mt-2 sm:mt-3 font-semibold text-gray-800 text-sm sm:text-base md:text-lg line-clamp-2">
                  {item.title}
                </h3>
              </div>
            ))}
          </div>

          {/* Right Arrow - Hidden on mobile */}
          <button
            onClick={() => scrollContainer("right")}
            className="hidden sm:block absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/90 rounded-full p-2 md:p-3 shadow-lg hover:scale-110 active:scale-95 transition-transform"
          >
            <ChevronRight className="w-5 h-5 md:w-6 md:h-6 text-orange-600" />
          </button>
        </div>

        {/* Scroll Hint for Mobile */}
        <div className="flex sm:hidden items-center justify-center mt-4 space-x-2 text-gray-500 text-xs animate-bounce">
          <ChevronLeft className="w-4 h-4" />
          <span>Swipe to explore more</span>
          <ChevronRight className="w-4 h-4" />
        </div>
      </div>

      {/* Hide scrollbar and animations */}
      <style jsx>{`
        #scroll-container::-webkit-scrollbar {
          display: none;
        }

        @keyframes fadeInScale {
          from {
            opacity: 0;
            transform: scale(0.9);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        /* Smooth scrolling on touch devices */
        #scroll-container {
          -webkit-overflow-scrolling: touch;
        }

        /* Prevent text selection on mobile */
        .group {
          -webkit-tap-highlight-color: transparent;
          -webkit-touch-callout: none;
          -webkit-user-select: none;
          user-select: none;
        }
      `}</style>
    </div>
  );
};

export default SquareCardsContent;