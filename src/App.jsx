import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/pages/Home'
import About from './components/About';
import Login from './components/Login'
import Calendar from './components/Calendar'

import './App.css'


function App() {
 

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
