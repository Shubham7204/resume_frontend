import { useState } from 'react'
import { Route, Routes } from "react-router-dom"
import Homes from './pages/Homes'
import PersonalDetail from './pages/PersonalDetail'
import Education from './pages/Education'
import Experience from './pages/Experience'
import Skills from './pages/skills'
import Project from './pages/Project'
import Review from './pages/Review'
import Achievement from './pages/Achievement'
import { DataProvider } from './context/DataContext'

function App() {
  return (
    <>
    <DataProvider>
    <Routes>
        <Route path="/" element={<Homes />} />
        <Route path="/app/personal-detail" element={<PersonalDetail/>} />
        <Route path="/app/education" element={<Education/>} />
        <Route path="/app/experience" element={<Experience/>} />
        <Route path="/app/projects" element={<Project/>} />
        <Route path="/app/achievement" element={<Achievement/>} />
        <Route path="/app/skills" element={<Skills/>} />
        <Route path="/app/review" element={<Review/>} />
      </Routes>
    </DataProvider>
    </>
  )
}

export default App