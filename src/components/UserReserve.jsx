/*import React from 'react';
import Navbar from './Navbar';
import { useLocation } from 'react-router-dom';
import Calendar from './Calendar';
import './UserReserve.css';
import { useParams,useNavigate } from 'react-router-dom'; 

const UserReserve = () => {
    const [selectedDate, setSelectedDate] = React.useState(null);
    const navigate = useNavigate();

    const { role } = useParams();
    console.log("Role in UserReserve:", role);

    const handleDateSelect = (date) => {
        console.log("Selected date in SolicitarReserva:", date);
        setSelectedDate(date);
        console.log("Navigating to:", `/user/reservedetails/${date.format("YYYY-MM-DD")}`);
        navigate(`/user/reservedetails/${date.format("YYYY-MM-DD")}`, { state: { role: role } });
        console.log("Should have navigated");
};
    
    return (
        <div>
            <Navbar role={role} />
            <div className="reserva-wrapper">
                <p className="calendar-title">Selectionar Día</p> 
                <Calendar onDateSelect={handleDateSelect} />
                
                {selectedDate && <p>Reserva fecha：{selectedDate.format("YYYY-MM-DD")}</p>}
                <p className="user-link">Recuerde que solo puede realizar dos solicitudes por semana</p>
            </div>
        </div>
    );
}

export default UserReserve;
*/
import React from 'react';
import Navbar from './Navbar';
import Calendar from './Calendar';
import Popup from '../components/Popup'; // Import the Popup component
import { useParams, useNavigate } from 'react-router-dom';
import './UserReserve.css';

const UserReserve = () => {
    const [selectedDate, setSelectedDate] = React.useState(null);
    const [showPopup, setShowPopup] = React.useState(false); // state to control popup visibility
    const navigate = useNavigate();

    const { role } = useParams();

    const handleDateSelect = (date,role) => {
        setSelectedDate(date);
        setShowPopup(true);  // show the popup
    };

    const handleSubmit = async () => {
        // handle the API call and other logic
        // ... (can use existing logic from ReserveDetails)
        setShowPopup(false); // hide the popup after submitting
    };

    return (
        <div>
            <Navbar role={role} />
            <div className="reserva-wrapper">
                <p className="calendar-title">Seleccionar Día</p> 
                <Calendar onDateSelect={handleDateSelect} />
                <Popup
                    isVisible={showPopup}
                    onClose={() => setShowPopup(false)}
                    onSubmit={handleSubmit}
                    date={selectedDate?.format("YYYY-MM-DD")}
                    role={role}
                />
                {selectedDate && <p>Reserva fecha：{selectedDate.format("YYYY-MM-DD")}</p>}
                <p className="user-link">Recuerde que solo puede realizar dos solicitudes por semana</p>
            </div>
        </div>
    );
}

export default UserReserve;





