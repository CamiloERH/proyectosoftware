import React, { useState, useContext } from 'react';
import { Button, ButtonGroup, Container, Paper, List, Avatar, Grid, Item } from '@mui/material';
import { Horas } from './Horas';
import HorarioContext from '../context/horarios/horarioContext';

export const Horarios = () => {

    const horarioContext  = useContext(HorarioContext);

    const { horas:horasDummy } = horarioContext;

    const [servicio, setServicio] = useState(null);

    return (
        <>
            <Container 
                component={Paper} 
                elevation={5}
                sx={{
                    padding: 5, 
                    marginY: 5, 
                    display: 'flex', 
                    justifyContent: 'center'
                }}
            >

                <Grid
                    container
                    direction="row"
                    justifyContent="center"
                    alignItems="center"
                >

                <ButtonGroup 
                    variant="text" 
                    size="large" 
                    color="primary" 
                    aria-label="servicios"
                    fullWidth
                >
                    <Button onClick={() => setServicio(0)}>Servicio 1</Button>
                    <Button onClick={() => setServicio(1)}>Servicio 2</Button>
                    <Button onClick={() => setServicio(2)}>Servicio 3</Button>
                
                </ButtonGroup>
        
                    <List>
                        {
                            horasDummy.map((hora) => 
                                (
                                    hora.Servicio === servicio 
                                    ?  
                                    <Horas
                                        servicio={hora.Servicio}
                                        hora={hora.Hora}
                                        dia={hora.Fecha.dia}
                                        mes={hora.Fecha.mes}
                                        ano={hora.Fecha.ano}

                                    /> 
                                    : null)
                            )
                        }
                    </List>
                </Grid>
            </Container>
        </>
    );
}
