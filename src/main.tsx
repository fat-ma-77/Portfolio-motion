import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './MotionPortfolio'
import './motion-portfolio.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
