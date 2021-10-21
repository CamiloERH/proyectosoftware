import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Button } from '@mui/material';

const Logout = () => {
  const { logout } = useAuth0();

  return (

    <Button 
    variant="contained" 
    color="info"
    onClick={() => logout({ returnTo: window.location.origin })}
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
    Logout
    
</Button>

  );
};

export default Logout;