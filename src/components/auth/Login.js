import React, { useEffect, useContext } from 'react';

import { Alert, AlertTitle, Button, Grid, Stack, TextField, Typography, Fade } from "@mui/material";
import PersonIcon from '@mui/icons-material/Person';

import { Link } from 'react-router-dom';

import AuthContext from '../../context/autenticacion/authContext';

import useForm from '../../hooks/useForm';
import alertaContext from '../../context/alertas/alertaContext';

const Login = (props) => {

    //extraer los valores del context
    const { alerta, mostrarAlerta } = useContext(alertaContext);

    const authContext = useContext(AuthContext)
    const { mensaje, autenticado, iniciarSesion, usuarioAutenticado } = authContext;

    useEffect(() => {

        if(autenticado){
            props.history.push('/schedules');
        } else {
            usuarioAutenticado();
        }
        if(mensaje){
            mostrarAlerta(mensaje.msg, mensaje.categoria);
        }
        //eslint-disable-next-line
    }, [mensaje, autenticado, props.history]);

    const initialValues = {
        email: '',
        password: ''
    }

    const { values, handleInputChange } = useForm(initialValues);
    const { email, password } = values;

    const onSubmit = (e) => {
        e.preventDefault();
        if(email.trim() === '' || password.trim() === ''){
            mostrarAlerta('Todos los campos son obligatorios', 'error');
            return;
        }

        iniciarSesion({email, password});
    }
    
    return (  
        
        <Grid
            container
            justifyContent="center"
            alignItems="center"
            direction="column"
        >
            <Fade in={Boolean(alerta)} timeout={250}
                sx={{width: {xs: '90%', sm: '80', md: '25%', }}}
            >
                <Alert variant="outlined" severity="error">
                {alerta?.msg}
                </Alert>
            </Fade>
            <Alert severity="info"
                sx={{width: {xs: '90%', sm: '80', md: '25%', }}}
            >
                    <AlertTitle>Información:</AlertTitle>
                    Inicia sesión para realizar la acción
            </Alert>
             
            <Stack
                component="form"
                spacing={2}
                sx={{
                    width: {xs: '90%', sm: '80', md: '25%', },
                    alignItems: 'center'
                }}
                onSubmit={onSubmit}
                direction="column"
            >
                
                <PersonIcon 
                    color="primary"
                    sx={{marginX: 'auto', fontSize: '14em'}} 
                />
                <TextField
                    fullWidth
                    variant="outlined"
                    label="Email"
                    name="email"
                    type="email"
                    value={values.email}
                    onChange={handleInputChange}
                />
                <TextField
                    fullWidth
                    variant="outlined"
                    label="Password"
                    name="password"
                    type="password"
                    value={values.password}
                    onChange={handleInputChange}
                />   
                <Button 
                    fullWidth
                    variant="outlined"
                    type="submit" 
                >
                    Ingresar
                </Button>
                <Stack mt={2} direction="row" spacing={2}>
                    <Typography sx={{my: 'auto'}} variant="overline" gutterBottom>
                        ¿No estas registrado?
                    </Typography>
                    <Button
                        component={Link}
                        to={'/nueva-cuenta'}
                    >
                        Registrarse
                    </Button>   
                </Stack> 
            </Stack> 
        </Grid>
 
    );
}
 
export default Login;