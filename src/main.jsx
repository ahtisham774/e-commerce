import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'
import { AuthProvider } from './context/useAuth.jsx'

createRoot(document.getElementById('root')).render(
  
    <AuthProvider>
      <Toaster position='top-center' reverseOrder={false} />
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </AuthProvider>
 
)
