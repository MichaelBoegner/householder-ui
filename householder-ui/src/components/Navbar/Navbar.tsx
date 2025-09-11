import { useNavigate } from 'react-router-dom'
import React from 'react'
import './Navbar.css'



interface NavbarProps {
  isLoggedIn: boolean
}

const Navbar: React.FC<NavbarProps> = ({ isLoggedIn }) => {
  const navigate = useNavigate()
  const handleLogout = () => {
    localStorage.removeItem("token")
    navigate("/")
  }

  return (
    <nav className="navbar">
      <h1 className="logo">Mindful Householder</h1>
      <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/dharma">Dharma</a></li>
        <li><a href="/reviews">Book Reviews</a></li>
        <li><a href="/about">About</a></li>
        {!isLoggedIn && <li><a href="/login">Login</a></li>}
        {!isLoggedIn && <li><a href="/signup">Signup</a></li>}
        {isLoggedIn && <li><a href="/dashboard">Dashboard</a></li>}
        {isLoggedIn && <li onClick={handleLogout}><a href="/logout">Logout</a></li>}
      </ul>
    </nav>
  )
}

export default Navbar
