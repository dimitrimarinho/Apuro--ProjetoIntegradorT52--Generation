import { Button, Grid, Typography } from '@material-ui/core';
import { Box } from '@mui/material';
import React from 'react';
import './Home.css';
import CarouselComponent from '../../components/components/carousel/CarouselComponent';


function Home() {
    return (
        <>
            <Grid container direction="row" justifyContent="center" alignItems="center" className='caixa'>
                <Grid alignItems="center" item xs={6}>
                    <Box paddingX={20}>
                        <Typography variant="h3" gutterBottom color="textPrimary" component="h3" align="center" className='titulo'>Seja bem vindo(a)!</Typography>
                        <Typography variant="h5" gutterBottom color="textPrimary" component="h5" align="center" className='titulo'>expresse aqui os seus pensamentos e opiniões!</Typography>
                    </Box>
                    <Box display="flex" justifyContent="center">
                        <Box marginRight={1}></Box>
                        <Button variant="outlined" className='botao'>Ver Postagens</Button>
                    </Box>
                </Grid>
                <Grid item xs={6} >
                    <img src="https://i.imgur.com/H88yIo2.png" alt="" width="500px" height="500px" />
                </Grid>
                <Grid xs={12} className="postagens" style={{
                    backgroundImage: 'url(https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/c69267c8-b57b-4ed0-b136-88045c50e623/df2dj5c-90ed26c7-9909-44bf-88e0-68ce81f7c009.png/v1/fill/w_1125,h_633,q_80,strp/naruto_e_jiraya_by_mmayze_df2dj5c-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NjMzIiwicGF0aCI6IlwvZlwvYzY5MjY3YzgtYjU3Yi00ZWQwLWIxMzYtODgwNDVjNTBlNjIzXC9kZjJkajVjLTkwZWQyNmM3LTk5MDktNDRiZi04OGUwLTY4Y2U4MWY3YzAwOS5wbmciLCJ3aWR0aCI6Ijw9MTEyNSJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.2g-Z4us77KMOAWIKninQ3UEronYa238Os8m4zpRa8lE)',
                    backgroundRepeat: 'no-repeat', width: "100vh", minHeight: "100vh", backgroundSize: "cover", backgroundPosition: "center"
                }}>
                </Grid>
            </Grid>
        </>
    );
}

export default Home;