import { Grid } from '@material-ui/core'
import { Box, Typography } from '@mui/material'
import React from 'react'
import "./SobreNos.css"


function SobreNos() {
  return (
    <>
        <Grid>
            <Grid container className='caixa'>
                <Grid xs={9}>
                    <Typography variant="h3" color="initial">Quem Somos</Typography>
                    <Typography variant="h6" color="textPrimary">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ea cupiditate quia itaque assumenda quidem nulla, nobis, accusantium ad, nesciunt suscipit rerum eum esse similique ipsa voluptatum animi quod id atque?</Typography>
                </Grid>
                <Grid xs={3}>
                    <img src="https://img.olhardigital.com.br/wp-content/uploads/2021/11/One-Piece-Sem-Borda.jpg" alt="Logo Apuro" className="imgcaixas" />
                </Grid>
            </Grid>
            <Grid container className='caixa'>
                <Grid xs={3}>
                    <img src="https://img.olhardigital.com.br/wp-content/uploads/2021/11/One-Piece-Sem-Borda.jpg" alt="Logo Apuro" className="imgcaixas" />
                </Grid>
                <Grid xs={9}>
                    <Typography variant="h3" color="initial">Quem Somos</Typography>
                    <Typography variant="h6" color="textPrimary">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ea cupiditate quia itaque assumenda quidem nulla, nobis, accusantium ad, nesciunt suscipit rerum eum esse similique ipsa voluptatum animi quod id atque?</Typography>
                </Grid>
            </Grid>
        </Grid>
    </>
  )
}

export default SobreNos