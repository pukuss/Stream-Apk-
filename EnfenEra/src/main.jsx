import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { store } from './REDUX/store';
import {Provider} from 'react-redux'

import {
  Home,
  Studio,
  GameZone,
} from './Components/Page/index'
import Root from './Layout/Root'
import RootPage from './pages/HOME/RootPage'
import Profile from './pages/PROFILE/Profile'
import Trequest from './Components/Page/Admin/Trequest'
const router = createBrowserRouter([
  {
    path :"/",
    element : <Root />,
    
      children: [{
        path : "",
        element : <Home />
      },
      {
        path : "/studio",
        element : <Studio />
      },
      {
        path : "/studio/request",
        element : <Trequest />
      },
      {
        path : "/playzone",
        element : <GameZone />
      },
      {
        path : "?profile",
        element : <Profile />
      }

    ]
  }
])



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store = {store}>
    <RouterProvider router={router} />
    </Provider>
  </StrictMode>,
)
