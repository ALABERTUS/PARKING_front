import React, {useState, useEffect} from 'react'
import {Link } from 'react-router-dom'
import logo from "../pics/logo.png";
import { TiThMenuOutline } from 'react-icons/ti';
import { AiOutlineClose } from 'react-icons/ai';

import './Navbar3.css'

const Navbar3 = () => {
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
                <Link to="/home">Home</Link>
                <Link to="/userrole">UserRole</Link>
                <Link to="/reserve">Reserve</Link>
                <Link to="/about">About</Link>
            
            
        </div>

        <div className="logo">
            <img src={logo} alt="Logo" />
        </div>
    </nav>
    )
}

export default Navbar3