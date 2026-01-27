import PrayerCard from './PrayerCard';

function PrayersSection({ prayers, favorites, onToggleFavorite, deityImage, deityName }) {
  return (
    <div className="px-3 sm:px-4 md:px-6 py-4 sm:py-6 md:py-8">
      <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-800 mb-4 sm:mb-6 px-1">
        Prayers & Aartis
      </h2>

      {prayers && prayers.length > 0 ? (
        <div className="space-y-3 sm:space-y-4">
          {prayers.map(prayer => (
            <PrayerCard
              key={prayer.id}
              prayer={prayer}
              isFavorite={favorites[prayer.id] || false}
              onToggleFavorite={onToggleFavorite}
              deityImage={deityImage}  // Same deity image for all prayers
              deityName={deityName}
            />
          ))}
        </div>
      ) : (
        <div className="text-center py-12">
          <p className="text-gray-500 text-lg">No prayers available for this deity</p>
        </div>
      )}
    </div>
  );
}

export default PrayersSection;