import { ListItem, ListItemText, Paper, Avatar, Button } from '@mui/material';
import React from 'react';
import { blue, deepOrange } from '@mui/material/colors';

import SendIcon from '@mui/icons-material/Send';

export const Horas = (props) => {

    const {servicio, hora, dia, mes, ano} = props;

    return (
        <>
            <ListItem component={Paper} sx={{marginY: 2}}>
                <Avatar sx={{ bgcolor: blue[500] }}>{dia}</Avatar>
                <ListItemText sx={{marginX: 2}} primary={`Servicio ${servicio+1} a las ${hora}`} secondary={`${mes} ${dia}, ${ano}`} />
                <Button 
                    sx={{ 
                        bgcolor: blue[500],
                        '&:hover': {
                            backgroundColor: blue[700]
                        },
                        borderRadius: "50px"
                    }} 
                    variant="contained" 
                    endIcon={<SendIcon />}
                >
                    Agendar
                </Button>
            </ListItem>
        </>
    )
}
