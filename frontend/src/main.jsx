import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import router from './routes/Router.jsx'
import './App.css'
import Navbar from './components/navbar/Navbar.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    <Navbar />
    <RouterProvider router={router} />
  </>
)
