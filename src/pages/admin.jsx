import React, { useState } from 'react';
import './Admin.css'
import Navbar from './../Components/Navbar';
import { Link } from 'react-router-dom';

const Admin = () => {
    return (
        <>
        <div> 
            <Navbar onlyShowLogo={true}/>
        </div>
            <div className='admin-container'>
                <div className='admin-menu'>
                <button className='admin-button'><Link to="/requestReservation"> Solicitar reserva </Link></button>
                <button className='admin-button'><Link to="/myRequests"> Mis solicitudes </Link></button>
                <button className='admin-button'><Link to="/requests"> Solicitudes </Link></button>
                <button className='admin-button'><Link to="/reservation"> Reservas </Link></button>
                <button className='admin-button'><Link to="/places"> Plazas </Link></button>
                </div>
            </div>
        </>
    )
}

export default Admin;