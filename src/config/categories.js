// src/config/categories.js

export const CATEGORIES_CONFIG = {
  "aarti-sangrah": {
    key: 'aarti-sangrah',
    displayName: 'Aarti',
    title: 'Aarti Sangrah',
    hindiName: 'आरती',
    subtitle: 'आरती संग्रह',
    icon: '🪔',
    color: 'from-orange-400 to-red-500',
    iconColor: 'text-yellow-300',
    apiEndpoint: 'aarti.json',
    headerImages: [
      {
        url: 'https://images.unsplash.com/photo-1582555172866-f73bb12a2ab3?w=1200&q=80',
        deity: 'Divine Aarti',
        mantra: 'ॐ ज्योति स्वरूपाय नमः'
      },
      {
        url: 'https://images.unsplash.com/photo-1604948501466-4e9c339b9c24?w=1200&q=80',
        deity: 'Sacred Flames',
        mantra: 'ॐ दीपज्योतिः परब्रह्म'
      }
    ]
  },

  "chalisa-sangrah": {
    key: 'chalisa-sangrah',
    displayName: 'Chalisa',
    title: 'Chalisa Sangrah',
    hindiName: 'चालीसा',
    subtitle: 'चालीसा संग्रह',
    icon: '📿',
    color: 'from-red-400 to-pink-500',
    iconColor: 'text-red-200',
    apiEndpoint: 'chalisa.json',
    headerImages: [
      {
        url: 'https://images.unsplash.com/photo-1528402514002-0c9dc4c09939?w=1200&q=80',
        deity: 'Divine Chalisa',
        mantra: 'ॐ नमो भगवते वासुदेवाय'
      },
      {
        url: 'https://images.unsplash.com/photo-1609619385002-f40de264d5b6?w=1200&q=80',
        deity: 'Sacred Prayers',
        mantra: 'ॐ श्री गणेशाय नमः'
      }
    ]
  },

  "bhajan": {
    key: 'bhajan',
    displayName: 'Bhajan',
    title: 'Bhajan',
    hindiName: 'भजन',
    subtitle: 'भजन',
    icon: '🎵',
    color: 'from-pink-400 to-red-500',
    iconColor: 'text-pink-200',
    apiEndpoint: 'bhajan.json',
    headerImages: [
      {
        url: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=1200&q=80',
        deity: 'Divine Music',
        mantra: 'संगीतं सर्वदेवानां'
      },
      {
        url: 'https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=1200&q=80',
        deity: 'Sacred Songs',
        mantra: 'भजन कीर्तन सुखदायक'
      }
    ]
  },

  "mantra": {
    key: 'mantra',
    displayName: 'Mantra',
    title: 'Mantra',
    hindiName: 'मंत्र',
    subtitle: 'मंत्र',
    icon: '🕉️',
    color: 'from-purple-500 to-indigo-600',
    iconColor: 'text-purple-200',
    apiEndpoint: 'mantra.json',
    headerImages: [
      {
        url: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=1200&q=80',
        deity: 'Sacred Mantras',
        mantra: 'ॐ नमः शिवाय'
      },
      {
        url: 'https://images.unsplash.com/photo-1545389336-cf090694435e?w=1200&q=80',
        deity: 'Divine Chants',
        mantra: 'ॐ गं गणपतये नमः'
      }
    ]
  },

  "stotram": {
    key: 'stotram',
    displayName: 'Stotram',
    title: 'Stotram',
    hindiName: 'स्तोत्रम्',
    subtitle: 'स्तोत्रम्',
    icon: '📖',
    color: 'from-blue-500 to-teal-500',
    iconColor: 'text-blue-200',
    apiEndpoint: 'strot.json', // ✅ API endpoint
    headerImages: [
      {
        url: 'https://images.unsplash.com/photo-1532012197267-da84d127e765?w=1200&q=80',
        deity: 'Sacred Hymns',
        mantra: 'श्लोकं पठति यः'
      },
      {
        url: 'https://images.unsplash.com/photo-1519682337058-a94d519337bc?w=1200&q=80',
        deity: 'Divine Verses',
        mantra: 'स्तोत्रं देवानां'
      }
    ]
  }
};

// Helper to get all categories as array (for SquareCards)
export const getAllCategories = () => {
  return Object.values(CATEGORIES_CONFIG);
};

// Helper to get single category (for SquareCardsContent)
export const getCategoryByKey = (key) => {
  return CATEGORIES_CONFIG[key] || CATEGORIES_CONFIG["aarti-sangrah"];
};

// Helper to get API endpoint
export const getApiEndpoint = (categoryKey) => {
  return CATEGORIES_CONFIG[categoryKey]?.apiEndpoint || 'aarti.json';
};