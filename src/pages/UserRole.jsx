import React from 'react'
import Navbar3 from '../components/Navbar3'
import { Link } from 'react-router-dom';
const UserRole = () => {

  return (
    <div>
        <Navbar3 />
        <div className="user-wrapper">
                <div className='user-link'>
                <Link to="/reserve" className="user-btn">Solictar Reserva</Link>
                <Link to="/about" className="user-btn">Mis Solicitudes</Link>
                  
                </div>
            </div>
    </div>
  )
}
export default UserRole