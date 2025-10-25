import React from 'react';

const SquareCards = () => {
  const categories = [
    {
      id: 1,
      title: 'Aarti Sangrah',
      subtitle: 'आरती संग्रह',
      icon: '🪔',
      color: 'from-orange-400 to-red-500',
      iconColor: 'text-yellow-300'
    },
    {
      id: 2,
      title: 'Chalisa Sangrah',
      subtitle: 'चालीसा संग्रह',
      icon: '📿',
      color: 'from-yellow-400 to-orange-500',
      iconColor: 'text-orange-300'
    },
    {
      id: 3,
      title: 'Bhajan',
      subtitle: 'भजन',
      icon: '🎵',
      color: 'from-pink-400 to-red-500',
      iconColor: 'text-pink-200'
    },
    {
      id: 4,
      title: 'Mantra',
      subtitle: 'मंत्र',
      icon: '🕉️',
      color: 'from-purple-500 to-indigo-600',
      iconColor: 'text-purple-200'
    },
    {
      id: 5,
      title: 'Stotram',
      subtitle: 'स्तोत्रम्',
      icon: '📖',
      color: 'from-blue-500 to-teal-500',
      iconColor: 'text-blue-200'
    }
  ];

  return (
    <div className="w-full py-12 bg-gradient-to-br from-orange-50 via-yellow-50 to-red-50">
      <div className="container mx-auto px-4">
        {/* Spiritual Header with Gradient Background */}
        <div className="relative bg-gradient-to-r from-orange-500 via-red-500 to-yellow-500 rounded-3xl shadow-2xl p-8 mb-10 overflow-hidden">
          {/* Decorative Border */}
          <div className="absolute inset-0 rounded-3xl border-4 border-white/20"></div>
          
          {/* Header Content */}
          <div className="relative z-10">
            <div className="flex items-center justify-center space-x-8 mb-4">
              {/* Left OM Symbol */}
              <div className="text-5xl text-white drop-shadow-2xl animate-pulse">
                ॐ
              </div>
              
              {/* Main Title */}
              <div className="text-center">
                <h2 className="text-5xl font-bold text-white mb-2 drop-shadow-lg" 
                    style={{fontFamily: 'Georgia, serif'}}>
                  Sacred Collection
                </h2>
                <p className="text-2xl text-yellow-100 font-semibold" style={{fontFamily: 'Times New Roman, serif'}}>
                  पवित्र संग्रह
                </p>
              </div>
              
              {/* Right OM Symbol */}
              <div className="text-5xl text-white drop-shadow-2xl animate-pulse">
                ॐ
              </div>
            </div>
            
            {/* Decorative Line */}
            <div className="flex items-center justify-center mt-4">
              <div className="h-0.5 bg-white/40 w-32"></div>
              <div className="mx-4 text-2xl text-yellow-200">✨</div>
              <div className="h-0.5 bg-white/40 w-32"></div>
            </div>
          </div>
        </div>

        {/* Cards Side by Side */}
        <div className="flex flex-wrap justify-center gap-4 lg:gap-6">
          {categories.map((category, index) => (
            <div
              key={category.id}
              className="group cursor-pointer flex-shrink-0"
              style={{
                width: '200px',
                animation: `fadeInUp 0.6s ease-out ${index * 0.1}s both`
              }}
            >
              {/* Card Container */}
              <div className={`relative bg-gradient-to-br ${category.color} rounded-2xl shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-500 overflow-hidden h-64`}>
                
                {/* Shine Effect - Sweeps from corner to corner */}
                <div 
                  className="absolute inset-0"
                  style={{
                    background: 'linear-gradient(135deg, transparent 0%, transparent 40%, rgba(255,255,255,0.5) 50%, transparent 60%, transparent 100%)',
                    backgroundSize: '200% 200%',
                    animation: 'shine 4s ease-in-out infinite'
                  }}
                ></div>

                {/* Border Glow */}
                <div className="absolute inset-0 rounded-2xl border-2 border-white/30 group-hover:border-white/60 transition-all duration-500"></div>

                {/* Floating Icon */}
                <div 
                  className={`absolute top-12 left-1/2 transform -translate-x-1/2 text-7xl ${category.iconColor} drop-shadow-2xl z-10`}
                  style={{
                    animation: 'float 3s ease-in-out infinite'
                  }}
                >
                  {category.icon}
                </div>

                {/* Decorative Elements */}
                <div className="absolute top-4 right-4 text-white/20 text-xl">✨</div>
                <div className="absolute bottom-20 left-4 text-white/20 text-xl">🌟</div>

                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-5 bg-gradient-to-t from-black/70 via-black/50 to-transparent">
                  <h3 className="text-xl font-bold text-white mb-1 drop-shadow-lg group-hover:scale-105 transition-transform duration-300 text-center">
                    {category.title}
                  </h3>
                  <p className="text-base text-yellow-200 font-semibold text-center">
                    {category.subtitle}
                  </p>
                </div>

                {/* Hover Particles */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none">
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
        <div className="flex items-center justify-center mt-10 space-x-4">
          <div className="text-orange-600 text-xl">🙏</div>
          <p className="text-gray-600 italic text-sm">
            Click on any category to explore more
          </p>
          <div className="text-orange-600 text-xl">🙏</div>
        </div>
      </div>

      {/* CSS Animations */}
      <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-15px);
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
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
};

export default SquareCards;