import React from 'react'
import Navbar from '../components/Navbar';
import { useNavigate, useLocation } from 'react-router-dom';

const Owner = () => {
   
    const location = useLocation();
    const roleFromState = location.state?.role;
    
  return (
    <div>
    <Navbar role={roleFromState} />
    {/* Other components here */}
  </div> 
  )
}

export default Owner