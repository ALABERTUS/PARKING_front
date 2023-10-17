<<<<<<< HEAD
import { useState } from 'react'
=======
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home'
import About from './components/About';
import Login from './components/Login'
import Calendar from './components/Calendar'
>>>>>>> f3c0558e4884f7a61ab6c03d838a0eed1d09c729

import './App.css'
import Login from './Components/Login/Login'


function App() {
<<<<<<< HEAD

  return (
    <>
      <Login/>
    </>
=======
 

  return (

     
     
      <Router>
        <Navbar />
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
                <Route path="/login" element={<Login />} />
                <Route path="/calendar" element={<Calendar />} />
              
                 
    </Routes>
    </Router>
   
    
>>>>>>> f3c0558e4884f7a61ab6c03d838a0eed1d09c729
  )
}

export default App
