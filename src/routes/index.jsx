import { createBrowserRouter } from "react-router-dom";
 import HomePage from "../pages/Home";
import LoginPage from "../pages/Login";
import RegisterPage from "../pages/Register";
import GamesPage from "../pages/Games";
import Promotion from "../pages/Promotion";
import RankingPage from "../pages/Ranking";
import ContactPage from "../pages/Contact";
import InformationPage from "../pages/Information";
import AboutPage from "../pages/About";
import DemoPlayPage from "../pages/DemoPlay";
import UnAuthLayout from "../components/UnAuthLayout";
import AuthLayout from "../components/Layout";
import TwoDPage from "../pages/2D/TwoDPage";
import TwoDHistory from "../pages/2D/TwoDHistoryPage";
import TwoDWinnersPage from "../pages/2D/TwoDWinnersPage";
import TwoDHoliday from "../pages/2D/TwoDHoliday";
import TwoDBetPage from "../pages/2D/TwoDBetPage";
import TwoDConfirmPage from "../pages/2D/TwoDConfirmPage";
import ThreeDPage from "../pages/3D/ThreeDPage";
import ThreeDHistory from "../pages/3D/ThreeDHistory";
import ThreeDWinnersPage from "../pages/3D/ThreeDWinnersPage";
import ThreeDHoliday from "../pages/3D/ThreeDHoliday";
import ThreeDConfirmPage from "../pages/3D/ThreeDConfirmPage";
import ThreeDBetPage from "../pages/3D/ThreeDBet";

export const router = createBrowserRouter([
    {
      path: '/',
      element: <UnAuthLayout />,
      children: [
        {
          index: true,
          element: <HomePage />
        },
        {
          path: '/login',
          element: <LoginPage />
        },
        {
          path: '/register',
          element: <RegisterPage />
        }
      ]
    },
    {
      path: '/',
      element: <AuthLayout />,
      children: [
        {
          path: '/games',
          element: <GamesPage />
        },
        {
          path: '/demo-play',
          element: <DemoPlayPage />
        },
        {
          path: '/ranking',
          element: <RankingPage />
        },
        {
          path: '/promotion',
          element: <Promotion />
        },
        {
          path: '/contact',
          element: <ContactPage />
        },
        {
          path: '/information',
          element: <InformationPage />
        },
        {
          path: '/about',
          element: <AboutPage />
        }
      ]
    },
    {
      path:'/2d',
      children:[
        {
          index:true,
          element:<TwoDPage/>
        },
        {
         path:'history',
          element:<TwoDHistory/>
        },
        {
          path:'winners',
          element:<TwoDWinnersPage/>
      },
      {
        path:'holiday',
        element:<TwoDHoliday/>
    },
    {
      path:'bet',
      element:<TwoDBetPage/>
  },{
    path:'confirm',
    element:<TwoDConfirmPage/>
},
      ]
    },
    {
      path:'/3d',
      children:[
        {
          index:true,
          element:<ThreeDPage/>
        },
        {
         path:'history',
          element:<ThreeDHistory/>
        },
        {
          path:'winners',
          element:<ThreeDWinnersPage/>
      },
      {
        path:'holiday',
        element:<ThreeDHoliday/>
    },
    {
      path:'bet',
      element:<ThreeDBetPage/>
  },{
    path:'confirm',
    element:<ThreeDConfirmPage/>
},
      ]
    }
  ]);