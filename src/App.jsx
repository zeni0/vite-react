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
        <Link to="/">Home</Link> |{" "}
        <Link to="/business-card">Business Card</Link> |{" "}
        <Link to="/chef-claude">Chef Claude</Link> |{" "}
        <Link to="/meme-generator">Meme Generator</Link> |{" "}
        <Link to="/tenzies">Tenzies</Link> |{" "}
        <Link to="/assembly-endgame">Assembly:Endgame</Link> |{" "}
        <Link to="/assessments">Assessments</Link> |{" "}
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/business-card" element={<BusinessCard />} />
        <Route path="/chef-claude" element={<ChefClaude />} />
        <Route path="/meme-generator" element={<MemeGenerator />} />
        <Route path="/tenzies" element={<Tenzies />} />
        <Route path="/assembly-endgame" element={<AssemblyEndgame />} />
        <Route path="/assessments" element={<Assessments />} />
      </Routes>
    </>
  )
}

export default App
