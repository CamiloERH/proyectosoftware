import React, { useContext, useEffect } from 'react';
import { Container, Paper, Avatar, List, ListItem, ListItemText, Typography } from '@mui/material';

import { format } from 'date-fns';
import { es } from 'date-fns/locale';

import horarioContext from '../context/horarios/horarioContext';
import authContext from '../context/autenticacion/authContext';

import { blue } from '@mui/material/colors';


const Agenda = () => {
    const { agendas, obtenerAgendas } = useContext(horarioContext);
    const { autenticado, usuario } = useContext(authContext);
    useEffect(() => {
        if(autenticado){
            obtenerAgendas(usuario._id);
        }
        //eslint-disable-next-line  
    }, [autenticado]);


 
    return (  
        <Container maxWidth="sm">
            <List>
                {
                    agendas.map((agenda) => (
                        <ListItem component={Paper} sx={{marginY: 2}}>
                        <Avatar sx={{ bgcolor: blue[500] }}>{format(new Date(agenda.idHora.fecha), 'd', {locale: es})}</Avatar>
                        <ListItemText sx={{marginX: 2}} 
                            primary={`Hora a las ${format(new Date(agenda.idHora.fecha), 'p', {locale: es})}`} 
                            secondary={`${format(new Date(agenda.idHora.fecha), 'PP', {locale: es})}`} 
                        />
                        <Typography variant="h6" component="h2">
                        {agenda.idHora.idServicio.nombre}
                        </Typography>
                        </ListItem>
                        
                    ))
                }

            </List>
        </Container>
    );
}
 
export default Agenda;