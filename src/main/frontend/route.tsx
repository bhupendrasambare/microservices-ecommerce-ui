import { createBrowserRouter,RouteObject } from 'react-router-dom';
import React from "react";
import NotFound from './pages/NotFound';

const routes: RouteObject[] = [
    { path: '*', element: <NotFound /> },
  ];
  
  const router = createBrowserRouter(routes);

export default router;