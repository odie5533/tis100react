import React from 'react';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import LandingPage from './pages/LandingPage';
import DashboardPage from './pages/DashboardPage';
import SiteBuilderPage from './pages/SiteBuilderPage';
import NeighborhoodsPage from './pages/NeighborhoodsPage';
import WebRingsPage from './pages/WebRingsPage';
import UserProfilePage from './pages/UserProfilePage';
import SiteViewPage from './pages/SiteViewPage';
import ExplorePage from './pages/ExplorePage';

const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />,
  },
  {
    path: "/dashboard",
    element: <DashboardPage />,
  },
  {
    path: "/builder/:siteId",
    element: <SiteBuilderPage />,
  },
  {
    path: "/neighborhoods",
    element: <NeighborhoodsPage />,
  },
  {
    path: "/neighborhoods/:name",
    element: <NeighborhoodsPage />,
  },
  {
    path: "/rings",
    element: <WebRingsPage />,
  },
  {
    path: "/rings/:ringId",
    element: <WebRingsPage />,
  },
  {
    path: "/user/:username",
    element: <UserProfilePage />,
  },
  {
    path: "/sites/:siteId",
    element: <SiteViewPage />,
  },
  {
    path: "/explore",
    element: <ExplorePage />,
  },
]);

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
