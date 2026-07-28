import React from 'react'
import {Routes, Route} from 'react-router-dom'
import PublicLayout from '../layouts/publiclayout/PublicLayout.tsx'
import Home from '../features/Home/Home.tsx'

export default function AppRoutes() {
  return (
    <Routes>
        <Route element={<PublicLayout />} >
            <Route path='/' element={<Home />} />
        </Route>
    </Routes>
  )
}
