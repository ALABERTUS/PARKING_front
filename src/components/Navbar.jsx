/* import React, {useState, useEffect} from 'react'
import {Link } from 'react-router-dom'
import logo from '/pics/logo.png?url'
import { TiThMenuOutline } from 'react-icons/ti';
import { AiOutlineClose } from 'react-icons/ai';

import './Navbar.css'

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => {
        setIsOpen(prevState => !prevState);
        console.log("Is menu open:", !isOpen);
    }

    useEffect(() => {
        console.log("Is menu open:", isOpen);
    }, [isOpen]);

    return (
    <nav>
        <div className = "menu-toggle" onClick = {toggleMenu}>
            {isOpen ?
                <AiOutlineClose size={48} color="white" /> : 
                <TiThMenuOutline size={48} color="white" />
            }
        </div>
        
        <div className={`menu ${isOpen ? 'show' : ''}`}>
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/login">Login</Link>
                <Link to="/calendar">Calendar</Link>
        
               
        </div>

        <div className="logo">
            <img src={logo} alt="Logo" />
        </div>
    </nav>
    )
}

export default Navbar */

import React, { useState, useEffect } from 'react';
import { Link} from 'react-router-dom';
import logo from "../pics/logo.png";
import { TiThMenuOutline } from 'react-icons/ti';
import { AiOutlineClose } from 'react-icons/ai';
import './Navbar.css';


const Navbar = ({ role }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(prevState => !prevState);
    };

    useEffect(() => {
        console.log("Role in Navbar:", role);
    }, [role]);


    return (
        <nav>
            <div className="menu-toggle" onClick={toggleMenu}>
                {isOpen ?
                    <AiOutlineClose size={48} color="white" /> :
                    <TiThMenuOutline size={48} color="white" />
                }
            </div>

            <div className={`menu ${isOpen ? 'show' : ''}`}>
                {/* when role is not "homeEnter" ，show Common links */}

                {/* Links based on role */}
                {role === 'administrador' && (
                    <>
                        <Link to="/admin/dashboard">Dashboard</Link>
                        <Link to="/admin/settings">Settings</Link>
                    </>
                )}

                {role === 'solicitante' && (
                    <>
                        <Link to="/user/solicitarreserva">Solicitar Reserva</Link>
                        <Link to="/user/missolicitudes">Mis Solicitudes</Link>
                    </>
                )}

                {role === 'propietario' && (
                    <>
                        <Link to="/owner/properties">My Properties</Link>
                        <Link to="/owner/requests">Requests</Link>
                    </>
                )}
            </div>

            <div className="logo">
                <img src={logo} alt="Logo" />
            </div>
        </nav>
    );
}

export default Navbar;