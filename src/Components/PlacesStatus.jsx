import React, { useState, useEffect } from "react";
import './PlacesStatus.css'

const PlacesStatus = ({numberOfPlaces, setNewPlace}) => {

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

    const handlePlace = (newPlaceSelected) => {
        console.log('newPlaceSelected', newPlaceSelected)
        setNewPlace(newPlaceSelected);
    }

    return (
        <>
            <div className="places-container">
                <div className="places-list">
                    {places.map((place) => ( 
                        <div className="place-button"
                             style={{ backgroundColor: place.color}}
                             onClick={(e) => handlePlace(place)}>
                            <span> </span>{place.numberOfPlace}
                        </div>
                    ))}
                </div>
            </div>
        </>
    )

}

export default PlacesStatus;