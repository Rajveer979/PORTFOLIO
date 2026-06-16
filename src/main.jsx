import React from 'react'
import ReactDOM from 'react-dom/client'
import { initAnalytics, trackPageView } from './analytics/ga4'
import App from './App.jsx'
import './index.css'

initAnalytics()
  .then(() => trackPageView())
  .catch(() => {});

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
