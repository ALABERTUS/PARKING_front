import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FaUser } from 'react-icons/fa';
import { BsFillTelephoneFill } from 'react-icons/bs';
import { PiGridNineBold } from 'react-icons/pi';
import { AiOutlineMail } from 'react-icons/ai';
import './Register.css';

const Register = () => {
    const [nombre, setNombre] = useState('');
    const [email, setEmail] = useState('');
    const [dni, setDni] = useState('');
    const [telefono, setTelefono] = useState('');
    const [roles, setRoles] = useState([]);
    const [rol, setRol] = useState({});
    const [message, setMessage] = useState('');

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:8080/api/v1/roles');
                setRoles(response.data);
            } catch (error) {
                console.error('Error fetching roles:', error);
            }
        };
        fetchData();
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!nombre || !email || !dni || !telefono || !rol) {
            console.error('Please fill in all fields.');
            return;
        }

        const payload = {
            nombre,
            email,
            dni,
            telefono,
            rol: { id: parseInt(rol.id, 10) } 
        };
        console.log("Payload being sent:", payload);

        try {
            const response = await fetch('http://localhost:8080/api/v1/usuarios', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(payload)
            });
            
            if (!response.ok) {
                throw new Error('The network is not responding correctly');
            }
            
            const data = await response.json();
            console.log(data);
            clearForm();

            setMessage('Register successful !');
        } catch (error) {
            console.error('An error has ocurred:', error.message);
            setMessage('Registration failed, please try again'); 
        }
    };

    const clearForm = () => {
        setNombre('');
        setEmail('');
        setDni('');
        setTelefono('');
        setRol('');
    };

    return (
        <div className="register-wrapper">
            <form onSubmit={handleSubmit} className="register-form">
                <h1>Register Solicitante</h1>
                <div className="input-box">
                    <input type="text" value={nombre} onChange={e => setNombre(e.target.value)} placeholder="Nombre" required />
                    <i><FaUser /></i>
                </div>
                <div className="input-box">
                    <input type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="Email" required />
                    <i><AiOutlineMail /></i>
                </div>
                <div className="input-box">
                    <input type="text" value={dni} onChange={e => setDni(e.target.value)} placeholder="DNI" required />
                    <i><PiGridNineBold /></i>
                </div>
                <div className="input-box">
                    <input type="number" value={telefono} onChange={e => setTelefono(e.target.value)} placeholder="Teléfono" required />
                    <i><BsFillTelephoneFill /></i>
                </div>
                <div className="input-box">
                <select value={rol.id || ''} onChange={e => setRol({ id: e.target.value })}>
                <option value="" disabled hidden>Select an Option</option>
    {roles.map(role => (
        <option key={role.id} value={role.id}>{role.nombreRol}</option>
    ))}
</select>
                </div>
                <button type="submit" className="btn">Register</button>
            <div className="register-message">
                 {message && <div className="message">{message}</div>}
            </div>
           
            </form>
            
        </div>
    );
}

export default Register;
