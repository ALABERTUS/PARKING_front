import { useEffect, useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import axios from "axios";
import './Home.css';

const Home = () => {
  const { isAuthenticated, loginWithRedirect, logout, user } = useAuth0();
  const [apiData, setApiData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:8080/api/v1/Parking");
        setApiData(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="container">
      {!isAuthenticated ? (
        <button className="login-button" onClick={() => loginWithRedirect()}>
          Log in with Google
        </button>
      ) : (
        <button className="logout-button" onClick={() => logout()}>
          Log out
        </button>
      )}

      {apiData && <p>{apiData}</p>}

      {isAuthenticated && (
        <div>
          <h2 className="welcome-message">Welcome, {user.name}!</h2>
          <p className="email">Email: {user.email}</p>
        </div>
      )}
    </div>
  );
};

export default Home;

