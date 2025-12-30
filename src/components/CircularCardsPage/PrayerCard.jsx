import { Heart } from 'lucide-react';

function PrayerCard({ prayer, isFavorite, onToggleFavorite }) {
  return (
    <div className="flex items-center bg-white rounded-full shadow-md hover:shadow-lg active:shadow-xl transition-all duration-300 p-3 sm:p-4 gap-2 sm:gap-3 md:gap-4">
      {/* Circular Icon */}
      <div className="flex-shrink-0 w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full bg-gradient-to-br from-orange-400 to-amber-500 flex items-center justify-center text-2xl sm:text-3xl shadow-md">
        {prayer.icon}
      </div>

      {/* Title */}
      <div className="flex-1 min-w-0 ml-1 sm:ml-2">
        <h3 className="text-sm sm:text-base md:text-lg font-semibold text-gray-800 truncate sm:whitespace-normal">
          {prayer.title}
        </h3>
      </div>

      {/* Favorite Heart Button */}
      <button
        onClick={() => onToggleFavorite(prayer.id)}
        className="flex-shrink-0 p-1.5 sm:p-2 rounded-full hover:bg-orange-50 active:bg-orange-100 transition-colors duration-200"
        aria-label={isFavorite ? "Remove from favorites" : "Add to favorites"}
      >
        <Heart
          className={`w-5 h-5 sm:w-6 sm:h-6 transition-all duration-200 ${
            isFavorite
              ? 'fill-red-500 text-red-500 scale-110'
              : 'text-gray-400'
          }`}
        />
      </button>
    </div>
  );
}

export default PrayerCard;