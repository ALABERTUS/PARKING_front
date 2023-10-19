import React, { useState } from 'react';
import './Login.css'
const Login = () => {

    const [email, setEmail] = useState('')

    const handLogin = () => {
        const adminUser = 'admin@email.com' // El correo del usuario para poder entrar
        
    }

    return(
        <>
            <div>
                <h2 className='login-title'> Parking </h2>
            </div>

            <div className='form-container'>
                <h4> Iniciar sesión</h4>
                <form>
                    <label>Email</label>
                        <input
                            type='email'
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        >
                        </input>
                    <br/>
                    <button type='button' onClick={handLogin}>Entrar</button>
                </form>
            </div>
        </>
    )
}

export default Login;