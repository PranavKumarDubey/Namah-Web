import { BrowserRouter } from 'react-router-dom';
import MainLayout from './components/layouts/MainLayout';
import AppRoutes from './components/AppRoutes';

function App() {
  return (
    <BrowserRouter>
      <MainLayout>
        <AppRoutes />
      </MainLayout>
    </BrowserRouter>
  );
}

export default App;