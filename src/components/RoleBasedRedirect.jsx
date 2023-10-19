import { useAuth0 } from '@auth0/auth0-react';
import { Redirect } from 'react-router-dom';

function RoleBasedRedirect() {
  const { user, isAuthenticated } = useAuth0();

  if (isAuthenticated) {
    if (user["http://localhost:8080/api/v1/roles"].includes("administrador")) {
      return <Redirect to="/admin" />;
    } else if (user["http://localhost:8080/api/v1/roles"].includes("propietario")) {
      return <Redirect to="/owner" />;
    } else if (user["http://localhost:8080/api/v1/roles"].includes("solicitante")) {
      return <Redirect to="/requester" />;
    }
  }

  return null;
}
export default RoleBasedRedirect;