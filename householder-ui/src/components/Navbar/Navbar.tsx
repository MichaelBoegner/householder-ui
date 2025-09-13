import { useNavigate } from 'react-router-dom'
import React from 'react'
import { useAuth } from '../../context/AuthContext'
import './Navbar.css'


const Navbar: React.FC = () => {
  const navigate = useNavigate();
  const { token, logout } = useAuth();

  const handleLogout = () => {
    logout();
    navigate("/");
  }

  return (
    <nav className="navbar">
      <h1 className="logo">Mindful Householder</h1>
      <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/dharma">Dharma</a></li>
        <li><a href="/reviews">Book Reviews</a></li>
        <li><a href="/about">About</a></li>
        {!token && <li><a href="/login">Login</a></li>}
        {!token && <li><a href="/signup">Signup</a></li>}
        {token && <li><a href="/dashboard">Dashboard</a></li>}
        {token && <li onClick={handleLogout}><a href="/">Logout</a></li>}
      </ul>
    </nav>
  )
}

export default Navbar
