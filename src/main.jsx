import React, { Children } from 'react'
import ReactDOM from 'react-dom/client'
import {createBrowserRouter, Router, RouterProvider} from 'react-router-dom'
import WeatherPage from './pages/WeatherPage'
import './index.css'
import Home from './Home';
import { VisibilityProvider } from './Context/visibilityContext'
import Cities from './pages/Cities'
import { SuggestionProvider } from './Context/suggestionContext'



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
      element: <Cities />
    },{
      index : true,
      element: <WeatherPage />
    }
  ]
}
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <VisibilityProvider>
      <SuggestionProvider>
        <RouterProvider router={router} />
      </SuggestionProvider>
    </VisibilityProvider>
  </React.StrictMode>,
)
