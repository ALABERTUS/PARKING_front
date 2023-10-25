import { BrowserRouter, Routes, Route } from 'react-router-dom';
import '../App.css'
import Auth0ProviderWithNavigate from './Auth0ProviderWithNavigate.jsx';

import HomeEnter from '../pages/HomeEnter';
import Admin from '../pages/Admin';
import User from '../pages/User';
import Owner from '../pages/Owner';
import Parking from '../pages/Parking'

import UserReserve from '../components/UserReserve';
import MisSolicitudes from '../components/MisSolicitudes'
import About from '../components/About'
import Home from '../components/Home'
import Login from '../components/Login'
import Calendar from '../components/Calendar'
import ReserveDetails from '../components/ReserveDetails'
import Reserve from '../components/Reserve'
import UserRole from '../pages/UserRole'

function Index() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeEnter />} /> 
        {/* Other routes */}
        <Route path="/admin" element={<Admin />} />
        <Route path="/user/userreserve/:role" element={<UserReserve />} />
        <Route path="/user" element={<User />} />
        <Route path="/user/reservedetails/:date" element={<ReserveDetails />} />
        <Route path="/user/missolicitudes/:role" element={<MisSolicitudes />} />

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
