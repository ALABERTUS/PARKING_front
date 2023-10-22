import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import '../App.css'

// Pages imports
import HomeEnter from '../pages/HomeEnter';
import Admin from '../pages/Admin';
import User from '../pages/User';
import Owner from '../pages/Owner';
import Parking from '../pages/Parking'


// Components imports
import UserReserve from '../components/UserReserve';
import MisSolicitudes from '../components/MisSolicitudes'
import About from '../components/About'
import Home from '../components/Home'
import Login from '../components/Login'
import Calendar from '../components/Calendar'
//import AuthenticationGuard from '../auth0/AuthenticationGuard';
import ReserveDetails from '../components/ReserveDetails'
import Reserve from '../components/Reserve'
import UserRole from '../pages/UserRole'

function Index() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Main route - you can use AuthenticationGuard */}
        <Route path="/" element={<HomeEnter />} /> 
        {/*<Route path="/" element={
            <AuthenticationGuard><HomeEnter />
            </AuthenticationGuard>} /> 
        */}      

        {/* Other routes */}
        <Route path="/admin" element={<Admin />} />
        <Route path="/user/userreserve/:role" element={<UserReserve />} />
        <Route path="/user" element={<User />} />
        <Route path="/user/reservedetails/:date" element={<ReserveDetails />} />
        <Route path="/user/missolicitudes" element={<MisSolicitudes />} />
        <Route path="/owner" element={<Owner />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/calendar" element={<Calendar />} />
        <Route path="/parking" element={<Parking />} />
        <Route path="/userrole" element={<UserRole />} />
        <Route path="/reserve" element={<Reserve />} />
      </Routes>
    </BrowserRouter>
  );
}
export default Index;
