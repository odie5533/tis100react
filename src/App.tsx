import { useState } from 'react';
import './App.css';
import Home from './pages/Home';
import Builder from './pages/Builder';
import Gallery from './pages/Gallery';
import WebRings from './pages/WebRings';
import Profile from './pages/Profile';
import Navigation from './components/Navigation';

type Page = 'home' | 'builder' | 'gallery' | 'webrings' | 'profile';

function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home');

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Home />;
      case 'builder':
        return <Builder />;
      case 'gallery':
        return <Gallery />;
      case 'webrings':
        return <WebRings />;
      case 'profile':
        return <Profile />;
      default:
        return <Home />;
    }
  };

  return (
    <div className="app">
      <Navigation currentPage={currentPage} onNavigate={setCurrentPage} />
      <main style={{ padding: '20px', maxWidth: '1200px', margin: '0 auto' }}>
        {renderPage()}
      </main>
    </div>
  );
}

export default App;
