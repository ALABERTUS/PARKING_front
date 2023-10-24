import React, { useState } from 'react';
import PlacesStatus from '../Components/PlacesStatus';
import Navbar from '../Components/Navbar';

import './Places.css'
import Calendar from '../Components/Calendar';
import { Link } from 'react-router-dom';

const Places = () => {

    const [dateSelected, setDateSelected] = useState();
    const [place, setPlace] = useState(); 

    const getDateSelected = (newDate) => {
        setDateSelected(newDate);
    }

    const getPlaceSelected = (newPlace) => {
        setPlace(newPlace);
    }

    const handleCreateReservation = () => {

    }

    return (
        <>
            <div> 
                <Navbar onlyShowLogo={true}/>
            </div>

            {(!dateSelected && !place) && (
                <Calendar setNewDate={getDateSelected}/>
            )} 
            
            {(dateSelected && !place) && (
                <div className='places-container'>
                    <div className='places-title'>
                        <h4> 12 octubre 2023 </h4>
                        <p> Sótano 1</p>
                    </div>
                    <div className='places-list'>
                        <PlacesStatus numberOfPlaces={71} setNewPlace={getPlaceSelected}/>
                    </div> 
                    <div className='places-title mt-20'>
                        <h4> 12 octubre 2023 </h4>
                        <p> Sótano 2</p>
                    </div>
                    <div className='places-list'>
                        <PlacesStatus numberOfPlaces={19} setNewPlace={getPlaceSelected}/>
                    </div> 
                </div>
            )}

            {(dateSelected && place) && (
            <div className='places-page'> 
                <div className='places-container-2'>
                    <div className='places-body' style={{backgroundColor: place.color}}>
                        <p>Sotano 1</p>
                        <p>Plaza {place.numberOfPlace}</p>
                    </div>

                <div className='places-footer mt-60'>
                    <div className='places-button-container'>
                        <button onClick={handleCreateReservation}> <Link to={"/admin"}> Crear reserva </Link></button>
                    </div>
                </div>
                </div>
            </div>
            )}
        </>
    )
}

export default Places;