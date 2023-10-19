import React from 'react'
import Navbar from '../components/Navbar';
import { useLocation } from 'react-router-dom';

const Admin = () => {
    const location = useLocation();
    const roleFromState = location.state && location.state.role;
  return (
    <div>
        <Navbar role={roleFromState} />
    {/* Other components here */}

    </div>
  )
}
export default Admin