import React, { useContext } from 'react'
import { GeneralContext } from '../context/GeneralContext';

const Register = ({setIsLogin}) => {

  const {setUsername, setEmail, setPassword, usertype, setUsertype, register, setHomeBranch} = useContext(GeneralContext);

  const handleRegister = async (e) =>{
    e.preventDefault();
    await register()
  }
  return (
    <form className="authForm">
    <h2>Create Account</h2>
    
    <div className="form-group mb-3">
        <input
            type="text"
            className="form-control"
            id="username"
            placeholder="Enter your username"
            onChange={(e) => setUsername(e.target.value)}
        />
    </div>

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
            placeholder="Create a password"
            onChange={(e) => setPassword(e.target.value)}
        />
    </div>

    <div className="form-group mb-4">
        <select
            className="form-select"
            aria-label="User type"
            onChange={(e) => setUsertype(e.target.value)}
        >
            <option value="">Select user type</option>
            <option value="admin">Admin</option>
            <option value="customer">Customer</option>
            <option value="flight-operator">Flight Operator</option>
        </select>
    </div>

    <button type="submit" className="btn btn-primary" onClick={handleRegister}>
        Sign Up
    </button>

    <div className="authForm-footer">
        <p>Already have an account? <span onClick={() => setIsLogin(true)}>Login</span></p>
    </div>
</form>
    
  )}
export default Register;