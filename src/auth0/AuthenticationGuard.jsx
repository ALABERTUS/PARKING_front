/*import React from 'react';
import { withAuthenticationRequired} from "@auth0/auth0-react";
import PropTypes  from 'prop-types';

const AuthenticationGuard = ({ Component }) => {
  const Component = withAuthenticationRequired(Component, {
    onRedirecting: () => (
      <div>Redireccionando...</div>
    )
  })
  AuthenticationGuard.propTypes = {
    component: PropTypes.object
  }
  return <Component />
}

export default AuthenticationGuard;
/*
import React from 'react';
import { withAuthenticationRequired } from "@auth0/auth0-react";
import PropTypes from 'prop-types';

export const AuthenticationGuard = ({ component }) => {
  const Component = withAuthenticationRequired(component, {
    onRedirecting: () => <div>Redireccionando...</div>
  });

  return <Component />;
}

AuthenticationGuard.propTypes = {
  component: PropTypes.elementType
};


*/
import React from 'react';
import { withAuthenticationRequired } from "@auth0/auth0-react";

const AuthenticationGuard = ({ children }) => {
  const AuthenticatedComponent = withAuthenticationRequired(() => children, {
    onRedirecting: () => <div>Redireccionando...</div>,
  });

  return <AuthenticatedComponent />;
};

export default AuthenticationGuard;

