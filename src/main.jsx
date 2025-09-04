import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ThemeProvider } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import App from './App.jsx'
import theme from './theme/theme.js'

createRoot(document.getElementById('root')).render(
  <StrictMode> {/* use in dev mode, to check any errors in react app, like deprecated apis, useEffect ru twice to test it */}
    <ThemeProvider theme={theme}>
      <CssBaseline /> {/* use for maintain the style consistent across different browsers */}
      <App />
    </ThemeProvider>
  </StrictMode>,
)
