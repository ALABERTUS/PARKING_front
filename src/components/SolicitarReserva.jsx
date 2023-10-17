import React from 'react';
import Navbar from '../components/Navbar';
import { useLocation } from 'react-router-dom';
import Calendar from './Calendar';
import './SolicitarReserva.css'

const SolicitarReserva = ({ role }) => {
    const location = useLocation();
    const roleFromState = location.state?.role;
    console.log("Role in SolicitarReserva:", roleFromState);

    return (
        <div>
            <Navbar role={roleFromState} />
            {/*other user pages content */}
            <div className="reseerva-wrapper">
                <p className="calendar-title">SELECTIONAR DIA</p> 
                <Calendar />
                <p className="user-link">RECUERDE QUE SOLO PUEDE REALIZAR DOS SOLICITUDESPOR SEMANA</p>
               
            </div>
        </div>
        
    );
}

export default SolicitarReserva;







