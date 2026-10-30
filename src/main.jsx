import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { LocaleProvider } from './contexts/LocaleContext'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <LocaleProvider defaultValue="ko">
      <App />
    </LocaleProvider>
  </StrictMode>,
)
