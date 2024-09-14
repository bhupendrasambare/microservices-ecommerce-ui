import { createBrowserRouter,RouteObject } from 'react-router-dom';
import React from "react";
import NotFound from 'Frontend/pages/NotFound';
import Home from 'Frontend/pages/home/Home';
import Shop from 'Frontend/pages/home/Shop';
import About from 'Frontend/pages/home/About';
import Services from 'Frontend/pages/home/Services';
import ContactPage from 'Frontend/pages/home/ContactPage';
import Cart from 'Frontend/pages/home/Cart';
import Sellerindex from 'Frontend/pages/seller/Sellerindex'
import SellerNotFoundPage from './pages/seller/SellerNotFoundPage';
import SellerProductPage from './pages/seller/SellerProductPage';
import SellerReviewsPage from './pages/seller/SellerReviewsPage';
import SellerUser from './pages/seller/SellerUser';

const routes: RouteObject[] = [
  { path: '/', element: <Home /> },
  { path: '/shop', element: <Shop /> },
  { path: '/about', element: <About /> },
  { path: '/services', element: <Services /> },
  { path: '/contact', element: <ContactPage /> },
  { path: '/cart', element: <Cart /> },
  { path: '*', element: <NotFound /> },

  { path: '/seller/', element: <Sellerindex /> },
  { path: '/seller/*', element: <SellerNotFoundPage /> },
  { path: '/seller/products', element: <SellerProductPage /> },
  { path: '/seller/reviews', element: <SellerReviewsPage /> },
  { path: '/seller/account', element: <SellerUser /> },
  ];
  
  const router = createBrowserRouter(routes);

export default router;