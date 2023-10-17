/*import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SolicitarReserva from './components/SolicitarReserva'; 
import MisSolicitudes from './components/MisSolicitudes'; 
import Mapa from './components/Mapa';
import Navbar from './components/Navbar';
import About from './components/About';
import Login from './components/Login';
import Calendar from './components/Calendar';
import HomeEnter from './pages/HomeEnter';  
import Admin from './pages/Admin';
import Owner from './pages/Owner.jsx';
import User from './pages/User';

import './App.css';

function App() {
  return (
    <Router>
        <Routes>
            <Route path="/" element={<HomeEnter />} />
            <Route path="/admin" element={<Admin />} />
            <Route path="/owner" element={<Owner />} />
            <Route path="/user" element={<User />} />
            <Route path="/user/solicitarreserva" element={<SolicitarReserva />} />
            <Route path="/user/missolicitudes" element={<MisSolicitudes />} />
            <Route path="/user/mapa" element={<Mapa />} />

            <Route path="/about" element={<WithNavbarLayout><About /></WithNavbarLayout>} />
            <Route path="/login" element={<WithNavbarLayout><Login /></WithNavbarLayout>} />
            <Route path="/calendar" element={<WithNavbarLayout><Calendar /></WithNavbarLayout>} />
        </Routes>
    </Router>
  );
}

function WithNavbarLayout({ children }) {
  return (
    <div>
      <Navbar />
      {children}
    </div>
  );
}

export default App;
*/