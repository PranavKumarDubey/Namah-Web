import React from 'react';

const CircularCardsItems = () => {
  const godCards = [
    { 
      id: 1, 
      name: 'Om', 
      symbol: '🕉️', 
      color: 'bg-gradient-to-br from-amber-300 to-orange-500'
    },
    { 
      id: 2, 
      name: 'Lord Ganesha', 
      symbol: '🐘', 
      color: 'bg-gradient-to-br from-orange-400 to-red-500'
    },

    { 
      id: 3, 
      name: 'Lord Krishna', 
      symbol: '🪶', 
      color: 'bg-gradient-to-br from-blue-500 to-purple-600'
    },
    { 
      id: 4, 
      name: 'Lord Shiva', 
      symbol: '🔱', 
      color: 'bg-gradient-to-br from-gray-600 to-indigo-800'
    },
    { 
      id: 5, 
      name: 'Goddess Lakshmi', 
      symbol: '🪷', 
      color: 'bg-gradient-to-br from-pink-400 to-red-500'
    },
    { 
      id: 6, 
      name: 'Lord Hanuman', 
      symbol: '⚡', 
      color: 'bg-gradient-to-br from-yellow-400 to-orange-600'
    },
    { 
      id: 7, 
      name: 'Goddess Saraswati', 
      symbol: '🎵', 
      color: 'bg-gradient-to-br from-blue-200 to-blue-500'
    },
    { 
      id: 8, 
      name: 'Lord Vishnu', 
      symbol: '🌀', 
      color: 'bg-gradient-to-br from-teal-400 to-blue-600'
    },
    { 
      id: 9, 
      name: 'Goddess Durga', 
      symbol: '⚔️', 
      color: 'bg-gradient-to-br from-red-500 to-yellow-500'
    },
    { 
      id: 10, 
      name: 'Lord Brahma', 
      symbol: '📿', 
      color: 'bg-gradient-to-br from-amber-400 to-orange-500'
    }
  ];

  return (
    <div className="w-full py-8">
      <div className="container mx-auto px-4">
        {/* Spiritual Header */}
        <div className="text-center mb-4">
          <div className="flex items-center justify-center space-x-6">
            {/* Left Swastika */}
            <div className="text-3xl text-orange-600 animate-pulse">
              ॐ
            </div>
            
            {/* Main Header */}
            <div>
              <h2 className="text-4xl font-bold bg-gradient-to-r from-orange-600 via-red-600 to-yellow-600 bg-clip-text text-transparent mb-2 drop-shadow-lg" 
                  style={{fontFamily: 'Georgia, serif'}}>
                Divine Deities
              </h2>
              
            </div>
            
            {/* Right Swastika */}
            <div className="text-3xl text-orange-600 animate-pulse">
              ॐ
            </div>
          </div>
          
          {/* Decorative Line */}
          <div className="flex items-center justify-center mt-4">
            <div className="h-px bg-gradient-to-r from-transparent via-orange-400 to-transparent w-32"></div>
            <div className="mx-4 text-orange-500">🕉️</div>
            <div className="h-px bg-gradient-to-r from-transparent via-orange-400 to-transparent w-32"></div>
          </div>
        </div>
        
        {/* Horizontal Scrollable Cards */}
        <div className="overflow-x-auto pb-4 pt-4">
          <div className="flex space-x-6 min-w-max px-4">
            {godCards.map((card) => (
              <div
                key={card.id}
                className="flex-shrink-0 group cursor-pointer py-4"
              >
                {/* Circular Card with Hover Effects */}
                <div className={`w-24 h-24 rounded-full ${card.color} shadow-lg group-hover:shadow-2xl transform group-hover:scale-110 group-hover:-translate-y-2 transition-all duration-500 ease-out flex items-center justify-center relative overflow-hidden`}>
                  {/* Overlay for depth */}
                  <div className="absolute inset-0 bg-white bg-opacity-0 group-hover:bg-opacity-10 transition-all duration-500 rounded-full"></div>
                  
                  {/* Symbol */}
                  <div className="text-3xl group-hover:scale-125 transition-transform duration-500 ease-out relative z-10">
                    {card.symbol}
                  </div>
                </div>
                
                {/* Card Title */}
                <div className="text-center mt-3">
                  <h3 className="text-sm font-semibold text-gray-700 group-hover:text-gray-900 group-hover:scale-105 transition-all duration-500 ease-out">
                    {card.name}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        
      </div>
    </div>
  );
};

export default CircularCardsItems;