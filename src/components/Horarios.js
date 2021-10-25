import React, { useState, useContext, useEffect } from 'react';

import { 
    Container, 
    Paper, 
    List, 
    Grid, 
    FormControl, 
    FormLabel, 
    FormControlLabel, 
    Radio, 
    RadioGroup, 
    Alert, 
    Stack, 
    Dialog, 
    DialogTitle, 
    DialogContent, 
    DialogContentText, 
    TextField, 
    Button, 
    DialogActions   } 
from '@mui/material';

import HorarioContext from '../context/horarios/horarioContext';
import { Horas } from './Horas';



import { useAuth0 } from '@auth0/auth0-react';
import Login from './Login/Login';


export const Horarios = () => {

    const horarioContext  = useContext(HorarioContext);

    const { horas, 
        servicioSeleccionado,
        obtenerServicios, 
        seleccionarServicio,
        servicios, 
        obtenerHorarios, 
        agendarHora } = horarioContext;

    useEffect(() => {
        obtenerServicios();
        //eslint-disable-next-line  
    }, []);

    const [open, setOpen] = useState(false);

    const [form, setForm] = useState({
        idHora: "",
        idCliente: "614fcfb969e1ed415d389054"
    });

    const handleClickOpen = (idHora) => {
        setOpen(true);
        setForm({
            ...form,
            idHora
        });
    };
    
    const handleClose = () => {
        setOpen(false);
        setForm({
            ...form,
            idHora: null
        });
    };

    const handleChange = (e) => {
        seleccionarServicio(e.target.value);
        obtenerHorarios(e.target.value);
    }

    const handleSubmit = () => {
        agendarHora(form.idHora, form.idCliente);
        handleClose();
    }



    const {isAuthenticated} = useAuth0();


    return (
        <div>
        {
            isAuthenticated ? (
                <>
            <Grid 
                container 
                spacing={0} 
                direction="column"
                justifyContent="center" 
                alignItems="center"
            >
                <Grid item md={12}>
                    <Stack sx={{ marginTop: 2, width: '100%' }} spacing={2}>
                        <Alert severity="info">
                            Selecciona un servicio para listar las horas disponibles,
                            luego selecciona agendar en la hora deseada.
                            Por último se reconfirmaran tus datos.
                        </Alert>
                    </Stack>
                </Grid>
            </Grid>
                
            <Container 
                component={Paper} 
                elevation={5}
                sx={{
                    padding: 5, 
                    marginY: 5, 
                    display: 'flex', 
                    justifyContent: 'center'
                }}
                maxWidth="sm"
            >
                <Grid 
                    container 
                    spacing={0} 
                    direction="column"
                    justifyContent="center" 
                    alignItems="center"
                >
                    <Grid item md={12}>
                        <FormControl component="fieldset">
                            <FormLabel component="legend">Seleccionar Servicio: </FormLabel>
                            <RadioGroup
                                aria-label="servicio"
                                name="controlled-radio-buttons-group"
                                value={servicioSeleccionado}
                                onChange={handleChange}
                                row
                            >
                                {servicios.map((servicio) => (
                                    <FormControlLabel 
                                        key={servicio._id}
                                        value={servicio._id} 
                                        control={<Radio />} 
                                        label={servicio.nombre} 
                                    />
                                ))}
                            </RadioGroup>
                            <FormLabel component="legend">Horas disponibles: </FormLabel>
                            <List>
                                {
                                    horas.map((hora) => 
                                        (
                                            <Horas
                                                key={hora._id}
                                                fecha={hora.fecha}
                                                handleClickOpen={() => handleClickOpen(hora._id)}
                                            /> 
                                    ))
                                }
                            </List>
                        </FormControl>

                        <Dialog open={open} onClose={handleClose}>
                            <DialogTitle>Agendar</DialogTitle>
                            <DialogContent>
                            <DialogContentText>
                                1-Se agenda con un previo abono del 50% el cual no es reembolsable solo en caso de informar 48 horas antes que no podrá asistir.                             
                            </DialogContentText>
                            <DialogContentText>
                                Solo se aceptarán 5 minutos de retraso estando en la puerta (después de los 5 minutos la hora quedará inmediatamente cancelada sin derecho a reclamos).                          
                            </DialogContentText>
                            <DialogContentText>
                                Como parte del procedimiento puede llegar a existir irritación ocular, dolor ocular, comezón en los ojos, malestar, y en casos excepcionales infección ocular.                               
                            </DialogContentText>
                            <DialogContentText>
                                La persona que se realize el tratamiento debe ser mayor de edad, en caso contrario debe haber un padre o tutor que acepte todas las condiciones antes escritas.                             
                            </DialogContentText>
                            <DialogContentText>
                                Para el caso de la extensiones de pestañas, se tendra que estar 180 minutos aproximadamente con los ojos cerrados durante el procedimiento. También debe estar acostada en posición reclinada.                              
                            </DialogContentText>
                            <DialogContentText>
                                Está por agendar la hora, confirme su número telefonico.                                
                            </DialogContentText>

                            <TextField
                                autoFocus
                                margin="dense"
                                label="Número"
                                type="tel"
                                fullWidth
                                variant="standard"
                            />
                            </DialogContent>
                            <DialogActions>
                                <Button onClick={handleClose}>Cancelar</Button>
                                <Button onClick={() => {handleSubmit();}}>Agendar</Button>
                            </DialogActions>
                        </Dialog>
                    </Grid>
                </Grid>

            </Container>
        </>
                
            ) : (
                <div className="container">
                    <h1>Por favor inicie sesion o registrese</h1>
                    <Login/>
                    </div>
            )
        }

        </div>
        
    );
}
