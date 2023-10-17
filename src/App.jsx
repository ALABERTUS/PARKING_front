import { useState } from 'react'

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home'
import About from './components/About'
import Calendar from './components/Calendar'

import './App.css'
import Login from './Components/Login/Login'


function App() {


  return (
    <>
      <Login/>
    </>
  )


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
    
  )
}

export default App
