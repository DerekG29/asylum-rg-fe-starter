import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();
  return (
    <button
      className="login-button"
      onClick={() => loginWithRedirect()}
    >
      Log In
    </button>
  );
};

export default LoginButton;

/*
https://undefined/authorize?redirect_uri=http%3A%2F%2Flocalhost%3A3000&scope=openid%20profile%20email&response_type=code&response_mode=query&state=STZkbnVPeGpNVDFsVVZmYjc2UUl%2BOUNwWVpMfjVsM2ZhUERjaUU1U0R4fg%3D%3D&nonce=SnZoY1BfcDJabjBjRDVpT2ZIZHFfOUF4OGJrNGNRb0VFYWhmcGlMV1EwMQ%3D%3D&code_challenge=3px9fwCl7H0A72Ta-5wJpt4Yp9Lh4Ont2QNLwM4W7eo&code_challenge_method=S256&auth0Client=eyJuYW1lIjoiYXV0aDAtcmVhY3QiLCJ2ZXJzaW9uIjoiMS4xMi4xIn0%3D
*/