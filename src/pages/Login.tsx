import { useState } from "react";
import { login } from "../services/api";
import {useNavigate} from 'react-router-dom'
import './Login.css'

interface LoginPageProps {
    onLogin: () => void
}

function LoginPage({ onLogin }: LoginPageProps) {
    const navigate = useNavigate()
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [loginError, setLoginError] = useState(false);
    const [error, setError] = useState({
        username: false,
        password: false
    });

    function handleLogin(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        const fieldErrors = {
            username: !username,
            password: !password
        }
        setError(fieldErrors);
        if (fieldErrors.username || fieldErrors.password) {
            return;
        }

        login(username, password).then(success => {
                if (success) {
                    onLogin();
                    navigate('/')
                } else {
                    setLoginError(true)
                }
            }
        );
    }

  return (
    <div className="login-container">
      <div className="login-box">
        <h1 className="login-logo">FinTrack</h1>
        <p className="login-subtitle">Welcome back! Please enter your details.</p>
        <form onSubmit={handleLogin} className="login-form">
          <div className="login-group">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className={error.username ? 'input-error' : ''}
            />
          </div>
          <div className="login-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className={error.password ? 'input-error' : ''}
            />
          </div>
          <button type="submit" className="login-button">
            Entrar
          </button>
          {loginError && <p className="login-error">Invalid username or password.</p>}
        </form>
      </div>
    </div>
  );
}
export default LoginPage;