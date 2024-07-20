import React, { Children } from 'react'
import ReactDOM from 'react-dom/client'
import {createBrowserRouter, Router, RouterProvider} from 'react-router-dom'
import WeatherPage from './pages/WeatherPage'
import './index.css'
import Home from './Home';
import { VisibilityProvider } from './Context/visibilityContext'


const router = createBrowserRouter([{
  path: '/',
  element: <Home />,
  children: [
    {
      path: '/weather',
      element: <WeatherPage />
    },
    {
      path: '/cities',
      element: <WeatherPage />
    }
  ]
}
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <VisibilityProvider>
      <RouterProvider router={router} />
    </VisibilityProvider>
  </React.StrictMode>,
)
