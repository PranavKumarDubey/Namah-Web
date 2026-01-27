import React from 'react';
import { useNavigate } from 'react-router-dom';
import { getAllCategories } from '../../config/categories';

const SquareCards = () => {
  const navigate = useNavigate();

  // ✅ Get categories from centralized config
  const categories = getAllCategories();

  const handleCardClick = (categoryKey) => {
    navigate(`/category/${categoryKey}`);
  };

  return (
    <div className="w-full py-6 sm:py-8 md:py-12 bg-gradient-to-br from-orange-50 via-yellow-50 to-red-50 min-h-screen">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Spiritual Header */}
        <div className="relative bg-gradient-to-r from-orange-500 via-red-500 to-yellow-500 rounded-2xl sm:rounded-3xl shadow-xl sm:shadow-2xl p-4 sm:p-6 md:p-8 mb-6 sm:mb-8 md:mb-10 overflow-hidden">
          <div className="absolute inset-0 rounded-2xl sm:rounded-3xl border-2 sm:border-4 border-white/20"></div>
          
          <div className="relative z-10">
            {/* Mobile Layout (< 640px) */}
            <div className="sm:hidden">
              <div className="text-center space-y-3">
                <div className="text-4xl text-white drop-shadow-2xl animate-pulse">ॐ</div>
                <div>
                  <h2 className="text-3xl font-bold text-white mb-1 drop-shadow-lg" 
                      style={{fontFamily: 'Georgia, serif'}}>
                    Sacred Collection
                  </h2>
                  <p className="text-lg text-yellow-100 font-semibold" style={{fontFamily: 'Times New Roman, serif'}}>
                    पवित्र संग्रह
                  </p>
                </div>
                <div className="flex items-center justify-center">
                  <div className="h-0.5 bg-white/40 w-20"></div>
                  <div className="mx-3 text-xl text-yellow-200">✨</div>
                  <div className="h-0.5 bg-white/40 w-20"></div>
                </div>
              </div>
            </div>

            {/* Tablet & Desktop Layout (>= 640px) */}
            <div className="hidden sm:block">
              <div className="flex items-center justify-center space-x-4 md:space-x-8 mb-3 md:mb-4">
                <div className="text-4xl md:text-5xl text-white drop-shadow-2xl animate-pulse">ॐ</div>
                
                <div className="text-center">
                  <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-1 md:mb-2 drop-shadow-lg" 
                      style={{fontFamily: 'Georgia, serif'}}>
                    Sacred Collection
                  </h2>
                  <p className="text-lg md:text-xl lg:text-2xl text-yellow-100 font-semibold" style={{fontFamily: 'Times New Roman, serif'}}>
                    पवित्र संग्रह
                  </p>
                </div>
                
                <div className="text-4xl md:text-5xl text-white drop-shadow-2xl animate-pulse">ॐ</div>
              </div>
              
              <div className="flex items-center justify-center mt-3 md:mt-4">
                <div className="h-0.5 bg-white/40 w-20 md:w-32"></div>
                <div className="mx-3 md:mx-4 text-xl md:text-2xl text-yellow-200">✨</div>
                <div className="h-0.5 bg-white/40 w-20 md:w-32"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Cards Grid - Mobile First Responsive */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 sm:gap-4 md:gap-6 lg:gap-8">
          {categories.map((category, index) => (
            <div
              key={category.key}
              onClick={() => handleCardClick(category.key)}
              className="group cursor-pointer"
              style={{
                animation: `fadeInUp 0.6s ease-out ${index * 0.1}s both`
              }}
            >
              <div className={`relative bg-gradient-to-br ${category.color} rounded-xl sm:rounded-2xl shadow-lg sm:shadow-xl hover:shadow-xl sm:hover:shadow-2xl transform hover:scale-105 active:scale-95 transition-all duration-300 sm:duration-500 overflow-hidden aspect-[3/4] h-48 sm:h-56 md:h-64`}>
                
                {/* Shine Effect */}
                <div 
                  className="absolute inset-0 hidden sm:block"
                  style={{
                    background: 'linear-gradient(135deg, transparent 0%, transparent 40%, rgba(255,255,255,0.5) 50%, transparent 60%, transparent 100%)',
                    backgroundSize: '200% 200%',
                    animation: 'shine 3.5s ease-in-out infinite'
                  }}
                ></div>

                {/* Border Glow */}
                <div className="absolute inset-0 rounded-xl sm:rounded-2xl border-2 border-white/30 group-hover:border-white/60 transition-all duration-300 sm:duration-500"></div>

                {/* Floating Icon */}
                <div 
                  className={`absolute top-8 sm:top-10 md:top-12 left-1/2 transform -translate-x-1/2 text-5xl sm:text-6xl md:text-7xl ${category.iconColor} drop-shadow-2xl z-10`}
                  style={{
                    animation: 'float 3s ease-in-out infinite'
                  }}
                >
                  {category.icon}
                </div>

                {/* Decorative Elements - Hidden on mobile for cleaner look */}
                <div className="hidden sm:block absolute top-3 md:top-4 right-3 md:right-4 text-white/20 text-lg md:text-xl">✨</div>
                <div className="hidden sm:block absolute bottom-16 md:bottom-20 left-3 md:left-4 text-white/20 text-lg md:text-xl">🌟</div>

                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-4 md:p-5 bg-gradient-to-t from-black/70 via-black/50 to-transparent">
                  <h3 className="text-base sm:text-lg md:text-xl font-bold text-white mb-0.5 sm:mb-1 drop-shadow-lg group-hover:scale-105 transition-transform duration-300 text-center leading-tight">
                    {category.title}
                  </h3>
                  <p className="text-xs sm:text-sm md:text-base text-yellow-200 font-semibold text-center">
                    {category.subtitle}
                  </p>
                </div>

                {/* Hover Particles - Only on larger screens */}
                <div className="hidden md:block absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none">
                  <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-white rounded-full animate-ping"></div>
                  <div className="absolute top-1/3 right-1/4 w-1 h-1 bg-yellow-300 rounded-full animate-ping" style={{animationDelay: '0.5s'}}></div>
                  <div className="absolute bottom-1/3 left-1/3 w-1 h-1 bg-orange-300 rounded-full animate-ping" style={{animationDelay: '1s'}}></div>
                  <div className="absolute bottom-1/4 right-1/3 w-2 h-2 bg-white rounded-full animate-ping" style={{animationDelay: '1.5s'}}></div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Decoration */}
        <div className="flex items-center justify-center mt-6 sm:mt-8 md:mt-10 space-x-3 sm:space-x-4">
          <div className="text-orange-600 text-lg sm:text-xl">🙏</div>
          <p className="text-gray-600 italic text-xs sm:text-sm text-center">
            Click on any category to explore more
          </p>
          <div className="text-orange-600 text-lg sm:text-xl">🙏</div>
        </div>
      </div>

      {/* CSS Animations */}
      <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        @media (min-width: 640px) {
          @keyframes float {
            0%, 100% {
              transform: translateY(0px);
            }
            50% {
              transform: translateY(-15px);
            }
          }
        }

        @keyframes shine {
          0% {
            background-position: -100% -100%;
          }
          50% {
            background-position: 100% 100%;
          }
          100% {
            background-position: -100% -100%;
          }
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @media (min-width: 640px) {
          @keyframes fadeInUp {
            from {
              opacity: 0;
              transform: translateY(30px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
        }
      `}</style>
    </div>
  );
};

export default SquareCards;