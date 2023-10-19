import { useState } from 'react';
import { useParams,useLocation } from 'react-router-dom';
import Navbar from './Navbar';
import './ReserveDetails.css'

const ReserveDetails = () => {
    const { date } = useParams(); // Extracting the date parameter from the URL
    const location = useLocation();
    const role = location.state?.role || ''; // Retrieving the role from the previous page; the "?." is optional chaining in case state is undefined
    const [usuarios, setUsuarios] = useState(role); // Initialize usuarios with role

    const handleSubmit = async () => {
        try {
            const response = await fetch('http://localhost:8080/api/v1/solicitudesreservas', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    fecha: date,
                    usuarios: usuarios,
                    // Other reservation information, e.g.:
                    // time: selectedTime,
                    // numberOfPeople: selectedPeopleCount,
                    // etc...
                }),
            });

            const data = await response.json();

            if (data.success) { 
                // If successful, you can perform further actions, e.g. navigate to a confirmation page or display a success message
            } else {
                // If reservation failed, handle it here, e.g. display an error message
                console.error("Error reserving:", data.error);
            }
        } catch (error) {
            console.error("Error calling the API:", error);
        }
    };
    console.log("Received role in ReservaDetails:", role);

    return (
        <div >
            <Navbar role={role} />

            {/* Display data and other information */}
            <div className='reverse-container'>
                <div className='reverse-details'>
                    <h2 className="user-btn">Información de reserva</h2>
                    <h3 className="user-btn">Usuarios:{role} </h3>
                    <div className="user-btn">Date: {date}</div>
                    <button className="user-btn" onClick={handleSubmit}>Submit</button>
                </div>
            </div>
        </div>
    );
}

export default ReserveDetails;
