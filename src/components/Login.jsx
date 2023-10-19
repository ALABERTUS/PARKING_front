import React from 'react'
import { Link } from 'react-router-dom';
import{BiSolidUser} from 'react-icons/bi'
import './Login.css'

const Login = () => {
    
    return (
    <div className="login-wrapper">
    <form className="login-form "  >
        <h1>Login</h1>
    <div className="input-box">
        <input type="text" placeholder="Username" required />
        <i><BiSolidUser  /></i>
    </div>
    

    <div className="remember-forget">
        <label><input type="checkbox" />Remember me </label>
        <a href="#">Forget password?</a>
    </div>
   
    <button type="submit" className="btn" > <Link to="/admin"> Entrar </Link></button>
  
    
   
    <div className="register-link">
    <p>Don't have an account? <Link to="/register">Register</Link></p>
</div>
        
        </form>
     
    </div>

  )
}

export default Login
