import React from 'react';
import { withAuthenticationRequired} from "@auth0/auth0-react";
import PropTypes  from 'prop-types';

const AuthenticationGuard = ({ component }) => {
  const Component = withAuthenticationRequired(component, {
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

