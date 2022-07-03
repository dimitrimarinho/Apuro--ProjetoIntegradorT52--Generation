import { Button, Grid, Typography } from '@material-ui/core';
import { Box } from '@mui/material';
import React from 'react';
import './Home.css';
import CarouselComponent from '../../components/components/carousel/CarouselComponent';


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
                        <Button variant="outlined" className='botao'>Produtos</Button>
                        <Button variant="outlined" className='botao'>Vendas</Button>
                        <Button variant="outlined" className='botao'>Cadastrar produto</Button>
                        <Button variant="outlined" className='botao'>Remover produto</Button>
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
                <Grid xs={12} className="produtos">
                    <Typography variant="h3" color="primary" className="titulos">Seus produtos</Typography>
                </Grid>
            </Grid>
        </>
    );
}

export default Home;