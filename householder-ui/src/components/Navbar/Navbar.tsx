import React from 'react'
import "./Navbar.css"

const Navbar: React.FC = () => {
  return (
    <nav className="navbar">
      <h1 className="logo">Householder</h1>
      <ul>
        <li><a href="#">Home</a></li>
        <li><a href="#">Writings</a></li>
        <li><a href="#">Reviews</a></li>
        <li><a href="#">About</a></li>
      </ul>
    </nav>
  )
}

export default Navbar
