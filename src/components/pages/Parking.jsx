import { useAuth0 } from "@auth0/auth0-react";
import axios from "axios";
import { useEffect, useState } from "react";

const Parking = () => {
    const { user } = useAuth0();
    const { getAccessTokenSilently } = useAuth0();
    const [parkings, setParkings] = useState([]);
    
    useEffect(() => {
        const updateParkingList = async () => {
            try {
                const token = await getAccessTokenSilently({
                    authorizationParams: {
                        audience: import.meta.env.VITE_AUDIENCE
                    }
                })
                console.log(token)
                const response = await axios.get(
                    `${import.meta.env.VITE_SERVER_URL}`, 
                    {
                        headers: {
                            Authorization: `Bearer ${token}`
                        }
                    }
                );
                setParkings(response.data);
                console.error(response.data);
                console.log(user);
            } 
            catch (error) {
                console.error(error);   
            }
        };
        updateParkingList();
    }, [user, getAccessTokenSilently]);

    const isAdmin = (user) => {
        if (user["https://parkinAPI/roles"][0] == "administrador") {
            return true;
        }
    }

    return (
        <div className=''> {
            isAdmin() && (
                
            )
        }
    )
}     

    export default Parking;