import { Link, useNavigate} from 'react-router-dom'
import {logout} from '../../services/api'
import './Navbar.css'

interface NavbarProps {
    onLogout: () => void
}

function Navbar({ onLogout }: NavbarProps) {
  const navigate = useNavigate()
  function handleLogout() {
    logout()
    navigate('/login')
    onLogout()
  }
  return (
<nav className="navbar">
  <h1 className="navbar-logo">FinTrack</h1>
  <ul className="navbar-links">
    <li><Link to="/">Dashboard</Link></li>
    <li><Link to="/transactions">Transactions</Link></li>
  </ul>
  <div style={{display: 'flex', alignItems: 'center', gap: '1rem'}}>
    <p className="navbar-user">Kelvin</p>
    <button className="logout-button" onClick={handleLogout}>
      Logout
    </button>
  </div>
</nav>)
}

export default Navbar