import { useState } from "react";
import { login } from "../services/api";
import {useNavigate} from 'react-router-dom'

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
    <div className="items-center justify-center">
      <h1 className="text-4xl font-bold">Login Page</h1>
      <form onSubmit={handleLogin} className="flex-col gap-4 mt-6">
        <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)}  className= {error.username ? 'input-error' : ''} />
        <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} className= {error.password ? 'input-error' : ''} />
        <button type="submit" className=" text-white p-2 rounded">Login</button>
        {loginError && <p>Invalid username or password</p>}
      </form>
    </div>
  );
}
export default LoginPage;