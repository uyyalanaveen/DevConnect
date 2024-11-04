import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Home from '../src/Pages/Home/Home.jsx';
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import Layout from './Layout.jsx';
import About from './Pages/About/About.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Home />,  
      },
      {
        path: '/about',
        element: <About />,
      },
      {
        path: '/contact', 
        element: <div>Contact</div>
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
