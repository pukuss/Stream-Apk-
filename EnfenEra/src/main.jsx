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
  Tournament_Profile_Page,
  Engine,
  Explore,
  Connect
} from './Components/Page/index';


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
        path : "/studio/t_profile",
        element : <Tournament_Profile_Page />
      },


      {
        path : "/playzone",
        element : <GameZone />
      },
      {
        path : "?profile",
        element : <Profile />
      },
      {
        path : '/explore',
        element : <Explore />
      },
      {
        path : '/engine',
        element : <Engine />
      },
      {
        path : '/connect',
        element : <Connect />
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
