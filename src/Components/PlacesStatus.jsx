import React, { useState, useEffect } from "react";
import './PlacesStatus.css'

const PlacesStatus = ({numberOfPlaces}) => {

    const [places, setPlaces] = useState([]);

    useEffect(() => {
        const generatePlaces = () => {
            const placesArray = []
            for (let i = 0; i <= numberOfPlaces; i++) {
                let place = {
                    numberOfPlace: i,
                    color: i % 2 === 0 ? '#68F35C' : '#FF0'
                }
                placesArray.push(place);
            }
            return placesArray;
        }
        const generatedPlaces = generatePlaces();
        setPlaces(generatedPlaces);
      }, [numberOfPlaces]);

    return (
        <>
            <div className="places-container">
                <div className="places-list">
                    {places.map((place) => ( 
                        <div className="place-button" style={{ backgroundColor: place.color}}>
                            {place.numberOfPlace}
                        </div>
                    ))}
                </div>
            </div>
        </>
    )

}

export default PlacesStatus;