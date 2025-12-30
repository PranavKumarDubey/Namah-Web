import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { deityData } from '../../data/deityData';
import DeityHeader from './DeityHeader';
import PrayersSection from './PrayersSection';

const CircularCardContent = () => {
  const { deityName } = useParams();
  const [favorites, setFavorites] = useState({});

  const currentDeity = deityData[deityName] || deityData.shiva;

  const toggleFavorite = (id) => {
    setFavorites(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-orange-50 to-amber-50">
      {/* Main Container */}
      <div className="w-full max-w-7xl mx-auto pb-6 sm:pb-8 lg:pb-10">
        {/* Deity Header Section */}
        <DeityHeader deity={currentDeity} />
        
        {/* Prayers Section */}
        <PrayersSection 
          prayers={currentDeity.prayers} 
          favorites={favorites}
          onToggleFavorite={toggleFavorite}
        />
      </div>
    </div>
  );
};

export default CircularCardContent;