import React from 'react'
import Navbar1 from '../components/Navbar1';
import { useNavigate, useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';


const MisSolicitudes = () => {
  const location = useLocation();
  const roleFromState = location.state?.role;
  
  return (
  <>
    <Navbar1 role={roleFromState} />
    {/* other user pages content */}
    <div className="user-wrapper">
        <div className='user-link'>
    <Link to="/user/missolicitudes" className="user-btn">08/11/2023</Link>      
    <Link to="/user/solicitarreserva" className="user-btn">SOLICITAR RESERVA</Link>
    
    
    </div>
    </div>
  </>
    
  )
}

export default MisSolicitudes