import React from 'react'
import { RoutesPage } from './routes'
import { Navega } from './components/Navigation'
import { Footer } from './components/Footer'

export function App () {
  return (
    <div className='d-flex flex-column vh-100'>
      <Navega />
      <RoutesPage />
      <Footer />
    </div>
  )
}
