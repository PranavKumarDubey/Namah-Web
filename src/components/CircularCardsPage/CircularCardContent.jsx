import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Heart, ArrowLeft } from 'lucide-react';

const CircularCardContent = () => {
  const { deityName } = useParams();
  const navigate = useNavigate();
  const [favorites, setFavorites] = useState({});

  // Data for different deities
  const deityData = {
    shiva: {
      name: 'Lord Shiva',
      mantra: 'Om Namah Shivaya',
      image: 'https://www.iphonehanumanwallpaper.news/uploads/68af0fe416086.jpg',
      color: 'from-gray-600 to-indigo-800',
      prayers: [
        { id: 1, title: 'Shiv Ji Ki Aarti', icon: '🔱' },
        { id: 2, title: 'Mahakal Ki Aarti', icon: '🕉️' },
        { id: 3, title: 'Shiv Chalisa', icon: '📿' },
        { id: 4, title: 'Mahamrityunjaya Mantra', icon: '🙏' },
        { id: 5, title: 'Shiv Tandav Stotram', icon: '💫' },
        { id: 6, title: 'Rudra Ashtakam', icon: '🌺' },
      ]
    },
    ganesha: {
      name: 'Lord Ganesha',
      mantra: 'Om Gam Ganapataye Namaha',
      image: 'https://images.unsplash.com/photo-1599639957043-f3aa5c986398?w=800&q=80',
      color: 'from-orange-400 to-red-500',
      prayers: [
        { id: 1, title: 'Ganesh Aarti', icon: '🐘' },
        { id: 2, title: 'Ganesh Chalisa', icon: '📿' },
        { id: 3, title: 'Ganapati Atharvashirsha', icon: '🕉️' },
        { id: 4, title: 'Sukh Karta Dukh Harta', icon: '🙏' },
        { id: 5, title: 'Ganesh Mantra', icon: '💫' },
      ]
    },
    hanuman: {
      name: 'Lord Hanuman',
      mantra: 'Om Hanumate Namaha',
      image: 'https://images.unsplash.com/photo-1582555172866-f73bb12a2ab3?w=800&q=80',
      color: 'from-yellow-400 to-orange-600',
      prayers: [
        { id: 1, title: 'Hanuman Chalisa', icon: '⚡' },
        { id: 2, title: 'Hanuman Aarti', icon: '🙏' },
        { id: 3, title: 'Bajrang Baan', icon: '🔱' },
        { id: 4, title: 'Sunderkand', icon: '📿' },
        { id: 5, title: 'Hanuman Ashtak', icon: '💫' },
      ]
    },
    krishna: {
      name: 'Lord Krishna',
      mantra: 'Om Namo Bhagavate Vasudevaya',
      image: 'https://images.unsplash.com/photo-1604948501466-4e9c339b9c24?w=800&q=80',
      color: 'from-blue-500 to-purple-600',
      prayers: [
        { id: 1, title: 'Krishna Aarti', icon: '🪶' },
        { id: 2, title: 'Krishna Chalisa', icon: '📿' },
        { id: 3, title: 'Bhagavad Gita Shloka', icon: '📖' },
        { id: 4, title: 'Krishna Mantra', icon: '🕉️' },
        { id: 5, title: 'Achyutam Keshavam', icon: '💫' },
      ]
    },
    lakshmi: {
      name: 'Goddess Lakshmi',
      mantra: 'Om Shreem Mahalakshmiyei Namaha',
      image: 'https://images.unsplash.com/photo-1587562141277-6e5c2b12e0e9?w=800&q=80',
      color: 'from-pink-400 to-red-500',
      prayers: [
        { id: 1, title: 'Lakshmi Aarti', icon: '🪷' },
        { id: 2, title: 'Lakshmi Chalisa', icon: '📿' },
        { id: 3, title: 'Mahalakshmi Ashtakam', icon: '🙏' },
        { id: 4, title: 'Lakshmi Mantra', icon: '🕉️' },
      ]
    },
    om: {
      name: 'Om',
      mantra: 'Om Tat Sat',
      image: 'https://images.unsplash.com/photo-1604079628040-94301bb21b91?w=800&q=80',
      color: 'from-amber-300 to-orange-500',
      prayers: [
        { id: 1, title: 'Om Chanting', icon: '🕉️' },
        { id: 2, title: 'Gayatri Mantra', icon: '📿' },
        { id: 3, title: 'Om Meditation', icon: '🙏' },
        { id: 4, title: 'Pranava Mantra', icon: '💫' },
      ]
    },
    saraswati: {
      name: 'Goddess Saraswati',
      mantra: 'Om Aim Saraswatyai Namaha',
      image: 'https://images.unsplash.com/photo-1609220136736-443140cffec6?w=800&q=80',
      color: 'from-blue-200 to-blue-500',
      prayers: [
        { id: 1, title: 'Saraswati Aarti', icon: '🎵' },
        { id: 2, title: 'Saraswati Chalisa', icon: '📿' },
        { id: 3, title: 'Saraswati Vandana', icon: '🙏' },
        { id: 4, title: 'Saraswati Stotram', icon: '💫' },
      ]
    },
    vishnu: {
      name: 'Lord Vishnu',
      mantra: 'Om Namo Narayanaya',
      image: 'https://images.unsplash.com/photo-1626785774625-ddcddc3445e9?w=800&q=80',
      color: 'from-teal-400 to-blue-600',
      prayers: [
        { id: 1, title: 'Vishnu Aarti', icon: '🌀' },
        { id: 2, title: 'Vishnu Chalisa', icon: '📿' },
        { id: 3, title: 'Vishnu Sahasranamam', icon: '🕉️' },
        { id: 4, title: 'Vishnu Stotra', icon: '🙏' },
      ]
    },
    durga: {
      name: 'Goddess Durga',
      mantra: 'Om Dum Durgayei Namaha',
      image: 'https://images.unsplash.com/photo-1603048588665-791ca8aea617?w=800&q=80',
      color: 'from-red-500 to-yellow-500',
      prayers: [
        { id: 1, title: 'Durga Aarti', icon: '⚔️' },
        { id: 2, title: 'Durga Chalisa', icon: '📿' },
        { id: 3, title: 'Durga Saptashati', icon: '🕉️' },
        { id: 4, title: 'Durga Kavach', icon: '🙏' },
      ]
    },
    brahma: {
      name: 'Lord Brahma',
      mantra: 'Om Brahmane Namaha',
      image: 'https://images.unsplash.com/photo-1604948501466-4e9c339b9c24?w=800&q=80',
      color: 'from-amber-400 to-orange-500',
      prayers: [
        { id: 1, title: 'Brahma Aarti', icon: '📿' },
        { id: 2, title: 'Brahma Mantra', icon: '🕉️' },
        { id: 3, title: 'Brahma Stotram', icon: '🙏' },
        { id: 4, title: 'Brahma Kavacham', icon: '💫' },
      ]
    },
  };

  const currentDeity = deityData[deityName] || deityData.shiva;

  const toggleFavorite = (id) => {
    setFavorites(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 to-amber-50">
      {/* God Image Section */}
      <div className="px-4 pt-4">
        <div className={`relative w-full h-64 bg-gradient-to-br ${currentDeity.color} overflow-hidden rounded-3xl border-4 border-white shadow-2xl ring-4 ring-orange-200`}>
          {/* Back Button - Inside Header */}
          <button
            onClick={() => navigate(-1)}
            className="absolute top-4 left-4 z-10 bg-white/80 backdrop-blur-sm p-2 rounded-full shadow-md hover:bg-white transition-all"
          >
            <ArrowLeft className="w-6 h-6 text-gray-700" />
          </button>
          <img 
            src={currentDeity.image} 
            alt={currentDeity.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
          <div className="absolute bottom-0 left-0 right-0 p-6 text-center text-white">
            <h1 className="text-3xl font-bold tracking-wide drop-shadow-lg">{currentDeity.name}</h1>
            <p className="text-orange-100 mt-2 drop-shadow-md">{currentDeity.mantra}</p>
          </div>
        </div>
      </div>

      {/* Prayer Cards Section */}
      <div className="px-6 py-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Prayers & Aartis</h2>
        
        <div className="space-y-4">
          {currentDeity.prayers.map(prayer => (
            <div
              key={prayer.id}
              className="flex items-center bg-white rounded-full shadow-md hover:shadow-lg transition-shadow duration-300 p-4"
            > 
              {/* Circular Icon */}
              <div className="flex-shrink-0 w-16 h-16 rounded-full bg-gradient-to-br from-orange-400 to-amber-500 flex items-center justify-center text-3xl shadow-md">
                {prayer.icon}
              </div>
              {/* Title */}
              <div className="flex-1 ml-4">
                <h3 className="text-lg font-semibold text-gray-800">{prayer.title}</h3>
              </div>
              
              {/* Favorite Heart */}
              <button
                onClick={() => toggleFavorite(prayer.id)}
                className="flex-shrink-0 p-2 rounded-full hover:bg-orange-50 transition-colors duration-200"
                aria-label="Add to favorites"
              >
                <Heart
                  className={`w-6 h-6 transition-all duration-200 ${
                    favorites[prayer.id]
                      ? 'fill-red-500 text-red-500'
                      : 'text-gray-400'
                  }`}
                />
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CircularCardContent;
