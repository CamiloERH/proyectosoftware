import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { Grid } from '@mui/material';




const Productos = (params) => {
    const img1 = "https://i.ibb.co/y45ZWkb/1.jpg"
    const img2 = "https://i.ibb.co/bHmWyV3/2.jpg"
    const img3 = "https://i.ibb.co/xChX6wF/3.jpg"
    const img4 = "https://i.ibb.co/DWHZWxY/4.jpg"
    const title1= "Parches de hidrogel"
    const title2 = "Adhesivo Rosse Advanced"
    const title3 = "Adhesivo Dlux Flawless"
    const title4 = "Lip Brushes"
    const data1 = "Fundamentales para proteger las pestañas naturales inferiores durante la aplicacion de extensiones"
    const data2 = "Ethyl Cianoacrilato. Secado: super rapido 0.5 a 1 segundo. Humedad: 50-70%. Temperatura 18-28 °C. Retencion: 30 días"
    const data3 = "Adhesivo Dlux Flawless con baja emision de vapores, muy alta retencion, solo para profesionales con experiencia. Ideal para tecnicas clasicas y volumen"
    const data4 = "Se utilizan para la aplicación de primeras, espumas limpiadoras, removedoras y productos de lifting. 50 Unidades. Color: Rosado"
    
    return(
        <Container variant="outlined">
            <Grid container>
                        <Card sx={{ maxWidth: 345 }}>
                            <CardMedia
                                component="img"
                                height="440"
                                image={img1}
                                alt="green iguana"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                {title1}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                {data1}
                                </Typography>
                            </CardContent>
                            <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                Precio: 9.999
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button size="small">Ver mas</Button>
                            </CardActions>
                        </Card>
                        <Card sx={{ maxWidth: 345 }}>
                            <CardMedia
                                component="img"
                                height="440"
                                image={img2}
                                alt="green iguana"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                {title2}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                {data2}
                                </Typography>
                            </CardContent>
                            <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                Precio: 9.999
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button size="small">Ver mas</Button>
                            </CardActions>
                        </Card>
                        <Card sx={{ maxWidth: 345 }}>
                            <CardMedia
                                component="img"
                                height="440"
                                image={img3}
                                alt="green iguana"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                {title3}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                {data3}
                                </Typography>
                            </CardContent>
                            <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                Precio: 9.999
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button size="small">Ver mas</Button>
                            </CardActions>
                        </Card>
                        <Card sx={{ maxWidth: 345 }}>
                            <CardMedia
                                component="img"
                                height="440"
                                image={img4}
                                alt="green iguana"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                {title4}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                {data4}
                                </Typography>
                            </CardContent>
                            <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                Precio: 9.999
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button size="small">Ver mas</Button>
                            </CardActions>
                        </Card>
 
            </Grid>


        
        </Container>
    )
}

export default Productos;