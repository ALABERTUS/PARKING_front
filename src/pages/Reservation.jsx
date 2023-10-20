import React, { useState } from 'react';
import Navbar from '../Components/Navbar';
import './Reservation.css'

const Reservation = () => {
    // Pendiente de implementar, fijarse en el figma.
    const reservas = [
        {email: 'edusanchez@gmail.com', date: '12/10/2023'},
        {email: 'edusanchez@gmail.com', date: '12/10/2023'},
        {email: 'edusanchez@gmail.com', date: '12/10/2023'},
        {email: 'edusanchez@gmail.com', date: '12/10/2023'},
        {email: 'edusanchez@gmail.com', date: '12/10/2023'},
        {email: 'edusanchez@gmail.com', date: '12/10/2023'},
        {email: 'edusanchez@gmail.com', date: '12/10/2023'},
        {email: 'edusanchez@gmail.com', date: '12/10/2023'},
        {email: 'edusanchez@gmail.com', date: '12/10/2023'}
    ]
    return (
        <>
          <div> 
                <Navbar onlyShowLogo={true}/>
          </div>
           <div className='reservation-page'>
            <div className='reservation-container'>
                <h4> RESERVAS 12/10/2023 </h4>
                <button className='reservation-container-first-button'> <strong> IMPRIMIR LISTADO RESERVAS</strong> </button>
                {reservas.map((reserva, index) => (
                    <p key={index}> 
                        <button>
                            <strong>{reserva.email}</strong>
                            <p><strong>{reserva.date}</strong></p>
                        </button>
                    </p>
                ))}
            </div>
           </div>
        </>
    )
}

export default Reservation;