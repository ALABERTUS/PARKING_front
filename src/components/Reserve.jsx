import React from 'react'
import Navbar3 from './Navbar3'
import Calendar from './Calendar'
const Reserve = () => {
  return (
    <div>
        <Navbar3/>
        <Calendar />
        <div className="reserva-wrapper">
            <p className="user-link">RECUERDE QUE SOLO PUEDE REALIZAR DOS SOLICITUDESPOR SEMANA</p>   
      
        </div>
          
    </div>
  )
}

export default Reserve