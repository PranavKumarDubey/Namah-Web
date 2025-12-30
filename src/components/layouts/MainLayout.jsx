import Sidebar from '../../components/Sidebar';

function MainLayout({ children }) {
  return (
    <div className="flex h-screen overflow-hidden bg-gradient-to-br from-orange-50 to-yellow-50">
      {/* Sidebar */}
      <div className="flex-shrink-0">
        <Sidebar />
      </div>

      {/* Main Content Area */}
      <div className="flex-1 overflow-auto">
        {children}
      </div>
    </div>
  );
}

export default MainLayout;
