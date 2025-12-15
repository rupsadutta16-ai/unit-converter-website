import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { ConversionProvider } from './ConverterContext.jsx'

createRoot(document.getElementById('root')).render(
  <ConversionProvider>
  <StrictMode>
    
    <App />
  </StrictMode>
  </ConversionProvider>,
)
