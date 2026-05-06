import React from 'react';
import './App.css';

import { createBrowserRouter, createHashRouter, RouterProvider } from "react-router-dom";
// import { I18nextProvider } from "react-i18next";

import i18n from "./il8n";

import Layout from './Component/Layout/Layout';
import Home from './Component/Home/Home';
import Notfound from './Component/NotFound/NotFound';
import Challenge from './Component/Challenge/Challenge';
import WhoWeAre from './Component/WhoWeAre/WhoWeAre';
import WhyEgypt from './Component/WhyEgypt/WhyEgypt';
import Services from './Component/Services/Services';
import Industries from './Component/Industries/Industries';
import Numbers from './Component/Numbers/Numbers';
import Pilot from './Component/Pilot/Pilot';
import Contact from './Component/Contact/Contact';
import GetInTouch from './Component/GetInTouch/GetInTouch';


function App() {

 

  const routers = createBrowserRouter([{
    path: '', element: <Layout />, children: [
      { index: true, element: <Home  /> },
{ path: '/challenge', element: <Challenge/> },
{ path: '/WhoWeAre', element: <WhoWeAre/> },
{ path: '/WhyEgypt', element: <WhyEgypt/> },
{ path: '/OurServices', element: <Services/> },
{ path: '/Industries', element: <Industries/> },
{ path: '/Numbers', element: <Numbers/> },
{ path: '/Pilot', element: <Pilot/> },
{ path: '/Contact', element: <Contact/> },
{ path: '/GetInTouch', element: <GetInTouch/> },

      { path: '*', element: <Notfound /> },
    ]

  }])



  return (
    <>

    
    {/* <I18nextProvider i18n={il8n}> */}
      <RouterProvider router={routers} />

 {/* </I18nextProvider> */}

  </>
  );

}


export default App;
