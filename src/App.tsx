import {useState} from 'react'
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom"
import Navbar from "./components/Navbar/Navbar"
import Dashboard from "./pages/Dashboard"
import Transactions from "./pages/Transactions"
import LoginPage from "./pages/Login"
import { ProtectedRoute } from "./components/ProtectedRoute/ProtectedRoute"




function App() {
  const[isLoggedIn, setIsLoggedIn] = useState(!!localStorage.getItem('access_token'))   
  return(
    <div>
      <BrowserRouter>
        {isLoggedIn && <Navbar onLogout={() => setIsLoggedIn(false)} />}
        <Routes>
            <Route  path="/" element={
              localStorage.getItem('access_token') ?
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>: <Navigate to="/login"/>
            } />
            <Route path="/transactions" element={
              <ProtectedRoute>
                <Transactions />
              </ProtectedRoute>
            } />
          <Route path="/login" element={
            <LoginPage onLogin={() => setIsLoggedIn(true)} />
          } />
        </Routes>
      </BrowserRouter>
    </div>
  )   
}

export default App