import { createBrowserRouter,RouteObject } from 'react-router-dom';
import React from "react";
import NotFound from './pages/NotFound';
import Home from './pages/Home';
import Shop from './pages/Shop';
import About from './pages/About';
import Services from './pages/Services';
import ContactPage from './pages/ContactPage';
import Cart from './pages/Cart';

const routes: RouteObject[] = [
  { path: '/', element: <Home /> },
  { path: '/shop', element: <Shop /> },
  { path: '/about', element: <About /> },
  { path: '/services', element: <Services /> },
  { path: '/contact', element: <ContactPage /> },
  { path: '/cart', element: <Cart /> },
  { path: '*', element: <NotFound /> },
  ];
  
  const router = createBrowserRouter(routes);

export default router;