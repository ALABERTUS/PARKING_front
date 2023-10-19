import React from 'react';
import './Login.css';
import {  AiOutlineMail} from 'react-icons/ai';

const Login = () => {
  return (
    <>
    <div className="login-wrapper">
    <form className="login-form " action="" >
        <h1>Iniciar Sesion</h1>
        <div className="input-box">
            <input type="email"  placeholder="Email" required />
            <i><AiOutlineMail /></i>
        </div>

        <button type="submit" className="btn"> Entrar</button>
    </form>
    </div>
    </>
  );
}

export default Login;

