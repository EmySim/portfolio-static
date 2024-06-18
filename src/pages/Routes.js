import React from 'react';
import Error from './Error/Error.jsx';
import Portfolio from './Portfolio/Portfolio.jsx';
import ScrollTop from '../components/Scrolltop.jsx';

const routes = [
  
  {
    path: "/portfolio-front",
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
