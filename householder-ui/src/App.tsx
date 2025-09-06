import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar.tsx'
import Footer from './components/Footer/Footer.tsx'
import Home from  './pages/Home/Home.tsx'
import Dharma from './pages/Dharma/Dharma.tsx'
import Reviews from './pages/Reviews/Reviews.tsx'
import About from './pages/About/About.tsx'
import Login from './pages/Login/Login.tsx'
import './App.css'

const App: React.FC = () => {
  return (
    <div className="app-container">
      <Navbar />
      <main className="page-container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dharma" element={<Dharma />} />
          <Route path="/reviews" element={<Reviews />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}


export default App
