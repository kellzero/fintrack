import './Navbar.css'
function Navbar() {
  return (
<nav className="navbar">
  <h1 className="navbar-logo">FinTrack</h1>
  <ul className="navbar-links">
    <li><a href="/">Home</a></li>
    <li><a href="/transactions">Transactions</a></li>
    <li><a href="/dashboard">Dashboard</a></li>
  </ul>
  <h2 className="navbar-user">Kelvin</h2>
</nav>)
}

export default Navbar