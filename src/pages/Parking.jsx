import React, { useEffect, useState } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import axios from 'axios';
import '../components/About.css';

const Parking = () => {
    const { getAccessTokenSilently, isAuthenticated } = useAuth0();
    const [parkings, setParkings] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const token = await getAccessTokenSilently();
                const response = await axios.get('YOUR_API_ENDPOINT', {  // 请替换 'YOUR_API_ENDPOINT' 为实际的API endpoint
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                });
                setParkings(response.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        if (isAuthenticated) {
            fetchData();
        }
    }, [getAccessTokenSilently, isAuthenticated]);

    return (
        <div className="reverse-information">
            <div className="user-link">
                <h1>Test React Auth0</h1>
                {isAuthenticated ? <LogoutButton /> : <LoginButton />}
                <div>
                    {parkings.map(parking => (
                        <div key={parking.id}>  
                            <h2>{parking.name}</h2>  
                            <p>{parking.description}</p>  
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Parking;




