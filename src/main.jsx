import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Root from './Root.jsx'
import DonationCards from './components/donation-cards-and-card/DonationCards'
import CardDetails from './components/donation-cards-and-card/CardDetails'

const router = createBrowserRouter([
  {
    path:"/",
    element:<Root/>,
    children:[
      {
        path:"/",
        element:<DonationCards/>
      },
      {
        path:"/card-details/:title",
        element:<CardDetails/>,
        loader:()=>fetch("../donationData.json")
      }
    ]

  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
