
import React, { useContext } from 'react'
import { GeneralContext } from '../context/GeneralContext';

const Login = ({setIsLogin}) => {

  const {setEmail, setPassword, login} = useContext(GeneralContext);

  const handleLogin = async (e) =>{
    e.preventDefault();
    await login();
  }
  return (
    <form className="authForm">
    <h2>Welcome Back!</h2>
    <div className="form-group mb-3">
        <input
            type="email"
            className="form-control"
            id="email"
            placeholder="Enter your email"
            onChange={(e) => setEmail(e.target.value)}
        />
    </div>
    <div className="form-group mb-4">
        <input
            type="password"
            className="form-control"
            id="password"
            placeholder="Enter your password"
            onChange={(e) => setPassword(e.target.value)}
        />
    </div>
    <button type="submit" className="btn btn-primary" onClick={handleLogin}>Sign in</button>

    <div className="authForm-footer">
        <p>Don't have an account? <span onClick={() => setIsLogin(false)}>Sign Up</span></p>
    </div>
</form>

  )
}
export default Login