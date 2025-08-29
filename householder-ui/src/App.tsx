import React from 'react'
import Navbar from './components/Navbar/Navbar.tsx'
import Footer from './components/Footer/Footer.tsx'
import Home from  './pages/Home.tsx'
import './App.css'

const App: React.FC = () => {
  return (
    <div className="app-container">
      <Navbar />
      <Home />
      <Footer />
    </div>
  )
}

export default App
