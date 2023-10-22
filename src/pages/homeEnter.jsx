import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from '../components/Navbar';
import { useNavigate } from 'react-router-dom';
import '../pages/HomeEnter.css';
import { useLocation } from 'react-router-dom';
//import { AuthenticationGuard } from '../auth0/AuthenticationGuard'

function HomeEnter() {

    const [email, setEmail] = useState('');
    const [role, setRole] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();  // Prevent default form behavior

        axios.get(`http://localhost:8080/api/v1/usuarios/findByEmail?email=${email}`)
            .then(response => {
                console.log("API Response:", response.data); // Add this
                setRole(response.data.rol.nombreRol);
            })
            .catch(error => {
                console.error("Error fetching user role:", error);
            });
    };
    // Inside HomeEnter function:
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        if (role === 'administrador') {
            navigate('/admin', { state: { role: 'administrador' } });
        } else if (role === 'solicitante') {
            navigate('/user', { state: { role: 'solicitante' } });
        } else if (role === 'propietario') {
            navigate('/owner', { state: { role: 'propietario' } });
        }
    }, [role]);

    return (
        <div>
            <Navbar role="none"/>
            <div className="login-section">
                <div className="page-title">Parking</div>
                <form className="login-form" onSubmit={handleSubmit}>
                    <h1 className="login-iniciar">Iniciar Sesion</h1>
                    <div className="email-section">
                        <div className="email-label">Email</div>
                        <div className="input-homeenter">
                            <input
                                type="email"
                                placeholder="Email"
                                required
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                    </div>
                    <button type="submit" className="login-btn">Entrar</button>
                </form>
            </div>
        </div>
    );
}
export default HomeEnter;

