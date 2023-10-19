import { useAuth0 } from '@auth0/auth0-react';
import axios from 'axios';
import { useEffect, useState } from 'react';

const Parking = () => {
    const {getAcessTokensilently} = useAuth0();
    const [parkings,setParkings] = useState([]);

    useEffect (() => {
        const updateParkingList = async() => {
            try {
                const token = await getAcessTokensilently({
                    authorizationParams: {
                        audience: import.meta.env.VITE_AUDIENCE
                    }
                })
                console.log(token)
                const response = await axios.get(
                    `${import.meta.env.VITE_API_SERVER_URL}`,
                );
                setParkings(response.data);
                console.error(response.data);
            }
            catch(error){
                console.error(error);
            }
        };
        updateParkingList()
    },[]);

    return(
        <div className="">
            {
            parkings.map((parking) => (
                <div key={parking.id}>
                    <img src={parking.imageURL} alt="..."/>
                    <div>
                        <h5>Title: {parking.title}</h5>
                        <p>{parking.description}</p>
                    </div>
                </div>
            ))
        }
    </div>
);
}
export default Parking;



