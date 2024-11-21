import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { AuthProvider } from './Components/AuthContext/AuthContext.tsx'
import { AppProvider } from './Components/Pagination/PagContext.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AuthProvider>
      <AppProvider>
    <App />
    </AppProvider>
    </AuthProvider>
  </StrictMode>,
)
