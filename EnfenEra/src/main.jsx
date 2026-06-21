import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { store } from './REDUX/store';
import { Provider } from 'react-redux'

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
  OtpPage,
  MainAuth_Page,
  GameProfilePage,
} from './Components/Page/index';


import Root from './Layout/Root';
import Dashboard from './Layout/Dashboard';

// import RootPage from './pages/HOME/RootPage'

import Profile from './pages/PROFILE/Profile'
import Trequest from './Components/Page/Admin/Trequest'
import ProtectedRoutes from './routes/ProtectedRoutes';
import LoginPage from './Components/Page/authUi/LoginPage';
import AsidDashboard from './Layout/AsidDashboard';
import { Toaster } from 'react-hot-toast';
import AuthProvider from './provider/AuthProvider';
import RoleProtectedRoute from './routes/RoleProtectedRoute';



//fonts 


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,

    children: [{
      path: "",
      element: <Home />
    },


    {
      path: "/studio",
      element: <Studio />
    },
    {

    },
    {
      path: "/studio/t_profile",
      element: <Tournament_Profile_Page />
    },
    {
      path: "up_profile",
      element: <Profile />
    },
    {
      path: '/explore',
      element: <Explore />
    },
    {
      path: '/engine',
      element: <Engine />
    },
    {
      path: '/connect',
      element: <Connect />
    },
    {
      path: '/about',
      element: <About />
    }

    ]
  },

  {
    element: <Dashboard />,
    children: [
      {
        path: "/register",
        element: <MainAuth_Page />
      },
      {
        path: "/gameprofile/:id",
        element: <GameProfilePage />
      },
      {
        path: "/studio/sendrequest",
        element: <Trequest />
      },
      {
        path: "/singin",
        element: <LoginPage />
      },
      {
        path: "/singin/otp-verify",
        element: <OtpPage />
      }

    ],
  },
  {
    element: <AsidDashboard />,
    children: [
      {
        
      }
    ]
  },

  {
    element: <ProtectedRoutes />,
    children: [
      {
        element: <AsidDashboard />,
        children: [{
          // ---Login /login, /Dashboard
          path: "/Profile",
        element: <ProfilePage />
        }]
      }
    ]
  },
  {
    element : <RoleProtectedRoute />,
    children : [{
      element : <AsidDashboard /> ,
      
    }]
  }
])



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <AuthProvider>
        <RouterProvider router={router} />
        <Toaster
          position='top-right'
          toastOptions={{
            duration: 3000
          }}
        />
      </AuthProvider>
    </Provider>
  </StrictMode>,
)
