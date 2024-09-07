import { createBrowserRouter,RouteObject } from 'react-router-dom';
import React from "react";
import NotFound from './pages/NotFound';
import Home from './pages/Home';

const routes: RouteObject[] = [
  { path: '/', element: <Home /> },
  { path: '*', element: <NotFound /> },
  ];
  
  const router = createBrowserRouter(routes);

export default router;