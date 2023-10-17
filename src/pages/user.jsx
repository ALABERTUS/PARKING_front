import React from 'react';
import Navbar1 from '../components/Navbar1';
import { useNavigate, useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
import '../pages/User.css'

const User = ({ role }) => {
    const location = useLocation();
    const roleFromState = location.state?.role;
    console.log("Role in User component:", roleFromState);

return (
        <>
            <Navbar1 role={roleFromState} />
            {/* other user pages content */}
            <div className="user-wrapper">
                <div className='user-link'>
            <Link to="/user/solicitarreserva" className="btn">SOLICITAR RESERVA</Link>
            <Link to="/user/missolicitudes" className="btn">MIS SOLICITUDES</Link>
            <Link to="/user/mapa" className="btn">MAPA</Link>
            </div>
            </div>
        </>
        
    );
}

export default User;
