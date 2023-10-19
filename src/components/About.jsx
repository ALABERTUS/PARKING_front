import React from 'react'
import Navbar3 from '../components/Navbar3'
const About = () => {
    return (
        <div>
            <Navbar3 />
            <div className="reserse-information">
                <div className="user-wrapper">
                    <div className='user-link'>
                        <p className="user-btn">08/10/2023</p>
                        <p className="user-btn">Solicitar Reserva</p>
                    </div>
                </div>

                <div className="user-wrapper">
                    <div className='user-link'>
                        <p className="user-btn">edusanchez@gamil.com</p>
                        <p className="user-btn">12/10/2023</p>
                        <p className="user-btn">SOTANO 1</p>
                        <p className="user-btn">PLAZA 23</p>
                        <p className="user-btn">CANCELAR SOLICITUD</p>
                    </div>
                </div>
        </div>
    </div>
    )
}
export default About