import { StrictMode } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { createRoot } from 'react-dom/client'
import './index.css'
import LandingPage from './pages/LandingPage'

const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />,
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
