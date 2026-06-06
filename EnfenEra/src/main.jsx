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
  Connect,
  About,
  ProfilePage,

  MainAuth_Page
} from './Components/Page/index';


import Root from './Layout/Root';
import Dashboard from './Layout/Dashboard';

import RootPage from './pages/HOME/RootPage'
import Profile from './pages/PROFILE/Profile'
import Trequest from './Components/Page/Admin/Trequest'
import ProtectedRoutes from './routes/ProtectedRoutes';
import { element } from 'three/src/nodes/tsl/TSLCore.js';



//fonts 


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
       
      },
      {
        path : "/studio/t_profile",
        element : <Tournament_Profile_Page />
      },
      {
        path : "up_profile",
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
      },
      {
        path : '/about',
        element : <About />
      }

    ]
  },

  {
    element: <Dashboard />,
    children : [
      {
        path : "/Profile",
        element : <ProfilePage />
      },
      {
        path : "/userAuth",
        element : <MainAuth_Page />
      },
      {
         path : "/studio/sendrequest",
        element : <Trequest />
      }

    ],
  },

  {
    element : <ProtectedRoutes />,
    children : [
      {
        element : <Dashboard />,
        children : [ {
          // ---Login /login, /Dashboard
          
        }]
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
