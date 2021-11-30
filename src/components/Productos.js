import Card from '@mui/material/Card';

import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';

import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { Grid } from '@mui/material';
import React, { useEffect, useState } from 'react';




const Productos = () => {
    
    const [productos,setProductos] = useState('')

    useEffect(() => {
        const Todo = async() => {
            const respuesta = await fetch('https://agendaappserver.herokuapp.com/api/productos')
            const data = respuesta.json();
            data.then(data => setProductos(data.productos))

        }
        Todo()
    },[])  

   

    
    return(
        productos ? (
            <Container variant="outlined">
            <Grid container>
            {
                productos.map((val,key)=>(
                    <Card key={key} sx={{ maxWidth: 345 }}>
                            <CardMedia
                                component="img"
                                height="400"
                                image={val.imagen}
                                alt="green iguana"
                                
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                {val.nombre}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                {val.descripcion}
                                </Typography>
                            </CardContent>
                            <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                Precio: {val.valor}
                                </Typography>
                            </CardContent>
                            
                        </Card> 
                ))
            }                     
                        
 
            </Grid>


        
        </Container>
        ) : (
            <div></div>
        )
    )
}

export default Productos;