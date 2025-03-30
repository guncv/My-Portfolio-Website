import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { MediaQueryProvider } from './context/MediaQueryContext.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
     <MediaQueryProvider>
      <App />
    </MediaQueryProvider>
  </StrictMode>,
)
