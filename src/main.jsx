import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import {
  RouterProvider,
} from "react-router-dom";
import { HelmetProvider } from 'react-helmet-async';
import { router } from './Router/Router.jsx';
createRoot(document.getElementById('root')).render(
  <StrictMode>
  <HelmetProvider>
  <div className='w-11/12 mx-auto'>
   <RouterProvider router={router} />
   </div>
  </HelmetProvider>
  </StrictMode>,
)
