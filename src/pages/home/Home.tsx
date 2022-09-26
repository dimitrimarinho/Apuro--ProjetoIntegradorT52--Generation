import React, { useEffect, useState } from 'react';
import { Card, CardActionArea, CardActions, CardContent, CardMedia, Grid, makeStyles, Typography } from '@material-ui/core';
import Button from '@mui/material/Button';
import { Box } from '@mui/material';
import CarouselComponent from '../../components/carousel/CarouselComponent';
import { Link } from 'react-router-dom';
import './Home.css';
import Produto from '../../models/Produto';
import { useSelector } from 'react-redux';
import { TokenState } from '../../store/tokens/tokensReducer';
import { busca } from '../../services/Service';
import User from '../../models/User';
import { GitHub, LinkedIn } from '@material-ui/icons';

const useStyles = makeStyles({
    root: {
        width: 247,
        margin: "20px",
    },
    media: {
        height: 150,
    },
    produto: {
        width: 300,
        height: 350,
    }
});

function Home() {

    const classes = useStyles();

    const [produtos, setProdutos] = useState<Produto[]>([])

    const [usuarios, setUsuarios] = useState<User[]>([])

    const token = useSelector<TokenState, TokenState["token"]>(
        (state) => state.token
    );

    async function getProdutos() {
        await busca(`/produtos`, setProdutos, {
            headers: {
                'Authorization': token
            }
        })
    }

    useEffect(() => {
        getProdutos()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [produtos.length])

    async function getUsuarios() {
        await busca(`/usuario`, setUsuarios, {
            headers: {
                'Authorization': token
            }
        })
    }

    useEffect(() => {
        getUsuarios()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [usuarios.length])

    var homeComponent;

    if (token !== '') {
        homeComponent = (
            <>
                <Grid xs={12}>
                    <Box paddingX={40} marginTop="20px" display="flex" flexDirection="column" alignItems="left" justifyContent="left">
                        <Typography variant="h4" gutterBottom color="textPrimary" component="h4" align="center" className='texto' id="texto" >Produtos disponíveis</Typography>
                    </Box>
                </Grid>

                {
                    produtos.map(produto => (
                        <Box m={2}>
                            <Box sx={{ display: "flex", flexWrap: 'wrap', alignItems: "center", justifyContent: "center" }}>
                                <Card className={classes.produto}>
                                    <CardActionArea>
                                        <CardMedia
                                            className={classes.media}
                                            image={produto.foto}
                                            title="Imagem do produto"
                                        />
                                        <CardContent>
                                            <Typography gutterBottom variant="h5" component="h2">
                                                {produto.nome}
                                            </Typography>
                                            <Typography variant="body2" color="textSecondary" component="p" className='descricaoCard'>
                                                {produto.descricao}
                                            </Typography>
                                            <Box sx={{ display: "flex", flexWrap: 'wrap', alignItems: "left", justifyContent: "left" }}>
                                                <Typography variant="h5" color="initial" className='cifrao'>R$</Typography>
                                                <Typography variant="h5" component="p">
                                                    {produto.preco}
                                                </Typography>
                                            </Box>
                                        </CardContent>
                                    </CardActionArea>
                                    <CardActions>
                                        <Link className='text-decorator-none' to='/listaProduto'>
                                            <Button size="small" color="primary" className='most'>
                                                Ver produto
                                            </Button>
                                        </Link>
                                    </CardActions>
                                </Card>
                            </Box>
                        </Box>
                    ))
                }

            </>
        );
    } else {
        homeComponent = (

            <>
                <Grid xs={12}>
                    <Typography variant="h3" className="titulo2" align="center">Time de Desenvolvedores</Typography>
                </Grid>

                <Grid container xs={12}>

                    <Grid xs={2} className="justify-items-sobrenos">
                        <img src="https://i.imgur.com/es2WqrE.png" alt="Foto Dimitri" className="equipe2" />
                        <Typography variant="inherit" gutterBottom className='nomesSobreNos'>Dimitri Marinho </Typography>
                        <Box sx={{ display: "flex", flexWrap: 'wrap', alignItems: "center", justifyContent: "center" }}>
                            <a href="https://www.linkedin.com/in/dimitrimarinho/" target="_blank" rel="noreferrer" className="text-decorator-none1">
                                <LinkedIn className="icone" />
                            </a>
                            <a href="https://github.com/dimitrimarinho" target="_blank" rel="noreferrer" className="text-decorator-none1">
                                <GitHub className="icone" />
                            </a>
                        </Box>
                    </Grid>

                    <Grid xs={2} className="justify-items-sobrenos">
                        <img src="https://i.imgur.com/OSQqDV4.png" alt="Foto Paulo" className="equipe2" />
                        <Typography variant="inherit" gutterBottom className='nomesSobreNos'>Paulo Victor</Typography>
                        <Box sx={{ display: "flex", flexWrap: 'wrap', alignItems: "center", justifyContent: "center" }}>
                            <a href="https://www.linkedin.com/in/paulo-victor-damasceno-e-silva-0184ba183/" target="_blank" rel="noreferrer" className="text-decorator-none1">
                                <LinkedIn className="icone" />
                            </a>
                            <a href="https://github.com/PvPaulinho" target="_blank" rel="noreferrer" className="text-decorator-none1">
                                <GitHub className="icone" />
                            </a>
                        </Box>
                    </Grid>

                    <Grid xs={2} className="justify-items-sobrenos">
                        <img src="https://i.imgur.com/jH8XA5A.png" alt="Foto Stefani" className="equipe2" />
                        <Typography variant="inherit" gutterBottom className='nomesSobreNos'>Stefany Oliveira</Typography>
                        <Box sx={{ display: "flex", flexWrap: 'wrap', alignItems: "center", justifyContent: "center" }}>
                            <a href="https://www.linkedin.com/in/stefani-machado-oliveira/" target="_blank" rel="noreferrer" className="text-decorator-none1">
                                <LinkedIn className="icone" />
                            </a>
                            <a href="https://github.com/stefanimoliveira" target="_blank" rel="noreferrer" className="text-decorator-none1">
                                <GitHub className="icone" />
                            </a>
                        </Box>
                    </Grid>

                    <Grid xs={2} className="justify-items-sobrenos">
                        <img src="https://i.imgur.com/vUa7IHF.png" alt="Foto Thayna" className="equipe2" />
                        <Typography variant="inherit" gutterBottom className='nomesSobreNos'>Thayna Saraiva</Typography>
                        <Box sx={{ display: "flex", flexWrap: 'wrap', alignItems: "center", justifyContent: "center" }}>
                            <a href="https://www.linkedin.com/in/thayna-saraiva-2a6061215/" target="_blank" rel="noreferrer" className="text-decorator-none1">
                                <LinkedIn className="icone" />
                            </a>
                            <a href="https://github.com/thaynasaraiva" target="_blank" rel="noreferrer" className="text-decorator-none1">
                                <GitHub className="icone" />
                            </a>
                        </Box>
                    </Grid>

                </Grid>
            </>

        );
    }

    return (
        <>
            <Grid container direction="row" justifyContent="center" alignItems="center" className='caixa1'>
                <Grid item xs={12}>
                    <CarouselComponent />
                </Grid>

                <Grid alignItems="center" item xs={12}>
                    <Box paddingX={20} className="caixaHFrase">
                        <Typography variant="h3" gutterBottom color="textPrimary" component="h3" align="center" className='texto'>Que bom te ver!</Typography>
                        <Typography variant="h5" gutterBottom color="textPrimary" component="h5" align="center" className='texto'>Aproveite  nossa plataforma!</Typography>
                    </Box>
                    <Box sx={{ display: "flex", justifyContent: "center", marginTop: 5 }}>

                        <Link className='text-decorator-none' to='/listaProduto'>
                            <Button variant="outlined" className='botao'>Produtos</Button>
                        </Link>

                        <Link className='text-decorator-none' to='/categorias'>
                            <Button variant="outlined" className='botao'>Categorias</Button>
                        </Link>

                        <Button variant="outlined" className='botao'>Artistas</Button>

                        <Link to="/cadastrarProduto" className='text-decorator-none'>
                            <Button variant="outlined" className='botao'>Cadastrar produto</Button>
                        </Link>

                        <Link to="/cadastrar-categoria" className='text-decorator-none'>
                            <Button variant="outlined" className='botao'>Cadastrar Categoria</Button>
                        </Link>

                    </Box>
                </Grid>

                    <Box sx={{ display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "center" }}>
                        <Card className={classes.root}>
                            <CardActionArea>
                                <CardMedia
                                    className={classes.media}
                                    image="https://i.imgur.com/jfZZ8h2.png"
                                    title="Novidades"
                                />
                                <CardContent className='caixaDetextoCards'>
                                    <Typography className='textoCard' gutterBottom variant="h5" component="h2">
                                        Novidades
                                    </Typography>
                                </CardContent>
                                <CardActions></CardActions>
                            </CardActionArea>
                        </Card>
                       
                        <Card className={classes.root}>
                            <CardActionArea>
                                <CardMedia
                                    className={classes.media}
                                    image="https://i.imgur.com/ufx4gNy.png"
                                    title="Mais vendidos"
                                />
                                <CardContent className='caixaDetextoCards'>
                                    <Typography className='textoCard' gutterBottom variant="h5" component="h2">
                                        Mais vendidos
                                    </Typography>
                                </CardContent>
                                <CardActions></CardActions>
                            </CardActionArea>
                        </Card>

                        <Card className={classes.root}>
                            <CardActionArea>
                                <CardMedia
                                    className={classes.media}
                                    image="https://i.imgur.com/FiQ18eb.png"
                                    title="Em alta"
                                />
                                <CardContent className='caixaDetextoCards'>
                                    <Typography className='textoCard' gutterBottom variant="h5" component="h2">
                                        Em alta
                                    </Typography>
                                </CardContent>
                                <CardActions></CardActions>
                            </CardActionArea>
                        </Card>

                        <Card className={classes.root}>
                            <CardActionArea>
                                <CardMedia
                                    className={classes.media}
                                    image="https://i.imgur.com/poowZna.png"
                                    title="Destaques sustentáveis"
                                />
                                <CardContent className='caixaDetextoCards'>
                                    <Typography className='textoCard' gutterBottom variant="h5" component="h2">
                                        Destaques sustentáveis
                                    </Typography>
                                </CardContent>
                                <CardActions></CardActions>
                            </CardActionArea>
                        </Card>

                        {homeComponent}

                    </Box>
                </Grid>


        </>
    );
}

export default Home;