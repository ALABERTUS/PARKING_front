import React from 'react';
import Navbar from '../components/Navbar';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
import '../pages/User.css'

const User = () => {
    const location = useLocation();
    const roleFromState = location.state?.role; // get rold information from location.state 
    console.log("Role in User component:", roleFromState);
    console.log("Links will have status:", { role: roleFromState });

    return (
        <>
            <Navbar  role={roleFromState}/> {/* do not pass the role attribute and do not display the left menu */}
            <div className="user-wrapper">
                <div className='user-link'>
                    <Link to={`/user/userreserve/${roleFromState}`} className="user-btn">Solicitar Reserva</Link>
                    <Link to={`/user/missolicitudes/${roleFromState}`} className="user-btn">Mis solicitudes</Link>
                </div>
            </div>
        </>
    );
}

export default User;
