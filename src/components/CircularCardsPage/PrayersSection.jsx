import PrayerCard from './PrayerCard';

function PrayersSection({ prayers, favorites, onToggleFavorite }) {
  return (
    <div className="px-3 sm:px-4 md:px-6 py-4 sm:py-6 md:py-8">
      <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-800 mb-4 sm:mb-6 px-1">
        Prayers & Aartis
      </h2>

      <div className="space-y-3 sm:space-y-4">
        {prayers.map(prayer => (
          <PrayerCard
            key={prayer.id}
            prayer={prayer}
            isFavorite={favorites[prayer.id] || false}
            onToggleFavorite={onToggleFavorite}
          />
        ))}
      </div>
    </div>
  );
}

export default PrayersSection;