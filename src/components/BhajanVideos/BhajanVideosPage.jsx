import React, { useState } from 'react';
import { Play, Heart, Eye, Clock, ChevronLeft, ChevronRight, Sparkles, Flame } from 'lucide-react';

const BhajanVideosPage = () => {
  const [likedVideos, setLikedVideos] = useState(new Set());

  const toggleLike = (videoId) => {
    setLikedVideos(prev => {
      const newSet = new Set(prev);
      if (newSet.has(videoId)) {
        newSet.delete(videoId);
      } else {
        newSet.add(videoId);
      }
      return newSet;
    });
  };

  const scrollSection = (sectionId, direction) => {
    const container = document.getElementById(sectionId);
    if (container) {
      container.scrollBy({
        left: direction === 'left' ? -400 : 400,
        behavior: 'smooth'
      });
    }
  };

  // Video data structure
  const videoSections = [
    {
      id: 'trending',
      title: 'Trending Bhajans',
      subtitle: 'ट्रेंडिंग भजन',
      icon: '🔥',
      color: 'from-orange-500 to-red-600',
      videos: [
        {
          id: 't1',
          title: 'Shiv Tandav Stotram',
          artist: 'Ravindra Jain',
          thumbnail: 'https://images.unsplash.com/photo-1532693322450-2cb5c511067d?w=600&q=80',
          duration: '8:45',
          views: '12M',
          deity: 'Shiva'
        },
        {
          id: 't2',
          title: 'Achyutam Keshavam',
          artist: 'Anuradha Paudwal',
          thumbnail: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80',
          duration: '6:30',
          views: '18M',
          deity: 'Krishna'
        },
        {
          id: 't3',
          title: 'Hanuman Chalisa',
          artist: 'Hariharan',
          thumbnail: 'https://images.unsplash.com/photo-1604076947774-b5bc486a6c10?w=600&q=80',
          duration: '10:15',
          views: '25M',
          deity: 'Hanuman'
        },
        {
          id: 't4',
          title: 'Sai Baba Aarti',
          artist: 'Suresh Wadkar',
          thumbnail: 'https://images.unsplash.com/photo-1609619385002-f40de264d5b6?w=600&q=80',
          duration: '5:20',
          views: '15M',
          deity: 'Sai Baba'
        },
        {
          id: 't5',
          title: 'Jai Ambe Gauri',
          artist: 'Kavita Krishnamurthy',
          thumbnail: 'https://images.unsplash.com/photo-1582555172866-f73bb12a2ab3?w=600&q=80',
          duration: '7:40',
          views: '20M',
          deity: 'Durga'
        }
      ]
    },
    {
      id: 'ram',
      title: 'Bhagwan Ram Bhajans',
      subtitle: 'भगवान राम भजन',
      icon: '🏹',
      color: 'from-green-500 to-emerald-600',
      videos: [
        {
          id: 'r1',
          title: 'Ram Aayenge',
          artist: 'Jubin Nautiyal',
          thumbnail: 'https://images.unsplash.com/photo-1580193483785-4c7d3e6e4e9f?w=600&q=80',
          duration: '4:55',
          views: '8M',
          deity: 'Ram'
        },
        {
          id: 'r2',
          title: 'Shri Ram Janki',
          artist: 'Anup Jalota',
          thumbnail: 'https://images.unsplash.com/photo-1528402514002-0c9dc4c09939?w=600&q=80',
          duration: '6:20',
          views: '5M',
          deity: 'Ram'
        },
        {
          id: 'r3',
          title: 'Ram Bhajan Karna',
          artist: 'Lakhbir Singh Lakkha',
          thumbnail: 'https://images.unsplash.com/photo-1545389336-cf090694435e?w=600&q=80',
          duration: '5:45',
          views: '6M',
          deity: 'Ram'
        },
        {
          id: 'r4',
          title: 'Raghupati Raghav Raja Ram',
          artist: 'Traditional',
          thumbnail: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=600&q=80',
          duration: '8:10',
          views: '10M',
          deity: 'Ram'
        },
        {
          id: 'r5',
          title: 'Sri Ram Jai Ram',
          artist: 'Suresh Wadkar',
          thumbnail: 'https://images.unsplash.com/photo-1519682337058-a94d519337bc?w=600&q=80',
          duration: '7:30',
          views: '9M',
          deity: 'Ram'
        }
      ]
    },
    {
      id: 'krishna',
      title: 'Bhagwan Krishna Bhajans',
      subtitle: 'भगवान कृष्ण भजन',
      icon: '🪶',
      color: 'from-blue-500 to-purple-600',
      videos: [
        {
          id: 'k1',
          title: 'Radha Krishna Teri Jyot',
          artist: 'Jagjit Singh',
          thumbnail: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80',
          duration: '6:15',
          views: '14M',
          deity: 'Krishna'
        },
        {
          id: 'k2',
          title: 'Govind Bolo Gopal Bolo',
          artist: 'Anuradha Paudwal',
          thumbnail: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=600&q=80',
          duration: '5:40',
          views: '11M',
          deity: 'Krishna'
        },
        {
          id: 'k3',
          title: 'Hare Krishna Hare Rama',
          artist: 'Anup Jalota',
          thumbnail: 'https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=600&q=80',
          duration: '9:20',
          views: '22M',
          deity: 'Krishna'
        },
        {
          id: 'k4',
          title: 'Krishna Govinda Gopala',
          artist: 'Lata Mangeshkar',
          thumbnail: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=600&q=80',
          duration: '7:05',
          views: '16M',
          deity: 'Krishna'
        },
        {
          id: 'k5',
          title: 'Kanha Tere Bin',
          artist: 'Shreya Ghoshal',
          thumbnail: 'https://images.unsplash.com/photo-1506157786151-b8491531f063?w=600&q=80',
          duration: '5:30',
          views: '8M',
          deity: 'Krishna'
        }
      ]
    },
    {
      id: 'shiva',
      title: 'Shiva Ji Bhajans',
      subtitle: 'शिव जी भजन',
      icon: '🔱',
      color: 'from-indigo-600 to-purple-700',
      videos: [
        {
          id: 's1',
          title: 'Om Namah Shivaya',
          artist: 'Kailash Kher',
          thumbnail: 'https://images.unsplash.com/photo-1532693322450-2cb5c511067d?w=600&q=80',
          duration: '8:55',
          views: '30M',
          deity: 'Shiva'
        },
        {
          id: 's2',
          title: 'Bhole Baba Mera',
          artist: 'Hansraj Raghuwanshi',
          thumbnail: 'https://images.unsplash.com/photo-1604076947774-b5bc486a6c10?w=600&q=80',
          duration: '6:45',
          views: '19M',
          deity: 'Shiva'
        },
        {
          id: 's3',
          title: 'Shiv Shambhu',
          artist: 'Suresh Wadkar',
          thumbnail: 'https://images.unsplash.com/photo-1532121171318-95593e00148e?w=600&q=80',
          duration: '7:20',
          views: '12M',
          deity: 'Shiva'
        },
        {
          id: 's4',
          title: 'Damaru Wale Baba',
          artist: 'Gulshan Kumar',
          thumbnail: 'https://images.unsplash.com/photo-1609619385002-f40de264d5b6?w=600&q=80',
          duration: '5:50',
          views: '15M',
          deity: 'Shiva'
        },
        {
          id: 's5',
          title: 'Shiv Tandav',
          artist: 'Shankar Mahadevan',
          thumbnail: 'https://images.unsplash.com/photo-1545389336-cf090694435e?w=600&q=80',
          duration: '9:30',
          views: '25M',
          deity: 'Shiva'
        }
      ]
    },
    {
      id: 'hanuman',
      title: 'Hanuman Ji Bhajans',
      subtitle: 'हनुमान जी भजन',
      icon: '⚡',
      color: 'from-orange-600 to-red-700',
      videos: [
        {
          id: 'h1',
          title: 'Bajrang Baan',
          artist: 'Hariharan',
          thumbnail: 'https://images.unsplash.com/photo-1604076947774-b5bc486a6c10?w=600&q=80',
          duration: '11:30',
          views: '28M',
          deity: 'Hanuman'
        },
        {
          id: 'h2',
          title: 'Sankat Mochan Naam',
          artist: 'Gulshan Kumar',
          thumbnail: 'https://images.unsplash.com/photo-1580193483785-4c7d3e6e4e9f?w=600&q=80',
          duration: '6:40',
          views: '17M',
          deity: 'Hanuman'
        },
        {
          id: 'h3',
          title: 'Jai Hanuman Gyan Gun',
          artist: 'MS Rama Rao',
          thumbnail: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=600&q=80',
          duration: '7:55',
          views: '14M',
          deity: 'Hanuman'
        },
        {
          id: 'h4',
          title: 'Pawansut Hanuman',
          artist: 'Lakhbir Singh',
          thumbnail: 'https://images.unsplash.com/photo-1519682337058-a94d519337bc?w=600&q=80',
          duration: '5:25',
          views: '11M',
          deity: 'Hanuman'
        },
        {
          id: 'h5',
          title: 'Shree Hanuman Chalisa',
          artist: 'Hariharan',
          thumbnail: 'https://images.unsplash.com/photo-1532121171318-95593e00148e?w=600&q=80',
          duration: '10:00',
          views: '35M',
          deity: 'Hanuman'
        }
      ]
    },
    {
      id: 'ganesh',
      title: 'Ganesh Ji Bhajans',
      subtitle: 'गणेश जी भजन',
      icon: '🐘',
      color: 'from-yellow-500 to-orange-600',
      videos: [
        {
          id: 'g1',
          title: 'Ganpati Bappa Morya',
          artist: 'Shankar Mahadevan',
          thumbnail: 'https://images.unsplash.com/photo-1582555172866-f73bb12a2ab3?w=600&q=80',
          duration: '4:45',
          views: '20M',
          deity: 'Ganesh'
        },
        {
          id: 'g2',
          title: 'Sukh Karta Dukh Harta',
          artist: 'Lata Mangeshkar',
          thumbnail: 'https://images.unsplash.com/photo-1604948501466-4e9c339b9c24?w=600&q=80',
          duration: '5:30',
          views: '15M',
          deity: 'Ganesh'
        },
        {
          id: 'g3',
          title: 'Deva Shree Ganesha',
          artist: 'Ajay-Atul',
          thumbnail: 'https://images.unsplash.com/photo-1528402514002-0c9dc4c09939?w=600&q=80',
          duration: '6:20',
          views: '25M',
          deity: 'Ganesh'
        },
        {
          id: 'g4',
          title: 'Jai Ganesh Jai Ganesh',
          artist: 'Kavita Krishnamurthy',
          thumbnail: 'https://images.unsplash.com/photo-1545389336-cf090694435e?w=600&q=80',
          duration: '4:15',
          views: '12M',
          deity: 'Ganesh'
        },
        {
          id: 'g5',
          title: 'Gajanana Shri Ganesh',
          artist: 'Anup Jalota',
          thumbnail: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=600&q=80',
          duration: '7:00',
          views: '18M',
          deity: 'Ganesh'
        }
      ]
    },
    {
      id: 'durga',
      title: 'Maa Durga Bhajans',
      subtitle: 'माँ दुर्गा भजन',
      icon: '⚔️',
      color: 'from-red-600 to-pink-700',
      videos: [
        {
          id: 'd1',
          title: 'Jai Ambe Gauri',
          artist: 'Anuradha Paudwal',
          thumbnail: 'https://images.unsplash.com/photo-1582555172866-f73bb12a2ab3?w=600&q=80',
          duration: '7:30',
          views: '22M',
          deity: 'Durga'
        },
        {
          id: 'd2',
          title: 'Durge Durge Durge',
          artist: 'Kavita Krishnamurthy',
          thumbnail: 'https://images.unsplash.com/photo-1609619385002-f40de264d5b6?w=600&q=80',
          duration: '6:15',
          views: '16M',
          deity: 'Durga'
        },
        {
          id: 'd3',
          title: 'Maiya Yashoda',
          artist: 'Lata Mangeshkar',
          thumbnail: 'https://images.unsplash.com/photo-1604948501466-4e9c339b9c24?w=600&q=80',
          duration: '5:40',
          views: '14M',
          deity: 'Durga'
        },
        {
          id: 'd4',
          title: 'Ambe Tu Hai Jagdambe',
          artist: 'Narendra Chanchal',
          thumbnail: 'https://images.unsplash.com/photo-1532693322450-2cb5c511067d?w=600&q=80',
          duration: '8:20',
          views: '19M',
          deity: 'Durga'
        },
        {
          id: 'd5',
          title: 'Jai Mata Di',
          artist: 'Suresh Wadkar',
          thumbnail: 'https://images.unsplash.com/photo-1532121171318-95593e00148e?w=600&q=80',
          duration: '6:50',
          views: '21M',
          deity: 'Durga'
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 via-amber-50 to-yellow-50 p-6">
      {/* Header Section */}
      <div className="relative bg-gradient-to-r from-orange-600 via-red-600 to-yellow-600 text-white py-12 px-6 overflow-hidden rounded-3xl border-4 border-orange-400 shadow-2xl mb-8">
        {/* Decorative Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10">
            <Sparkles className="w-12 h-12" />
          </div>
          <div className="absolute top-20 right-20">
            <Flame className="w-10 h-10" />
          </div>
          <div className="absolute bottom-10 left-1/4">
            <Sparkles className="w-14 h-14" />
          </div>
          <div className="absolute bottom-20 right-1/3">
            <Flame className="w-12 h-12" />
          </div>
        </div>

        <div className="relative z-10 max-w-6xl mx-auto text-center">
          <div className="flex items-center justify-center mb-4">
            <Play className="w-12 h-12 mr-4 animate-pulse" />
            <h1 className="text-5xl font-bold drop-shadow-2xl">Bhajan Videos</h1>
            <Sparkles className="w-12 h-12 ml-4 animate-pulse" />
          </div>
          <p className="text-2xl text-yellow-100 font-semibold mb-2">भजन वीडियो संग्रह</p>
          <p className="text-lg text-white/90 max-w-2xl mx-auto">
            Watch divine bhajans, devotional songs and spiritual videos
          </p>
          
          {/* Decorative Line */}
          <div className="flex items-center justify-center mt-4">
            <div className="h-1 bg-white/30 w-24 rounded"></div>
            <Sparkles className="mx-4 w-6 h-6" />
            <div className="h-1 bg-white/30 w-24 rounded"></div>
          </div>
        </div>
      </div>

      {/* Video Sections */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        {videoSections.map((section) => (
          <div key={section.id} className="mb-16">
            {/* Section Header */}
            <div className="flex items-center justify-between mb-6">
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-4xl">{section.icon}</span>
                  <h2 className={`text-3xl font-bold bg-gradient-to-r ${section.color} bg-clip-text text-transparent`}>
                    {section.title}
                  </h2>
                </div>
                <p className="text-xl text-orange-600 font-semibold ml-14">
                  {section.subtitle}
                </p>
              </div>
              
              {/* Navigation Buttons */}
              <div className="flex gap-2">
                <button
                  onClick={() => scrollSection(section.id, 'left')}
                  className="bg-white hover:bg-orange-50 rounded-full p-3 shadow-lg transition-all hover:scale-110"
                >
                  <ChevronLeft className="w-6 h-6 text-orange-600" />
                </button>
                <button
                  onClick={() => scrollSection(section.id, 'right')}
                  className="bg-white hover:bg-orange-50 rounded-full p-3 shadow-lg transition-all hover:scale-110"
                >
                  <ChevronRight className="w-6 h-6 text-orange-600" />
                </button>
              </div>
            </div>

            {/* Video Cards Container */}
            <div
              id={section.id}
              className="flex overflow-x-auto gap-6 pb-4 scrollbar-hide scroll-smooth"
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
              {section.videos.map((video) => (
                <div
                  key={video.id}
                  className="group flex-shrink-0 cursor-pointer"
                  style={{ width: '320px' }}
                >
                  {/* Video Card */}
                  <div className="relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden">
                    {/* Thumbnail */}
                    <div className="relative aspect-video overflow-hidden">
                      <img
                        src={video.thumbnail}
                        alt={video.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      
                      {/* Overlay on Hover */}
                      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <div className="bg-white/90 rounded-full p-4 transform scale-0 group-hover:scale-100 transition-transform duration-300">
                          <Play className="w-8 h-8 text-orange-600 fill-orange-600" />
                        </div>
                      </div>

                      {/* Duration Badge */}
                      <div className="absolute bottom-2 right-2 bg-black/80 text-white px-2 py-1 rounded text-sm font-semibold flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {video.duration}
                      </div>
                    </div>

                    {/* Video Info */}
                    <div className="p-4">
                      <h3 className="font-bold text-lg text-gray-800 mb-1 line-clamp-2 group-hover:text-orange-600 transition-colors">
                        {video.title}
                      </h3>
                      <p className="text-sm text-gray-600 mb-3">{video.artist}</p>

                      {/* Stats */}
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-1 text-gray-500 text-sm">
                          <Eye className="w-4 h-4" />
                          <span>{video.views} views</span>
                        </div>

                        {/* Like Button */}
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            toggleLike(video.id);
                          }}
                          className={`p-2 rounded-full transition-all ${
                            likedVideos.has(video.id)
                              ? 'bg-red-100 text-red-600'
                              : 'bg-gray-100 text-gray-600 hover:bg-red-50 hover:text-red-500'
                          }`}
                        >
                          <Heart
                            className={`w-5 h-5 ${
                              likedVideos.has(video.id) ? 'fill-current' : ''
                            }`}
                          />
                        </button>
                      </div>
                    </div>

                    {/* Deity Tag */}
                    <div className={`absolute top-2 left-2 bg-gradient-to-r ${section.color} text-white px-3 py-1 rounded-full text-xs font-semibold shadow-lg`}>
                      {video.deity}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Bottom Decoration */}
      <div className="text-center pb-12">
        <div className="flex items-center justify-center gap-4 mb-4">
          <div className="text-2xl">🙏</div>
          <p className="text-gray-600 italic">
            Experience divine bliss through devotional music
          </p>
          <div className="text-2xl">🙏</div>
        </div>
      </div>

      {/* Hide Scrollbar */}
      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </div>
  );
};

export default BhajanVideosPage;