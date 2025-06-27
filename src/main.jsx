import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { CartProvider } from './stores/context/CartContext.jsx'

createRoot(document.getElementById('root')).render(

  <BrowserRouter>
    <StrictMode>
      <CartProvider>
        <App />        
      </CartProvider>
    </StrictMode>
  </BrowserRouter>

)

