import {useState, useEffect} from 'react'
import {Link } from 'react-router-dom'
import logo from './images/logo.png'
import { TiThMenuOutline } from 'react-icons/ti';
import { AiOutlineClose } from 'react-icons/ai';

import './Navbar.css'

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => {
        setIsOpen(prevState => !prevState);
        console.log("Is menu open:", !isOpen);
    }

    useEffect(() => {
        console.log("Is menu open:", isOpen);
    }, [isOpen]);

    return (
    <nav>
        <div className = "menu-toggle" onClick = {toggleMenu}>
            {isOpen ?
                <AiOutlineClose size={48} color="white" /> : 
                <TiThMenuOutline size={48} color="white" />
            }
        </div>
        
        <div className={`menu ${isOpen ? 'show' : ''}`}>
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/login">Login</Link>
                <Link to="/calendar">Calendar</Link>
        
               
        </div>

        <div className="logo">
            <img src={logo} alt="Logo" />
        </div>
    </nav>
    )
}

export default Navbar