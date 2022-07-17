import { Grid } from '@material-ui/core'
import { Typography } from '@mui/material'
import React from 'react'
import "./SobreNos.css"


function SobreNos() {
    return (
        <>
            <Grid>
                <Grid container className='caixa' >
                    <Grid xs={12}>
                        <Typography variant="h2" className='textoSobre' align='center'>O que é o Apuro?</Typography>
                        <Typography variant="h5" color="textPrimary" align="center">Saiba mais sobre nós</Typography>
                    </Grid>

                </Grid>
                <Grid container className='caixa2'>
                    <Grid xs={4}>
                        <Typography variant="h3" color="#192610" align='left'>Quem Somos:</Typography>
                        <Typography variant="h6" color="#CFD4BC" align="left" >Somos um e-commerce que vende produtos sustentáveis, o qual além de promover a circulação de renda entre camadas periféricas da sociedade brasileira, promove a sustentabilidade </Typography>
                    </Grid>
                    <Grid xs={4}>
                        <Typography variant="h3" color="#192610" align='left'> Motivação:</Typography>
                        <Typography variant="h6" color="#CFD4BC" align="left">Nossa motivação é a ODS 10, que trata da Redução das desigualdades, devido ao alto impacto que gera para sociedade, pois impacta diretamente nos índices de violência, educação, desemprego, produtividade do trabalho e nível de qualidade de vida da sociedade.
                        </Typography>
                    </Grid>
                    <Grid xs={4}>
                        <Typography variant="h3" color="#192610" align='left'>Público Alvo:</Typography>
                        <Typography variant="h6" color="#CFD4BC" align='left'>Artistas, principalmente de regiões periféricas, que queiram divulgar seus produtos, a fim de facilitar a venda.</Typography>
                    </Grid>
                </Grid>
                <Grid xs={12}>
                    <Typography variant="h3" color="#192610" align="center">Equipe</Typography>
                </Grid>
                <Grid container xs={12}>
                    <Grid xs={4} className="foto">
                        <img src="https://img.olhardigital.com.br/wp-content/uploads/2021/11/One-Piece-Sem-Borda.jpg" alt="foto equipe" className="foto" />
                    </Grid>
                    <Grid xs={4}>
                        <img src="https://img.olhardigital.com.br/wp-content/uploads/2021/11/One-Piece-Sem-Borda.jpg" alt="foto equipe" className="foto" />
                    </Grid>
                    <Grid xs={4}>
                        <img src="https://img.olhardigital.com.br/wp-content/uploads/2021/11/One-Piece-Sem-Borda.jpg" alt="foto equipe" className="foto" />
                    </Grid>
                    <Grid xs={4}>
                        <img src="https://img.olhardigital.com.br/wp-content/uploads/2021/11/One-Piece-Sem-Borda.jpg" alt="foto equipe" className="foto" />
                    </Grid>
                </Grid>
            </Grid>
        </>
    )
}

export default SobreNos