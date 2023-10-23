import React, { useState } from 'react';
import './RequestReservation.css'
import Calendar from '../components/Calendar';
import Navbar from '../components/Navbar';

const RequestReservation = () => {

    return (
        <>
            <div> 
                <Navbar onlyShowLogo={true}/>
            </div>
            <div className='request-reservation-container'>
                <div className='request-reservation-container-title'>
                    <h2> Reservas </h2>
                </div>
                <div className='request-reservation-calendar'>
                    <Calendar/>
                </div> 
             </div>

        </>
    )
}

export default RequestReservation;