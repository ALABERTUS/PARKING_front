/*import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Import your components
import SolicitarReserva from '../components/SolicitarReserva'; 
import MisSolicitudes from '../components/MisSolicitudes'; 
import Mapa from '../components/Mapa';
import Navbar1 from '../components/Navbar1';
import About from '../components/About';
import Login from '../components/Login';
import Calendar from '../components/Calendar';
import HomeEnter from '../pages/HomeEnter';  
import Admin from '../pages/Admin';
import Owner from '../pages/Owner';
import User from '../pages/User';

function WithNavbarLayout({ children }) {
    return (
        <div>
            <Navbar1 />
            {children}
        </div>
    );
}
export const router {
ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <Router>
            <Routes>
                <Route path="/" element={<HomeEnter />} />
                <Route path="/admin" element={<Admin />} />
                <Route path="/owner" element={<Owner />} />
                <Route path="/user" element={<WithNavbarLayout><User /></WithNavbarLayout>} />
                <Route path="/user/solicitarreserva" element={<WithNavbarLayout><SolicitarReserva /></WithNavbarLayout>} />
                <Route path="/user/missolicitudes" element={<WithNavbarLayout><MisSolicitudes /></WithNavbarLayout>} />
                <Route path="/user/mapa" element={<WithNavbarLayout><Mapa /></WithNavbarLayout>} />
                <Route path="/about" element={<About />} />
                <Route path="/login" element={<Login />} />
                <Route path="/calendar" element={<Calendar />} />
            </Routes>
        </Router>
    </React.StrictMode>
)};
*/
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

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Index />
  </React.StrictMode>
);

export default Index;
