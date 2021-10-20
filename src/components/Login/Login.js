import "./Login.css";
import React from "react";
import { Button } from '@mui/material';

import { useAuth0 } from "@auth0/auth0-react";


const Login = (props) => {

    const { loginWithRedirect } = useAuth0();
    return <Button 
    variant="contained" 
    color="success"
    onClick={() => loginWithRedirect()}
    sx={{
        borderRadius: "50px",
        marginLeft: "25px",
        marginRight: "25px",
        height: "45px",
        fontFamily: "Pacifico",
        textTransform: "none",
        fontSize: "1.2rem"
    }}
>
    Login
    
</Button>;

}

export default Login;
