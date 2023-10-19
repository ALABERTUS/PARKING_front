import React from 'react'
import Navbar3 from '../components/Navbar3'
const UserRole = () => {
  
  return (
    <div>
        <Navbar3 />
        <div className="user-wrapper">
                <div className='user-link'>
                    <p className="user-btn">SOLICITAR RESERVA</p>
                    <p className="user-btn">MIS SOLICITUDES</p>
                </div>
            </div>
    </div>
  )
}
export default UserRole