import { useState } from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import './App.css'
import BusinessCard from './pages/BusinessCard'
import Home from './pages/Home'
import ChefClaude from './pages/ChefClaude'
import MemeGenerator from './pages/MemeGenerator' 
import Tenzies from './pages/Tenzies'
import AssemblyEndgame from './pages/AssemblyEndgame'
import Assessments from './pages/Assessments'

function App() {

  return (
    <>
      <nav>
        <Link to="/vite-react/">Home</Link> |{" "}
        <Link to="/vite-react/business-card">Business Card</Link> |{" "}
        <Link to="/vite-react/chef-claude">Chef Claude</Link> |{" "}
        <Link to="/vite-react/meme-generator">Meme Generator</Link> |{" "}
        <Link to="/vite-react/tenzies">Tenzies</Link> |{" "}
        <Link to="/vite-react/assembly-endgame">Assembly:Endgame</Link> |{" "}
        <Link to="/vite-react/assessments">Assessments</Link> |{" "}
      </nav>

      <Routes>
        <Route path="/vite-react/" element={<Home />} />
        <Route path="/vite-react/business-card" element={<BusinessCard />} />
        <Route path="/vite-react/chef-claude" element={<ChefClaude />} />
        <Route path="/vite-react/meme-generator" element={<MemeGenerator />} />
        <Route path="/vite-react/tenzies" element={<Tenzies />} />
        <Route path="/vite-react/assembly-endgame" element={<AssemblyEndgame />} />
        <Route path="/vite-react/assessments" element={<Assessments />} />
      </Routes>
    </>
  )
}

export default App
