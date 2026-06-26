import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { store } from './REDUX/store';
import { Provider } from 'react-redux';

// Layout
import Root from './Layout/Root';
import AsidDashboard from './Layout/AsidDashboard';
import Dashboard from './Layout/Dashboard';

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
  SuperAdminPage,

  UserOverviewPage,
  UserMyteamPage,

} from './Components/Page/index';

// Super Admin
import {RequestPage} from './Components/Page/supperAdmin/superIndex'



import Profile from './pages/PROFILE/Profile'
import Trequest from './Components/Page/Admin/Trequest'
import ProtectedRoutes from './routes/ProtectedRoutes';
import LoginPage from './Components/Page/authUi/LoginPage';
import { Toaster } from 'react-hot-toast';
import AuthProvider from './provider/AuthProvider';
import RoleProtectedRoute from './routes/RoleProtectedRoute';
import GuestRoute from './routes/GuestRoute';



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
        path: "/gameprofile/:slug",
        element: <GameProfilePage />
      },

    ],
  },
  {
    // Access who can't Sign in 
    element: <GuestRoute />,
    children: [
      {
        path: "/singin",
        element: <LoginPage />
      },
      {
        path: "/singin/otp-verify",
        element: <OtpPage />
      },
      {
        path: "/register",
        element: <MainAuth_Page />
      },

    ]
  },

  {
    // acess Who can Sign in 
    element: <ProtectedRoutes />,
    children: [
      {
        path: "/studio/sendrequest",
        element: <Trequest />
      },
      {
        element: <AsidDashboard />,
        children: [
          {
            // ---Login /login, /Dashboard
            path: "/profile",
            element: <ProfilePage />
          },
          {
            path : "/profile/overview",
            element : <UserOverviewPage />
          },
          {
            path : "/profile/myteam",
            element : <UserMyteamPage />
          }

        ]
      },
    ]
  },
  {
  element: <ProtectedRoutes />,
  children: [
    {
      element: <RoleProtectedRoute allowedRoles={["admin"]} />,
      children: [
        {
          element: <Dashboard />,
          children: [
            {
              path: "/dashboard",
              element: <SuperAdminPage />,
            },
            {
              path : "/dashboard/requests-get",
              element : <RequestPage />
            }
          ],
        },
      ],
    },
  ],
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
