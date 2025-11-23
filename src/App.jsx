import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Display from "./components/Display";
import Sidebar from "./components/Sidebar";
import CircularCardContent from './components/CircularCardsPage/CircularCardContent';
import SquareCardsContent from './components/SquareCardsPage/SquareCardsContent';
import BhajanVideosPage from './components/BhajanVideos/BhajanVideosPage';

function App() {
  return (
    <BrowserRouter>
      <div className="flex h-screen overflow-hidden bg-gradient-to-br from-orange-50 to-yellow-50">
        {/* Sidebar */}
        <div className="flex-shrink-0">
          <Sidebar />
        </div>

        {/* Main Content Area */}
        <div className="flex-1 overflow-auto">
          <Routes>
            {/* Home Page */}
            <Route path="/" element={<Display />} />
            
            {/* Deity Pages (Circular Cards) */}
            <Route path="/deity/:deityName" element={<CircularCardContent />} />
            
            {/* Category Pages (Square Cards - Aarti, Chalisa, Bhajan, Mantra, Stotram) */}
            <Route path="/category/:categoryName" element={<SquareCardsContent />} />
            
            {/* Bhajan Videos Page */}
            <Route path="/videos" element={<BhajanVideosPage />} />

            {/* Placeholder Routes for Favourites and Settings */}
            <Route 
              path="/favourites" 
              element={
                <div className="min-h-screen flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-6xl mb-4">❤️</div>
                    <h2 className="text-3xl font-bold text-orange-600 mb-2">Favourites</h2>
                    <p className="text-gray-600">Your favourite bhajans will appear here</p>
                  </div>
                </div>
              } 
            />
            
            <Route 
              path="/settings" 
              element={
                <div className="min-h-screen flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-6xl mb-4">⚙️</div>
                    <h2 className="text-3xl font-bold text-orange-600 mb-2">Settings</h2>
                    <p className="text-gray-600">Manage your preferences</p>
                  </div>
                </div>
              } 
            />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;