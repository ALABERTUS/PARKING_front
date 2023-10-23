import React, { useState } from 'react';
import PlacesStatus from '../Components/PlacesStatus';
import Navbar from '../Components/Navbar';

import './Places.css'

const Places = () => {
    return (
        <>
            <div> 
                <Navbar onlyShowLogo={true}/>
            </div>
            <div className='places-container'>
                <div className='places-title'>
                    <h4> 12 octubre 2023 </h4>
                    <p> Sótano 1</p>
                </div>
                <div className='places-list'>
                    <PlacesStatus numberOfPlaces={71}/>
                </div> 
                <div className='places-title mt-20'>
                    <h4> 12 octubre 2023 </h4>
                    <p> Sótano 2</p>
                </div>
                <div className='places-list'>
                    <PlacesStatus numberOfPlaces={19}/>
                </div> 
             </div>
        </>
    )
}

export default Places;