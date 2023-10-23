import { useState, useEffect } from 'react';
import GoogleLogin from 'react-oauth-google';

const Home = () => {
  const [role, setRole] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLoginSuccess = async (response) => {
    try {
      const token = response.token;
      const apiResponse = await fetch('URL_DE_TU_API', {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (apiResponse.ok) {
        const data = await apiResponse.json();
        const userRole = data.role;
        setRole(userRole);
        setIsLoggedIn(true);
      } else {
        console.error('Error al obtener el rol de la API');
      }
    } catch (error) {
      console.error('Error al obtener el rol:', error);
    }
  };

  const handleLoginFailure = (error) => {
    console.error(error);
  };

  useEffect(() => {
    if (isLoggedIn) {
      if (role === 'solicitante') {
        // Redirigir al usuario a la página de solicitante
      }else if (role === 'administrador'){ 
        // Redirigir al usuario a la página de administrador 
      }else if (role === 'propietario') {
        // Redirigir al usuario a la página de propietario
      }
    }
  }, [role, isLoggedIn]);

  return (
    <div>
      <h1>Inicia sesión con tu cuenta de Google</h1>
      <GoogleLogin
        clientId="URL_DE_TU_CLIENT_ID"
        onSuccess={handleLoginSuccess}
        onFailure={handleLoginFailure}
        buttonText="Iniciar sesión con Google"
      />
    </div>
  );
};

export default Home;
