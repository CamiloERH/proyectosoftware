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



export const Horarios = () => {


    const horarioContext  = useContext(HorarioContext);

    const { horas, obtenerHorarios } = horarioContext;

    useEffect(() => {
        obtenerHorarios();
        // eslint-disable-next-line
    }, []);

    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };
    
    const handleClose = () => {
    setOpen(false);
    };

    const [servicio, setServicio] = useState(1);

    const handleChange = (e) => {
        setServicio(parseInt(e.target.value));
    }

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
                                value={servicio}
                                onChange={handleChange}
                                row
                            >
                                <FormControlLabel value={1} control={<Radio />} label="Servicio 1" />
                                <FormControlLabel value={2} control={<Radio />} label="Servicio 2" />
                                <FormControlLabel value={3} control={<Radio />} label="Servicio 3" />
                            </RadioGroup>
                            <FormLabel component="legend">Horas disponibles: </FormLabel>
                            <List>
                                {
                                    horas.map((hora, idx) => 
                                        (
                                            hora.Servicio === servicio 
                                            ?  
                                            <Horas
                                                key={idx}
                                                servicio={hora.Servicio}
                                                fecha={hora.Fecha}
                                                handleClickOpen={handleClickOpen}
                                            /> 
                                            : null)
                                    )
                                }
                            </List>
                        </FormControl>

                        <Dialog open={open} onClose={handleClose}>
                            <DialogTitle>Agendar</DialogTitle>
                            <DialogContent>
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
                                <Button onClick={handleClose}>Agendar</Button>
                            </DialogActions>
                        </Dialog>
                    </Grid>
                </Grid>

            </Container>
        </>
    );
}
