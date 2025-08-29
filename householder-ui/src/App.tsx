import React from 'react'
import Navbar from './components/Navbar/Navbar.tsx'
import Footer from './components/Footer/Footer.tsx'
import Home from './pages/Home'

const App: React.FC = () => {
  return (
    <div className="app-container">
      <Navbar />
      <main>
        <Home />
      </main>
      <Footer />
    </div>
  )
}

export default App
