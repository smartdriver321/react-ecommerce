import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import 'swiper/css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'

// bootstrap css
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'

// fonts and icons
import '././assets/css/icofont.min.css'
import '././assets/css/animate.css'
import '././assets/css/style.min.css'

import Blog from './pages/Blog/Blog.jsx'
import Home from './pages/home/Home.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/blog',
        element: <Blog />,
      },
    ],
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router}></RouterProvider>
)
