import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';
import routes from "./pages/Routes";
import '@fontsource/cabin-sketch';


const router = createBrowserRouter(routes);

// Render the entire app inside RouterProvider
createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}>
      <App />
    </RouterProvider>
  </React.StrictMode>
);

