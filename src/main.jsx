import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import ReactGA from "react-ga4";

import "./styles.css";
import App from './App.jsx'

ReactGA.initialize("G-G0QXYMBJ91");

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)