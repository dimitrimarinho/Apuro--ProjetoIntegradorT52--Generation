import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import Button from '@mui/material/Button';
import { Box } from '@mui/material';
import CarouselComponent from '../../components/carousel/CarouselComponent';
import { Link } from 'react-router-dom';
import './Home.css';

function Home() {
    return (
        <>
            <Grid container direction="row" justifyContent="center" alignItems="center" className='caixa1'>
                <Grid item xs={12}>
                    <CarouselComponent />
                </Grid>
                <Grid alignItems="center" item xs={12}>
                    <Box paddingX={20} className="caixa1">
                        <Typography variant="h3" gutterBottom color="textPrimary" component="h3" align="center" className='texto'>Seja bem vindo(a)!</Typography>
                        <Typography variant="h5" gutterBottom color="textPrimary" component="h5" align="center" className='texto'>Aproveite a nossa plataforma!</Typography>
                    </Box>
                    <Box sx={{ display: "flex", justifyContent: "center", marginTop: 5 }}>
                        <Link className='text-decorator-none' to='/categorias'>
                            <Button variant="outlined" className='botao'>Categorias</Button>
                        </Link>
                        
                        <Link to="/cadastrar-categoria" className='text-decorator-none'>
                            <Button variant="outlined" className='botao'>Cadastrar Categoria</Button>
                        </Link>

                        <Link className='text-decorator-none' to='/listaProduto'>
                            <Button variant="outlined" className='botao'>Produtos</Button>
                        </Link>
                        
                        <Link to="/cadastrarProduto" className='text-decorator-none'>
                            <Button variant="outlined" className='botao'>Cadastrar produto</Button>
                        </Link>
                    </Box>
                </Grid>
                <Grid xs>
                    <Box sx={{ display: "flex", flexWrap: 'wrap', alignItems: "center", justifyContent: "center" }}>
                       
                        <Box className='cards'>Novos Produtos</Box>
                        <Box className='cards'>Novos produtores</Box>
                        <Box className='cards'>Produtos mais vendidos</Box>
                        <Box className='cards'>Categorias mais buscadas</Box>
                        <Box className='cards'>Produtores em alta</Box>
                        <Box className='cards'>Produtores mais bem avaliados</Box>
                        <Box className='cards'>Produtores mais bem avaliados</Box>
                        <Box className='cards'>Produtores com melhores notas de sustentabilidade</Box>

                    </Box>
                </Grid>
            </Grid>
        </>
    );
}

export default Home;