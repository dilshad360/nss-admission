import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import { ThemeProvider } from "@material-tailwind/react";
import Footer from './components/Footer.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider>
    <App />
    <Footer/>
    </ThemeProvider>
  </React.StrictMode>,
)
