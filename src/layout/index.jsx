import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomeEnter from '../pages/HomeEnter';
import Admin from '../pages/Admin';
import User from '../pages/User';
import Owner from '../pages/Owner';
import '../App.css'
import SolicitarReserva from '../components/SolicitarReserva';
import MisSolicitudes from '../components/MisSolicitudes'
import Mapa from '../components/Mapa'

function Index() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeEnter />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/user" element={<User />} />
        <Route path="/user/solicitarreserva" element={<SolicitarReserva />} />
        <Route path="/user/missolicitudes" element={<MisSolicitudes />} />
        <Route path="/user/mapa" element={<Mapa />} />
        <Route path="/owner" element={<Owner />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Index;
