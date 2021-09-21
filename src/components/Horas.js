import React from 'react';

import { format } from 'date-fns';
import { es } from 'date-fns/locale';

import { ListItem, ListItemText, Paper, Avatar, Button } from '@mui/material';
import { blue } from '@mui/material/colors';

export const Horas = (props) => {

    const {servicio, fecha, handleClickOpen} = props;

    const hora = format(new Date(fecha), 'p', {locale: es});
    const dia = format(new Date(fecha), 'd', {locale: es});
    const fechaCompleta = format(new Date(fecha), 'PP', {locale: es});
    

    return (
        <>
            <ListItem component={Paper} sx={{marginY: 2}}>
                <Avatar sx={{ bgcolor: blue[500] }}>{dia}</Avatar>
                <ListItemText sx={{marginX: 2}} primary={`Servicio ${servicio+1} a las ${hora}`} secondary={`${fechaCompleta}`} />
                <Button 
                    sx={{ 
                        bgcolor: blue[500],
                        '&:hover': {
                            backgroundColor: blue[700]
                        },
                        borderRadius: "50px"
                    }} 
                    variant="contained"
                    onClick={handleClickOpen}
                >
                    Agendar
                </Button>
            </ListItem>
        </>
    )
}
