import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AppProvider } from './context/AppContext';
import Layout from './components/layout/Layout';

// Pages
import LandingPage from './pages/LandingPage';
import Dashboard from './pages/Dashboard';
import SiteBuilder from './pages/SiteBuilder';
import Neighborhoods from './pages/Neighborhoods';
import NeighborhoodDetail from './pages/NeighborhoodDetail';
import WebRings from './pages/WebRings';
import WebRingDetail from './pages/WebRingDetail';
import UserProfile from './pages/UserProfile';
import SiteView from './pages/SiteView';
import Explore from './pages/Explore';

import './styles/App.css';

function App() {
  return (
    <AppProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<LandingPage />} />
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="builder/:siteId" element={<SiteBuilder />} />
            <Route path="builder" element={<SiteBuilder />} />
            <Route path="neighborhoods" element={<Neighborhoods />} />
            <Route path="neighborhoods/:name" element={<NeighborhoodDetail />} />
            <Route path="rings" element={<WebRings />} />
            <Route path="rings/:ringId" element={<WebRingDetail />} />
            <Route path="user/:username" element={<UserProfile />} />
            <Route path="sites/:siteId" element={<SiteView />} />
            <Route path="explore" element={<Explore />} />
          </Route>
        </Routes>
      </Router>
    </AppProvider>
  );
}

export default App;
