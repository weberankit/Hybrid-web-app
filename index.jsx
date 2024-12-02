import React, { useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider,useLocation } from 'react-router-dom';
import Layout from './src/Layout';
import AboutLife from './src/componets/AboutLife';
import AboutFood from './src/componets/AboutFood';
import AboutFruits from './src/componets/AboutFruits';
import AboutTour from './src/componets/AboutTour';
const Main = () => {


const routePath=createBrowserRouter(
        createRoutesFromElements(
           <>
     <Route path="/" element={<Layout/>}>
        <Route path="/about-food" element={<AboutFood/>} />
        <Route path="/about-fruits" element={<AboutFruits/>} />
        <Route path="/about-tour" element={<AboutTour/>} />
        <Route path="/about-life" element={<AboutLife/>} />
    </Route>

           </>
        )
    )


    return(
        <>
        <RouterProvider router={routePath}>
        </RouterProvider>
        </>
    )
};          

const root  = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Main />);  
