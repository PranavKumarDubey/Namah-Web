import { Heart } from 'lucide-react';
import { useState, useEffect } from 'react';
import { toggleFavourite, isFavourite } from '../../Utils/favouritesUtils';

function PrayerCard({ prayer, isFavorite, onToggleFavorite, deityImage, deityName }) {
  const [imageError, setImageError] = useState(false);
  const [isLiked, setIsLiked] = useState(false);

  const prayerType = prayer?.source || 'aarti';

  const typeMap = {
    'bhajan': 'bhajan',
    'aarti': 'aarti',
    'aarti-sangrah': 'aarti',
    'chalisa': 'chalisa',
    'chalisa-sangrah': 'chalisa',
    'mantra': 'mantra',
    'strot': 'strot',
    'stotram': 'strot',
    'kawach': 'kawach',
    'video': 'video'
  };

  const categoryType = typeMap[prayerType?.toLowerCase()] || 'aarti';

  useEffect(() => {
    if (prayer?.id) {
      setIsLiked(isFavourite(prayer.id, categoryType));
    }
  }, [prayer?.id, categoryType]);

  const handleHeartClick = (e) => {
    e.stopPropagation();
    
    if (!prayer?.id) return;
    
    const item = {
      id: String(prayer.id),
      title: prayer.title || prayer.name || 'Untitled',
      artist: 'Traditional',
      deity: deityName || 'Unknown',
      image: deityImage || '',
      lyrics_preview: prayer.lyrics || prayer.description || null
    };
    
    const wasAdded = toggleFavourite(item, categoryType);
    setIsLiked(wasAdded);
    
    if (onToggleFavorite) {
      onToggleFavorite(prayer.id);
    }
  };

  const getSubtitle = () => {
    if (!prayer?.subtitle) return null;
    
    if (typeof prayer.subtitle === 'object') {
      return prayer.subtitle.en || prayer.subtitle.ma || Object.values(prayer.subtitle)[0];
    }
    
    return prayer.subtitle;
  };

  const subtitle = getSubtitle();

  if (!prayer) {
    return null;
  }

  return (
    <div className="flex items-center bg-white rounded-full shadow-md hover:shadow-lg transition-all duration-300 p-3 sm:p-4 gap-2 sm:gap-3 md:gap-4 group">
      <div className="flex-shrink-0 w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full overflow-hidden border-2 sm:border-4 border-white ring-2 sm:ring-4 ring-orange-200 shadow-md bg-gradient-to-br from-orange-400 to-amber-500 group-hover:ring-orange-300 transition-all">
        {deityImage && !imageError ? (
          <img 
            src={deityImage}
            alt={deityName || prayer.title || 'Prayer'}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
            loading="lazy"
            onError={() => setImageError(true)}
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-2xl sm:text-3xl text-white">
            🙏
          </div>
        )}
      </div>

      <div className="flex-1 min-w-0 ml-1 sm:ml-2">
        <h3 className="text-sm sm:text-base md:text-lg font-semibold text-gray-800 truncate sm:whitespace-normal sm:line-clamp-2 group-hover:text-orange-600 transition-colors">
          {prayer.title || prayer.name || 'Untitled Prayer'}
        </h3>
        {subtitle && (
          <p className="text-xs sm:text-sm text-gray-500 truncate mt-0.5">
            {subtitle}
          </p>
        )}
        <span className="inline-block mt-1 px-2 py-0.5 bg-orange-100 text-orange-600 rounded-full text-xs font-semibold uppercase">
          {prayerType}
        </span>
      </div>

      <button
        onClick={handleHeartClick}
        className={`flex-shrink-0 p-2 rounded-full transition-all shadow-lg ${
          isLiked
            ? 'bg-red-500 text-white scale-110'
            : 'bg-gray-100 text-gray-600 hover:bg-red-50 hover:text-red-500'
        }`}
        aria-label={isLiked ? "Remove from favorites" : "Add to favorites"}
      >
        <Heart
          className={`w-5 h-5 sm:w-6 sm:h-6 transition-all duration-200 ${
            isLiked ? 'fill-current' : ''
          }`}
        />
      </button>
    </div>
  );
}

export default PrayerCard;