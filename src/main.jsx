import { StrictMode } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { createRoot } from 'react-dom/client';
import './index.css';
import LandingPage from './pages/LandingPage';
import Marketplace from './pages/Marketplace/Marketplace';
import Confirmation from './pages/Marketplace/Confirmation';
import CashierStatus from './pages/Marketplace/OrderStatus';

const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />,
  },
  {
    path: "/marketplace",
    element: <Marketplace />,
  },
  {
    path: "/confirmation",
    element: <Confirmation />,
  },
  {
    path: "/order-status/:status", 
    element: <CashierStatus />,
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
