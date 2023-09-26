import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Root from './Root.jsx'
import DonationCards from './components/donation-cards-and-card/DonationCards'
import CardDetails from './components/donation-cards-and-card/CardDetails'
import AfterDonationCards from './components/afterDonation/AfterDonationCards'
import ErrorPage from './components/errorPage/ErrorPage'
import Statistics from './components/statistics/Statistics'
import Home from './components/home/Home'

const router = createBrowserRouter([
  {
    path:"/",
    element:<Root/>,
    errorElement:<ErrorPage/>,
    children:[
      {
        path:"/",
        element:<Home/>
      },
      {
        path:"/card-details/:title",
        element:<CardDetails/>,
        loader:()=>fetch("../donationData.json")
      },
      {
        path:"/donation",
        element:<AfterDonationCards/>,
        loader:()=>fetch("../donationData.json")
      },
      {
        path:"/statistics",
        element:<Statistics/>
      }
    ]

  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
