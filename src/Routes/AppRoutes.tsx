
import {Routes, Route} from 'react-router-dom'
import PublicLayout from '../layouts/publiclayout/PublicLayout.tsx'
import Home from '../features/Home/Home.tsx'
import Projects from '../features/Projects/Projects.tsx'
import ProjectDetails from '../features/Projects/ProjectDetails.tsx'
import Experience from '../features/Experience/Experience.tsx'
import Stack from '../features/Stack/Stack.tsx'
import Certifications from '../features/Certifications/Certifications.tsx'
import Games from '../features/games/Games.tsx'

export default function AppRoutes() {
  return (
    <Routes>
        <Route element={<PublicLayout />} >
            <Route path='/' element={<Home />} />
            <Route path='/projects' element={<Projects />} />
            <Route path='/projects/:id' element={<ProjectDetails />} />
            <Route path='/experience' element={<Experience />} />
            <Route path='/stack' element={<Stack />} />
            <Route path='/certifications' element={<Certifications />} />
            <Route path='/games' element={<Games />} />
        </Route>
    </Routes>
  )
}
