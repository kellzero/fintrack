import { Link } from 'react-router-dom'
import './Navbar.css'
function Navbar() {
  return (
<nav className="navbar">
  <h1 className="navbar-logo">FinTrack</h1>
  <ul className="navbar-links">
    <li><Link to="/">Dashboard</Link></li>
    <li><Link to="/transactions">Transactions</Link></li>
  </ul>
  <h2 className="navbar-user">Kelvin</h2>
</nav>)
}

export default Navbar