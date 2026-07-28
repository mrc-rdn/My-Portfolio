import React from 'react'
import {Routes, Route} from 'react-router-dom'
import PublicLayout from '../layouts/publiclayout/PublicLayout'

export default function AppRoutes() {
  return (
    <Routes>
        <Route path='/' element={<PublicLayout />} >

        </Route>
    </Routes>
  )
}
