import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './components/Root/Root';
import Home from './components/home/Home';
import DonationDetails from './components/DonationDetails/DonationDetails';
import Donations from './components/Donations/Donations';
import Statistics from './components/Statistics/Statistics';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "/donation",
        element: <Donations></Donations>,
        loader: () => fetch('/data.json')
      },
      {
        path: "/:id",
        element: <DonationDetails></DonationDetails>,
        loader: () => fetch('/data.json')
      },
      {
        path: "/statistics",
        element: <Statistics></Statistics>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
