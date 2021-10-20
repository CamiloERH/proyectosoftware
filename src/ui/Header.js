import React, { useState } from 'react';

import { AppBar, Tab, Tabs, Toolbar, useScrollTrigger } from '@mui/material';
import Box from '@mui/material/Box';
import { Button } from '@mui/material';

import { Link } from 'react-router-dom';

import { useAuth0 } from '@auth0/auth0-react';
import Profile from '../components/Login/Profile/Profile';
import Logout from '../components/Login/Logout';
import Login from '../components/Login/Login';

function ElevationScroll(props) {


    


    const { children } = props;

    const trigger = useScrollTrigger({
      disableHysteresis: true,
      threshold: 0
    });

  
    return React.cloneElement(children, {
      elevation: trigger ? 4 : 0
    });
}

const tabStyle = {
    fontWeight: 500,
    fontSize: "1.2rem",
    textTransform: "none",
    marginX: "0.5rem"
}

export const Header = () => {

    const [value, setValue] = useState(0);

    const handleChange = (e, newValue) => {
        setValue(newValue);
    }
    const {isAuthenticated} = useAuth0();
    
    return (
        <>
            <ElevationScroll >
                <AppBar position="fixed">
                    <Toolbar disableGutters sx={{marginY: 2}}>
                        <Tabs 
                            value={value}
                            onChange={handleChange} 
                            indicatorColor="primary"
                            textColor="inherit"  
                            sx={{marginLeft: 'auto', paddingX: 5}}
                        >
                             <Tab 
                                component={Link} to="/" 
                                label="Home"
                                sx={tabStyle}
                            />
                            <Tab 
                                component={Link} to="/services" 
                                label="Servicios"
                                sx={tabStyle}
                            />
                            <Tab 
                                component={Link} to="/contact" 
                                label="Contacto"
                                sx={tabStyle}
                            />
                            <Tab 
                                component={Link} to="/condiciones" 
                                label="Condiciones"
                                sx={tabStyle}
                            />
                        </Tabs>   

                        {isAuthenticated ? (
                        <>
                            <Profile/>
                            <Logout/>
                        </>
                        ) : (
                                <Login/>

                            )}




                        <Button 
                            component={Link} to="/schedules" 
                            variant="contained" 
                            color="warning"
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
                            Agendar Hora
                        </Button>
 
                    </Toolbar>                  
                </AppBar>
            </ElevationScroll>
            <Box sx={{minHeight: 90}}/>
        </>
        
    )
}
