import React from 'react';
import Navbar from './Navbar';
import { useLocation } from 'react-router-dom';
import Calendar from './Calendar';
import './UserReserve.css';
import { useParams } from 'react-router-dom'; 
import { useNavigate } from 'react-router-dom';

const UserReserve = () => {
    const [selectedDate, setSelectedDate] = React.useState(null);
    const navigate = useNavigate();

    const { role } = useParams();
    console.log("Role in UserReserve:", role);
    
    const location = useLocation();
    const roleFromState = location.state?.role || 'default'; 
    
    console.log("Role in UserReserve:", roleFromState);
    console.log("Location object:", location);

    const handleDateSelect = (date) => {
        console.log("Selected date in SolicitarReserva:", date);
        setSelectedDate(date);
        
        
        console.log("Navigating to:", `/user/reservedetails/${date.format("YYYY-MM-DD")}`);
        //navigate(`/user/reservadetails/${date.format("YYYY-MM-DD")}`);
        navigate(`/user/reservedetails/${date.format("YYYY-MM-DD")}`, { state: { role: roleFromState } });

        console.log("Should have navigated");

    
    };
    
    return (
        <div>
            <Navbar role={role} />
            <div className="reserva-wrapper">
                <p className="calendar-title">SELECTIONAR DIA</p> 
                {/* <Calendar onDateSelect={handleDateSelect}/> */} 
                <Calendar onDateSelect={handleDateSelect} />
                
                {selectedDate && <p>Reserva fecha：{selectedDate.format("YYYY-MM-DD")}</p>}
                <p className="user-link">RECUERDE QUE SOLO PUEDE REALIZAR DOS SOLICITUDESPOR SEMANA</p>
            </div>
        </div>
    );
}

export default UserReserve;






