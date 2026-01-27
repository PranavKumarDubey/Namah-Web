import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import DeityHeader from './DeityHeader';
import PrayersSection from './PrayersSection';

const CircularCardContent = () => {
  const { deityName } = useParams();
  const [favorites, setFavorites] = useState({});
  const [allPrayers, setAllPrayers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  const API_BASE_URL = 'https://namah-api.pages.dev/api';
  const IMAGE_BASE_URL = 'https://namah-api.pages.dev/img';

  // All your API endpoints
  const API_ENDPOINTS = [
    { name: 'aarti', url: '/aarti.json' },
    { name: 'chalisa', url: '/chalisa.json' },
    { name: 'bhajan', url: '/bhajan.json' },
    { name: 'mantra', url: '/mantra.json' },
    { name: 'strot', url: '/strot.json' },
    { name: 'kawach', url: '/kawach.json' }
  ];

  // Deity image
  const deityImage = `${IMAGE_BASE_URL}/1/${getDeityImageName(deityName)}.webp`;

  useEffect(() => {
    fetchAllEndpoints();
  }, [deityName]);

  const fetchAllEndpoints = async () => {
    try {
      setLoading(true);
      setError(null);

      console.log('🔍 Fetching from all endpoints for:', deityName);

      // Fetch from all endpoints in parallel
      const promises = API_ENDPOINTS.map(endpoint =>
        fetch(`${API_BASE_URL}${endpoint.url}`)
          .then(res => {
            if (!res.ok) throw new Error(`${endpoint.name} failed`);
            return res.json();
          })
          .then(data => ({ endpoint: endpoint.name, data }))
          .catch(err => {
            console.warn(`⚠️ ${endpoint.name} failed:`, err);
            return { endpoint: endpoint.name, data: [] };
          })
      );

      const results = await Promise.all(promises);
      console.log('✅ Fetched from all endpoints:', results);

      // Filter and combine all prayers
      const deityVariants = getDeityVariants(deityName);
      const combinedPrayers = [];

      results.forEach(({ endpoint, data }) => {
        if (Array.isArray(data)) {
          const filtered = data.filter(prayer => {
            if (prayer.tags) {
              const tags = prayer.tags.toLowerCase();
              return deityVariants.some(variant => 
                tags.includes(variant.toLowerCase())
              );
            }
            return false;
          });

          // ✅ FIXED: Create unique composite ID to prevent duplicate keys
          filtered.forEach(prayer => {
            combinedPrayers.push({
              ...prayer,
              source: endpoint, // Track which endpoint it came from
              id: String(prayer.id), // Keep original ID for favorites
              uniqueKey: `${endpoint}-${prayer.id}` // ✅ NEW: Composite key for React
            });
          });
        }
      });

      console.log('✅ Total filtered prayers:', combinedPrayers.length);
      setAllPrayers(combinedPrayers);
      
    } catch (err) {
      console.error('❌ Error:', err);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const toggleFavorite = (id) => {
    setFavorites(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  if (loading) {
    return (
      <div className="min-h-screen w-full bg-gradient-to-b from-orange-50 to-amber-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-b-4 border-orange-500 mx-auto mb-4"></div>
          <p className="text-gray-600 text-lg">Loading prayers...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen w-full bg-gradient-to-b from-orange-50 to-amber-50 flex items-center justify-center">
        <div className="text-center px-4 max-w-2xl">
          <div className="bg-red-50 border border-red-200 rounded-lg p-6 mb-4">
            <h2 className="text-xl font-bold text-red-800 mb-2">Failed to Load</h2>
            <p className="text-red-600">{error}</p>
          </div>
          
          <button 
            onClick={fetchAllEndpoints}
            className="px-6 py-3 bg-orange-500 text-white rounded-full hover:bg-orange-600 transition"
          >
            Retry
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-orange-50 to-amber-50">
      <div className="w-full max-w-7xl mx-auto pb-6 sm:pb-8 lg:pb-10">
        <DeityHeader 
          deity={{ 
            name: formatDeityName(deityName),
            description: `${allPrayers.length} Prayers and Aartis for ${formatDeityName(deityName)}`
          }} 
          deityImage={deityImage} 
        />
        
        <PrayersSection 
          prayers={allPrayers}
          favorites={favorites}
          onToggleFavorite={toggleFavorite}
          deityImage={deityImage}
          deityName={formatDeityName(deityName)}
        />
      </div>
    </div>
  );
};

// Get all possible name variants for a deity
function getDeityVariants(deityName) {
  const variantsMap = {
    'ganesha': ['ganesha', 'ganesh', 'ganapati'],
    'ganesh': ['ganesha', 'ganesh', 'ganapati'],
    'shiva': ['shiva', 'shiv'],
    'shiv': ['shiva', 'shiv'],
    'krishna': ['krishna', 'balkrishna'],
    'hanuman': ['hanuman'],
    'lakshmi': ['lakshmi', 'laxmi'],
    'saraswati': ['saraswati'],
    'vishnu': ['vishnu'],
    'durga': ['durga', 'ambe', 'parvati'],
    'brahma': ['brahma', 'brihaspati'],
    'om': ['om', 'budhwar'],
    'shani': ['shani'],
    'radha': ['radha'],
    'surya': ['surya']
  };
  
  return variantsMap[deityName?.toLowerCase()] || [deityName];
}

function getDeityImageName(deityName) {
  const imageNameMap = {
    'om': 'om',
    'ganesha': 'ganesh',
    'ganesh': 'ganesh',
    'krishna': 'krishna',
    'shiva': 'shiv',
    'shiv': 'shiv',
    'lakshmi': 'laxmi',
    'hanuman': 'hanuman',
    'saraswati': 'saraswati',
    'vishnu': 'vishnu',
    'durga': 'durga',
    'brahma': 'brahma',
    'shani': 'shani',
    'radha': 'radha',
  };
  
  return imageNameMap[deityName?.toLowerCase()] || 'om';
}

function formatDeityName(deityName) {
  const nameMap = {
    'ganesha': 'Lord Ganesha',
    'ganesh': 'Lord Ganesha',
    'shiva': 'Lord Shiva',
    'shiv': 'Lord Shiva',
    'krishna': 'Lord Krishna',
    'hanuman': 'Lord Hanuman',
    'lakshmi': 'Goddess Lakshmi',
    'saraswati': 'Goddess Saraswati',
    'vishnu': 'Lord Vishnu',
    'durga': 'Goddess Durga',
    'brahma': 'Lord Brahma',
    'om': 'Om',
    'shani': 'Lord Shani',
    'radha': 'Goddess Radha',
  };
  
  return nameMap[deityName?.toLowerCase()] || deityName;
}

export default CircularCardContent;