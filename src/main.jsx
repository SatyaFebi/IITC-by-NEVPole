import { StrictMode } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { createRoot } from 'react-dom/client';
import './index.css';
import LandingPage from './pages/LandingPage';
import Marketplace from './pages/Marketplace/Marketplace';
import Confirmation from './pages/Marketplace/Confirmation';
import CashierStatus from './pages/Marketplace/OrderStatus';
import DashboardPenjual from './pages/Seller/DashboardPenjual';
import StatistikPenjualan from './pages/Seller/StatistikPenjualan';
import InvoicePenjualan from './pages/Seller/InvoicePenjualan';
import Pembayaran from './pages/Seller/Pembayaran';
import PengaturanPembayaran from './pages/Seller/PengaturanPembayaran';
import Saldo from './pages/Seller/Saldo';
import Monitoring from './pages/Seller/Monitoring';
import PengaturanAkun from './pages/Seller/PengaturanAkun';
import PengaturanToko from './pages/Seller/PengaturanToko';

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
  },
  {
    path: "/seller",
    element: <DashboardPenjual />
  },
  {
    path: "/stat",
    element: <StatistikPenjualan />
  },
  {
    path: "/invoice",
    element: <InvoicePenjualan />
  },
  {
    path: "/payment",
    element: <Pembayaran />
  },
  {
    path: "/paymentsettings",
    element: <PengaturanPembayaran />
  },
  {
    path: "/saldo",
    element: <Saldo />
  },
  {
    path: "/monitoring",
    element: <Monitoring />
  },
  {
    path: "/account",
    element: <PengaturanAkun />
  },
  {
    path: "/shopsettings",
    element: <PengaturanToko />
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
