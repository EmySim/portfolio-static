import React from 'react';
import { Navigate } from 'react-router-dom';
import Error from './Error/Error.jsx';
import Portfolio from './Portfolio/Portfolio.jsx';
import ScrollTop from '../components/Scrolltop.jsx';

const routes = [
  {
    path: "/",
    element: <Navigate to="/portfolio-static/" replace />
  },
  {
    path: "/portfolio-static/",
    element: (
      <>
        <ScrollTop />
        <Portfolio />
      </>
    )
  },
  
  {
    path: "*",
    element: (
      <>
        <ScrollTop />
        <Error />
      </>
    )
  },
];

export default routes;
