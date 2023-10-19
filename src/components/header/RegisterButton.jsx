import React from 'react'
import { useAuth0 } from '@auth0/auth0-react';

const RegisterButton = () => {
    const {loginWindowRedirect}=useAuth0();
  return (
    <button
    onClick={()=>loginWindowRedirect({
        appState: {
            returnTo:window.location.pathname
        },
        authorizationParams: {
            screen_hint:"signup"
        }
    })}>Register</button>
    )
}

export default RegisterButton