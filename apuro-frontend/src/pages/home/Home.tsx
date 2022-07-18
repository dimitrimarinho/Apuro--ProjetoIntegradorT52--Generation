import React from 'react';
import { Card, CardActionArea, CardActions, CardContent, CardMedia, Grid, makeStyles, Typography } from '@material-ui/core';
import Button from '@mui/material/Button';
import { Box } from '@mui/material';
import CarouselComponent from '../../components/carousel/CarouselComponent';
import { Link } from 'react-router-dom';
import './Home.css';

const useStyles = makeStyles({
    root: {
        width: 250,
        margin: "20px",
    },
    media: {
        height: 150,
    },
});

function Home() {

    const classes = useStyles();

    return (
        <>
            <Grid container direction="row" justifyContent="center" alignItems="center" className='caixa1'>
                <Grid item xs={12}>
                    <CarouselComponent />
                </Grid>

                <Grid alignItems="center" item xs={12}>
                    <Box paddingX={20} className="caixa1">
                        <Typography variant="h3" gutterBottom color="textPrimary" component="h3" align="center" className='texto'>É bom te ver ...</Typography>
                        <Typography variant="h5" gutterBottom color="textPrimary" component="h5" align="center" className='texto'>Aproveite a nossa plataforma!</Typography>
                    </Box>
                    <Box sx={{ display: "flex", justifyContent: "center", marginTop: 5 }}>

                        <Link className='text-decorator-none' to='/listaProduto'>
                            <Button variant="outlined" className='botao'>Produtos</Button>
                        </Link>

                        <Link className='text-decorator-none' to='/categorias'>
                            <Button variant="outlined" className='botao'>Categorias</Button>
                        </Link>

                        <Link to="/cadastrarProduto" className='text-decorator-none'>
                            <Button variant="outlined" className='botao'>Cadastrar produto</Button>
                        </Link>

                        <Link to="/cadastrar-categoria" className='text-decorator-none'>
                            <Button variant="outlined" className='botao'>Cadastrar Categoria</Button>
                        </Link>

                    </Box>
                </Grid>

                <Grid xs={12}>
                    <Box sx={{ display: "flex", flexWrap: 'wrap', alignItems: "center", justifyContent: "center" }}>
                        <Card className={classes.root}>
                            <CardActionArea>
                                <CardMedia
                                    className={classes.media}
                                    image="/img_card.jpg"
                                    title="Novos produtos"
                                />
                                <CardContent className='caixaDetextoCards'>
                                    <Typography className='textoCard' gutterBottom variant="h5" component="h2">
                                        Novidades
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                    <Button size="small" color="primary">
                                        Confira mais ...
                                    </Button>
                                </CardActions>
                            </CardActionArea>
                        </Card>

                        <Card className={classes.root}>
                            <CardActionArea>
                                <CardMedia
                                    className={classes.media}
                                    image="/img_card.jpg"
                                    title="Novos produtos"
                                />
                                <CardContent className='caixaDetextoCards'>
                                    <Typography className='textoCard' gutterBottom variant="h5" component="h2">
                                        Mais vendidos
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                    <Button size="small" color="primary">
                                        Confira mais ...
                                    </Button>
                                </CardActions>
                            </CardActionArea>
                        </Card>

                        <Card className={classes.root}>
                            <CardActionArea>
                                <CardMedia
                                    className={classes.media}
                                    image="/img_card.jpg"
                                    title="Novos produtos"
                                />
                                <CardContent className='caixaDetextoCards'>
                                    <Typography className='textoCard' gutterBottom variant="h5" component="h2">
                                        Em alta
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                    <Button size="small" color="primary">
                                        Confira mais ...
                                    </Button>
                                </CardActions>
                            </CardActionArea>
                        </Card>

                        <Card className={classes.root}>
                            <CardActionArea>
                                <CardMedia
                                    className={classes.media}
                                    image="/img_card.jpg"
                                    title="Novos produtos"
                                />
                                <CardContent className='caixaDetextoCards'>
                                    <Typography className='textoCard' gutterBottom variant="h5" component="h2">
                                        Destaques sustentáveis
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                    <Button size="small" color="primary">
                                        Confira mais ...
                                    </Button>
                                </CardActions>
                            </CardActionArea>
                        </Card>

                    </Box>
                </Grid>

                <Grid xs={12}>
                    <Box paddingX={40}>
                        <Typography variant="h4" gutterBottom color="textPrimary" component="h4" align="center" className='texto'>Veja seus produtos</Typography>
                    </Box>

                    <Box sx={{ display: "flex", flexWrap: 'wrap', alignItems: "center", justifyContent: "center" }}>
                        <Card className={classes.root}>
                            <CardActionArea>
                                <CardMedia
                                    className={classes.media}
                                    image="/static/images/cards/contemplative-reptile.jpg"
                                    title="Contemplative Reptile"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="h2">
                                        Lizard
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary" component="p">
                                        Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                                        across all continents except Antarctica
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                            <CardActions>
                                <Button size="small" color="primary">
                                    Share
                                </Button>
                                <Button size="small" color="primary">
                                    Learn More
                                </Button>
                            </CardActions>
                        </Card>
                    </Box>
                </Grid>

            </Grid>
        </>
    );
}

export default Home;