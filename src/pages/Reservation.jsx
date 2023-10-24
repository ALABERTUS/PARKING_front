import React, { useState } from 'react';
import Navbar from '../Components/Navbar';
import './Reservation.css'
import Calendar from '../Components/Calendar';
import { Link } from 'react-router-dom';

const Reservation = () => {

    const [dateSelected, setDateSelected] = useState();
    const [reservation, setReservation] = useState();

    const getDateSelected = (date) => {
        setDateSelected(date);
    }

    const handleReservation = (reservation) => {
        setReservation(reservation);
    }

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
            {(!dateSelected && !reservation) && 
                <Calendar setNewDate={getDateSelected}/>
            }

            {(dateSelected && !reservation) && (
                <div className='reservation-page'>
                    <div className='reservation-container'>
                            <h4> Reservas 12/10/2023 </h4>
                            <button className='reservation-container-first-button'> <strong> Imprimir listado reservas </strong> </button>
                            {reservas.map((reserva, index) => (
                                <p key={index}> 
                                    <button onClick={(e) => handleReservation(reserva)}>
                                        <strong>{reserva.email}</strong>
                                        <p><strong>{reserva.date}</strong></p>
                                    </button>
                                </p>
                            ))}
                    </div>
                </div>
            )}

            {(dateSelected && reservation) && (
            <div className='reservation-page'>
                <div className='reservation-container-2'>
                    <h4> SOLICITUDES </h4>
                    <div className='reservation-body'>
                        <p>{reservation.email}</p>
                        <p>{reservation.date}</p>
                        <p>Sótano 1</p>
                        <p>Plaza 23</p>
                    </div>
                    <div className='reservation-footer'>
                        <div className='reservation-button-container'>
                            <button> <Link to={"/admin"}> Cancelar reserva </Link></button>
                        </div>
                    </div>
                </div>
            </div>
            )}

        </>
    )
}

export default Reservation;