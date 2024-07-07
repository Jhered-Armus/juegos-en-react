import { createRoot } from 'react-dom/client'
import { App } from './public/App'
import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './public/style/game.css'

const root = createRoot(document.getElementById('app'))
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>)
