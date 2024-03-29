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
import Home from './pages/Home/Home.jsx'
import Shop from './pages/Shop/Shop.jsx'
import SingleProduct from './pages/Shop/SingleProduct.jsx'
import CartPage from './pages/Shop/CartPage.jsx'
import SingleBlog from './pages/Blog/SingleBlog.jsx'
import AboutUs from './pages/Home/AboutUs.jsx'
import About from './pages/AboutPage/About.jsx'
import Contact from './pages/ContactPage/Contact.jsx'
import Login from './components/Login.jsx'
import PrivateRoute from './PrivateRoute/PrivateRoute.jsx'
import Signup from './components/Signup.jsx'
import AuthProvider from './contexts/AuthProvider.jsx'
import CheckoutPage from './pages/Shop/CheckoutPage.jsx'

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
      {
        path: '/blog/:id',
        element: <SingleBlog />,
      },
      {
        path: '/shop',
        element: <Shop />,
      },
      {
        path: '/shop/:id',
        element: <SingleProduct />,
      },
      {
        path: '/cart-page',
        element: (
          <PrivateRoute>
            <CartPage />
          </PrivateRoute>
        ),
      },
      {
        path: '/about',
        element: <About />,
      },
      {
        path: '/contact',
        element: <Contact />,
      },
    ],
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/signup',
    element: <Signup />,
  },
  {
    path: '/check-out',
    element: <CheckoutPage />,
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <AuthProvider>
    <RouterProvider router={router}></RouterProvider>
  </AuthProvider>
)
