import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import './index..css'
import AppRoutes from './Routes/AppRoutes'

export default function App() {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
     
    
  )
}
