import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Auth0Provider } from "@auth0/auth0-react";

ReactDOM.render(
    <Auth0Provider
        domain="dev-78f5j5xm.us.auth0.com"
        clientId="SdBAlkKmhhNcqEjlLhejLUNUbsoU7nE4"
        redirectUri={window.location.origin}
    >
    <App />
    </Auth0Provider>,
    document.getElementById('root')

);

