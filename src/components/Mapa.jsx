import React from 'react'
import Navbar1 from '../components/Navbar1';
import { useNavigate, useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
const Mapa = (role) => {
  const location = useLocation();
  const roleFromState = location.state?.role;
  console.log("Role in SolicitarReserva:", roleFromState);
  return (
    <div>
    <Navbar1 role={roleFromState} />
    {/*other user pages content */}
    <div className="reseerva-wrapper">
        <p className="calendar-title">MAPA</p> 
      
    </div>
</div>
  )
}

export default Mapa