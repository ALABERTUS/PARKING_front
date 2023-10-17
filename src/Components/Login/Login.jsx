import React, { useState } from 'react';
import './Login.css'
const Login = () => {

    const [email, setEmail] = useState('')

    const handLogin = () => {
        const adminUser = 'admin@email.com' // El correo del usuario para poder entrar
        if (email === adminUser) {
            // login que redigire a la siguiente pantalla
            <Link to="/administratorPanel" />
        } else {
            alert('Usuario incorrecto')
        }
    }

    return(
        <>

            <div className='logo-container'>
                <img 
                    src='https://d3p157427w54jq.cloudfront.net/uploads/2018/01/randstad-logo-5.jpg'
                    className='logo'>
                </img>
            </div>

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