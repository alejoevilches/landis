import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import { router } from './router/Router'
import './index.css'
import { FavsProvider } from './context/favs'
import { CartProvider } from './context/cart'

ReactDOM.createRoot(document.getElementById('root')).render(
  <CartProvider>
      <FavsProvider>
        <RouterProvider router={router} />
    </FavsProvider>
  </CartProvider>
)
