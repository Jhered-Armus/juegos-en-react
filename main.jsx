import { createRoot } from 'react-dom/client'
import { App } from './public/App'
import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './public/style/game.css'
import { SECONDARY_COLOR } from './public/style/colors'

const root = createRoot(document.getElementById('app'))
root.render(
  <React.StrictMode>
    <App style={{ background: SECONDARY_COLOR }} />
  </React.StrictMode>)
