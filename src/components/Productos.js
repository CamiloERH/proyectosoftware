import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { Grid } from '@mui/material';




const Productos = (params) => {
    const arreglo = [1,2,3,4,5,6,7,8,9,10]
    const url = "https://ripleycl.imgix.net/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fim-prod-products-images%2Fp-cvl17052414-1-bb770391-790b-4137-b3b0-b062bef5569b.jpg?w=750&h=555&ch=Width&auto=format&cs=strip&bg=FFFFFF&q=60&trimcolor=FFFFFF&trim=color&fit=fillmax&ixlib=js-1.1.0&s=5ed107f33a8817399c5602c2a30308b3"
    const data = "Espectacular kit de permanente de pestañas, para una eficaz ondulación de tus pestañas y un acabado maravilloso. Incluye:Líquido permanente (Rosado)"
    return(
        <Container variant="outlined">
            <Grid container>
                {
                    arreglo.map((val,key)=>(
                    
                        <Card sx={{ maxWidth: 345 }}>
                        <CardMedia
                            component="img"
                            height="140"
                            image={url}
                            alt="green iguana"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                            Lizard
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                            {data}
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button size="small">Ver mas</Button>
                        </CardActions>
                        </Card>
                    ))
                }
 
            </Grid>


        
        </Container>
    )
}

export default Productos;