import React from 'react'
import './Navbar.css'

const Navbar: React.FC = () => {
  return (
    <nav className="navbar">
      <h1 className="logo">Mindful Householder</h1>
      <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/dharma">Dharma</a></li>
        <li><a href="/reviews">Book Reviews</a></li>
        <li><a href="/about">About</a></li>
        <li><a href="/login">Login</a></li>
        <li><a href="/Signup">Signup</a></li>
      </ul>
    </nav>
  )
}

export default Navbar
