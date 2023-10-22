import React from 'react'
import Navbar3 from '../components/Navbar3'
import CalendarTest from './CalendarTest'

const Reserve = () => {
  return (
    <div>
        <Navbar3/>
        <CalendarTest />
        <div className="reserva-wrapper">
            <p className="user-link">Recuerde que solo puede realizar dos solicitudes por semana</p>   
      
        </div>
          
    </div>
  )
}

export default Reserve