import React, { useState } from 'react';
import './Admin.css'
import Navbar from './components/Navbar';
import { Link } from 'react-router-dom';

const Admin = () => {

    return (
        <>

        <div> 
            <Navbar onlyShowLogo={true}/>
        </div>
            <div className='admin-container'>
                <div className='admin-menu'>
                <button className='admin-button'><Link to="/requestReservation"> SOLICITAR RESERVA </Link></button>
                <button className='admin-button'>MIS SOLICITUDES</button>
                <button className='admin-button'>SOLICITUDES</button>
                <button className='admin-button'><Link to="/reservation"> RESERVA </Link></button>
                <button className='admin-button'>PLAZAS</button>
                </div>
            </div>
      
        </>
   
    )
}

export default Admin;