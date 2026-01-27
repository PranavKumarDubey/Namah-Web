import { useParams, useNavigate } from "react-router-dom";
import React, { useState, useEffect } from 'react';
import { ArrowLeft, ChevronLeft, ChevronRight, Loader2, Heart } from 'lucide-react';
import { useCategoryData } from "../../hooks/useCategoryHooks";
import { getCategoryByKey } from '../../config/categories';
import { toggleFavourite, isFavourite } from '../../Utils/favouritesUtils';
const SquareCardsContent = () => {
  const { categoryName } = useParams();
  const navigate = useNavigate();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [likedItems, setLikedItems] = useState(new Set());

  const onBack = () => navigate(-1);

  // Fetch data from API
  const { data: apiData, loading, error } = useCategoryData(categoryName);

  // Get category metadata from centralized config
  const currentCategory = getCategoryByKey(categoryName);
  const { displayName, hindiName, icon, color, headerImages } = currentCategory;

  // Helper function to get icon based on tags
  const getIconForTag = (tags) => {
    const tagLower = tags.toLowerCase();
    if (tagLower.includes('ganesh')) return '🐘';
    if (tagLower.includes('shiv') || tagLower.includes('mahakal')) return '🔱';
    if (tagLower.includes('hanuman') || tagLower.includes('balaji')) return '⚡';
    if (tagLower.includes('krishna')) return '🪶';
    if (tagLower.includes('durga') || tagLower.includes('devi') || tagLower.includes('ambe')) return '⚔️';
    if (tagLower.includes('laxmi') || tagLower.includes('lakshmi')) return '🪷';
    if (tagLower.includes('saraswati')) return '🎵';
    if (tagLower.includes('ram')) return '🏹';
    if (tagLower.includes('vishnu') || tagLower.includes('narayan')) return '🌀';
    if (tagLower.includes('sai')) return '🙏';
    if (tagLower.includes('surya')) return '☀️';
    return '🕉️';
  };

  // Helper function to get color based on tags
  const getColorForTag = (tags) => {
    const tagLower = tags.toLowerCase();
    if (tagLower.includes('ganesh')) return 'from-orange-400 to-red-500';
    if (tagLower.includes('shiv')) return 'from-gray-600 to-indigo-800';
    if (tagLower.includes('hanuman')) return 'from-orange-500 to-red-600';
    if (tagLower.includes('krishna')) return 'from-blue-500 to-purple-600';
    if (tagLower.includes('durga')) return 'from-red-500 to-yellow-500';
    if (tagLower.includes('laxmi') || tagLower.includes('lakshmi')) return 'from-pink-400 to-red-500';
    if (tagLower.includes('saraswati')) return 'from-blue-200 to-blue-500';
    if (tagLower.includes('ram')) return 'from-green-400 to-blue-500';
    if (tagLower.includes('vishnu')) return 'from-teal-400 to-blue-600';
    if (tagLower.includes('surya')) return 'from-yellow-400 to-orange-500';
    return 'from-orange-400 to-red-500';
  };

  // Base URL for images
  const IMAGE_BASE_URL = 'https://namah-api.pages.dev/img';

  // ✅ Transform API data with String IDs
  const items = apiData ? apiData.map(item => ({
    id: String(item.id), // ✅ Convert to String immediately
    title: item.title,
    icon: getIconForTag(item.tags),
    imageUrl: item.img_url ? `${IMAGE_BASE_URL}${item.img_url}` : null,
    color: getColorForTag(item.tags),
    deity: displayName,
    tags: item.tags
  })) : [];

  // Load initial favourites state
  useEffect(() => {
    if (items.length > 0 && categoryName) {
      const initialLiked = new Set();
      items.forEach(item => {
        if (isFavourite(item.id, categoryName)) {
          const itemKey = `${item.title}-${item.deity}`;
          initialLiked.add(itemKey);
        }
      });
      setLikedItems(initialLiked);
    }
  }, [items.length, categoryName]);

  // Reload favourites when window gains focus
  useEffect(() => {
    const handleFocus = () => {
      if (items.length > 0 && categoryName) {
        const updatedLiked = new Set();
        items.forEach(item => {
          if (isFavourite(item.id, categoryName)) {
            const itemKey = `${item.title}-${item.deity}`;
            updatedLiked.add(itemKey);
          }
        });
        setLikedItems(updatedLiked);
      }
    };

    window.addEventListener('focus', handleFocus);
    return () => window.removeEventListener('focus', handleFocus);
  }, [items.length, categoryName]);

  // Toggle like with proper state management
  const toggleLike = (item, e) => {
    if (e) e.stopPropagation();
    
    // ✅ Create proper item object for toggleFavourite
    const itemToAdd = {
      id: item.id,
      title: item.title,
      artist: 'Traditional',
      deity: item.deity,
      image: item.imageUrl,
      lyrics_preview: null
    };
    
    const wasAdded = toggleFavourite(itemToAdd, categoryName);
    
    setLikedItems(prev => {
      const newSet = new Set(prev);
      const itemKey = `${item.title}-${item.deity}`;
      if (wasAdded) {
        newSet.add(itemKey);
      } else {
        newSet.delete(itemKey);
      }
      return newSet;
    });
  };

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

  // Loading State
  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-orange-50 to-amber-50 flex items-center justify-center">
        <div className="text-center">
          <Loader2 className="w-12 h-12 animate-spin text-orange-600 mx-auto mb-4" />
          <p className="text-lg text-gray-600">Loading {displayName}...</p>
        </div>
      </div>
    );
  }

  // Error State
  if (error) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-orange-50 to-amber-50 flex items-center justify-center px-4">
        <div className="text-center max-w-md">
          <div className="text-6xl mb-4">⚠️</div>
          <h2 className="text-2xl font-bold text-gray-800 mb-2">Oops! Something went wrong</h2>
          <p className="text-gray-600 mb-6">{error}</p>
          <button
            onClick={onBack}
            className="bg-orange-600 text-white px-6 py-3 rounded-lg hover:bg-orange-700 transition-colors"
          >
            Go Back
          </button>
        </div>
      </div>
    );
  }

  // No Data State
  if (!items || items.length === 0) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-orange-50 to-amber-50 flex items-center justify-center px-4">
        <div className="text-center">
          <div className="text-6xl mb-4">{icon}</div>
          <h2 className="text-2xl font-bold text-gray-800 mb-2">No {displayName} Available</h2>
          <p className="text-gray-600 mb-6">Please check back later</p>
          <button
            onClick={onBack}
            className="bg-orange-600 text-white px-6 py-3 rounded-lg hover:bg-orange-700 transition-colors"
          >
            Go Back
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 to-amber-50">
      {/* Header Slider */}
      <div className="px-3 sm:px-4 md:px-6 pt-3 sm:pt-4 md:pt-6">
        <div className="relative w-full h-48 sm:h-56 md:h-64 lg:h-72 overflow-hidden rounded-2xl sm:rounded-3xl border-2 sm:border-4 border-white shadow-xl sm:shadow-2xl ring-2 sm:ring-4 ring-orange-200">
          {headerImages && headerImages.length > 0 ? (
            headerImages.map((img, index) => (
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
            ))
          ) : (
            <div className="absolute inset-0 bg-gradient-to-br from-orange-400 to-red-500 flex items-center justify-center">
              <div className="text-center text-white">
                <div className="text-7xl mb-4 animate-pulse">{icon}</div>
                <h1 className="text-4xl font-bold">{displayName}</h1>
                <p className="text-2xl mt-2">{hindiName}</p>
              </div>
            </div>
          )}

          {/* Back Button */}
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
        <p className="text-lg sm:text-xl md:text-2xl text-center text-orange-500 font-semibold mb-2">
          {hindiName}
        </p>
        <p className="text-sm text-center text-gray-500 mb-6 sm:mb-8">
          💖 {likedItems.size} favourites
        </p>

        {/* Horizontal Scrollable Cards */}
        <div className="relative max-w-7xl mx-auto">
          {/* Left Arrow */}
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
            {items.map((item, index) => {
              const isLiked = likedItems.has(`${item.title}-${item.deity}`);
              
              return (
                <div
                  key={item.id}
                  className="group flex-shrink-0"
                  style={{ 
                    width: "clamp(150px, 45vw, 280px)",
                    animation: `fadeInScale 0.5s ease-out ${index * 0.1}s both`
                  }}
                >
                  <div
                    className={`relative aspect-square bg-gradient-to-br ${item.color} rounded-xl sm:rounded-2xl shadow-md sm:shadow-lg hover:scale-105 active:scale-95 hover:shadow-xl sm:hover:shadow-2xl transition-all duration-300 overflow-hidden border-2 sm:border-4 border-white ring-2 sm:ring-4 ring-orange-200`}
                  >
                    {/* God Image */}
                    {item.imageUrl ? (
                      <>
                        <img 
                          src={item.imageUrl} 
                          alt={item.title}
                          className="absolute inset-0 w-full h-full object-cover"
                          onError={(e) => {
                            e.target.style.display = 'none';
                          }}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
                      </>
                    ) : (
                      <div className="absolute inset-0 flex items-center justify-center text-5xl sm:text-6xl md:text-7xl lg:text-8xl">
                        {item.icon}
                      </div>
                    )}

                    {/* ✅ Favorite Heart Button */}
                    <button
                      onClick={(e) => toggleLike(item, e)}
                      className={`absolute top-2 right-2 p-1.5 sm:p-2 rounded-full transition-all shadow-lg z-30 ${
                        isLiked
                          ? 'bg-red-500 text-white scale-110'
                          : 'bg-white/90 backdrop-blur-sm text-gray-600 hover:bg-red-50 hover:text-red-500'
                      }`}
                      aria-label={isLiked ? 'Remove from favorites' : 'Add to favorites'}
                    >
                      <Heart
                        className={`w-4 h-4 sm:w-5 sm:h-5 transition-all duration-200 ${
                          isLiked ? 'fill-current' : ''
                        }`}
                      />
                    </button>

                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl sm:rounded-2xl"></div>
                  </div>

                  {/* Title */}
                  <div className="text-center mt-2 sm:mt-3">
                    <h3 className="font-semibold text-gray-800 text-sm sm:text-base md:text-lg line-clamp-2 mb-1">
                      {item.title}
                    </h3>
                    {isLiked && (
                      <div className="flex items-center justify-center gap-1 text-red-500 text-xs font-semibold">
                        <Heart className="w-3 h-3 fill-current" />
                        <span>Saved</span>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Arrow */}
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

      {/* Styles */}
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

        #scroll-container {
          -webkit-overflow-scrolling: touch;
        }

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