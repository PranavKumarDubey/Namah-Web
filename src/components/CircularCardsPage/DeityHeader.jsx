import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

function DeityHeader({ deity }) {
  const navigate = useNavigate();

  return (
    <div className="px-3 sm:px-4 md:px-6 pt-3 sm:pt-4 md:pt-6">
      <div className={`relative w-full h-48 sm:h-56 md:h-64 lg:h-72 xl:h-80 bg-gradient-to-br ${deity.color} overflow-hidden rounded-2xl sm:rounded-3xl border-2 sm:border-4 border-white shadow-xl sm:shadow-2xl ring-2 sm:ring-4 ring-orange-200`}>
        {/* Back Button */}
        <button
          onClick={() => navigate(-1)}
          className="absolute top-2 left-2 sm:top-3 sm:left-3 md:top-4 md:left-4 z-10 bg-white/80 backdrop-blur-sm p-1.5 sm:p-2 rounded-full shadow-md hover:bg-white transition-all active:scale-95"
          aria-label="Go back"
        >
          <ArrowLeft className="w-5 h-5 sm:w-6 sm:h-6 text-gray-700" />
        </button>

        {/* Deity Image */}
        <img 
          src={deity.image} 
          alt={deity.name}
          className="w-full h-full object-cover"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>

        {/* Title and Mantra */}
        <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-4 md:p-6 text-center text-white">
          <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold tracking-wide drop-shadow-lg mb-1 sm:mb-2">
            {deity.name}
          </h1>
          <p className="text-xs sm:text-sm md:text-base text-orange-100 drop-shadow-md px-2 sm:px-4 line-clamp-2">
            {deity.mantra}
          </p>
        </div>
      </div>
    </div>
  );
}

export default DeityHeader;