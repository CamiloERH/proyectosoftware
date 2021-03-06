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



//import { useAuth0 } from '@auth0/auth0-react';
//import Login from './Login/Login';
import authContext from '../context/autenticacion/authContext';


export const Horarios = () => {

    const horarioContext  = useContext(HorarioContext);
    const { autenticado, usuario } = useContext(authContext);

    const { horas, 
        servicioSeleccionado,
        obtenerServicios, 
        seleccionarServicio,
        servicios, 
        obtenerHorarios, 
        agendarHora } = horarioContext;

    const [form, setForm] = useState({
        idHora: "",
        idCliente: ''
    });

    useEffect(() => {
        if(autenticado && usuario){
            setForm({...form, idCliente: usuario._id});
            obtenerServicios();
        }
        
        //eslint-disable-next-line  
    }, [autenticado, usuario]);

    const [open, setOpen] = useState(false);

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

    // const {isAuthenticated} = useAuth0();


    return (
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
                        Por ??ltimo se reconfirmaran tus datos.
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
                        <Alert severity="info">1-Se agenda con un previo abono del 50% el cual no es reembolsable solo en caso de informar 48 horas antes que no podr?? asistir. </Alert>
                            
                        </DialogContentText>
                        <DialogContentText>
                            <Alert severity="info">2-Solo se aceptar??n 5 minutos de retraso estando en la puerta (despu??s de los 5 minutos la hora quedar?? inmediatamente cancelada sin derecho a reclamos).</Alert>
                            
                        </DialogContentText>
                        <DialogContentText>
                                <Alert severity="info">3-Como parte del procedimiento puede llegar a existir irritaci??n ocular, dolor ocular, comez??n en los ojos, malestar, y en casos excepcionales infecci??n ocular.</Alert>
                                                            
                        </DialogContentText>
                        <DialogContentText>
                                <Alert severity="info">4-La persona que se realize el tratamiento debe ser mayor de edad, en caso contrario debe haber un padre o tutor que acepte todas las condiciones antes escritas.</Alert>
                            
                        </DialogContentText>
                        <DialogContentText>
                                <Alert severity="info">5-Para el caso de la extensiones de pesta??as, se tendra que estar 180 minutos aproximadamente con los ojos cerrados durante el procedimiento. Tambi??n debe estar acostada en posici??n reclinada.</Alert>
                            
                        </DialogContentText>
                        <DialogContentText>
                                <Alert severity="warning">Al presionar agendar, usted estar?? aceptando todas las condiciones descritas</Alert>
                                                            
                        </DialogContentText>

                        <TextField
                            autoFocus
                            margin="dense"
                            label="N??mero"
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
    );
}
