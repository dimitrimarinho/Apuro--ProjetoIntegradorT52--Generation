import { Grid } from '@material-ui/core'
import { Box, Typography } from '@mui/material'
import React from 'react'
import "./SobreNos.css"
import { GitHub, LinkedIn } from '@material-ui/icons';


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
                    <Grid xs={12}>
                        <Typography variant="h3" className='titulo' >Quem Somos:</Typography>
                        <Typography variant="h6" className="textoSobre2" >Somos um e-commerce que vende produtos sustentáveis, o qual além de promover a circulação de renda entre camadas periféricas da sociedade brasileira, promove a sustentabilidade. </Typography>
                    </Grid>
                    <Grid xs={12}>
                        <Typography variant="h3" className='titulo'> Motivação:</Typography>
                        <Typography variant="h6" className="textoSobre2">Nossa motivação é a ODS 10, que trata da Redução das desigualdades, devido ao alto impacto que gera para sociedade, pois impacta diretamente nos índices de violência, educação, desemprego, produtividade do trabalho e nível de qualidade de vida da sociedade.
                        </Typography>
                    </Grid>
                    <Grid xs={12}>
                        <Typography variant="h3" className='titulo'>Público Alvo:</Typography>
                        <Typography variant="h6" className="textoSobre2">Artistas, principalmente de regiões periféricas, que queiram divulgar seus produtos, a fim de facilitar a venda.</Typography>
                    </Grid>
                </Grid>
                <Grid xs={12}>
                    <Typography variant="h3" className="titulo2" align="center">Equipe de Desenvolvedores</Typography>
                </Grid>
                <Grid container xs={12}>
                    <Grid xs={3} alignContent="center" >
                        <img src="https://i.imgur.com/aCFplnO.jpg" alt="Foto Paulo" className="equipe" />
                        <Typography variant="inherit" gutterBottom  textAlign="center">Paulo Vitor</Typography>
                        <Box sx={{ display: "flex", flexWrap: 'wrap', alignItems: "center", justifyContent: "center" }}>
                        <a href="https://www.linkedin.com/in/paulo-victor-damasceno-e-silva-0184ba183/" target="_blank" rel="noreferrer" className="text-decorator-none1">
                        <LinkedIn className="icone"/>
                            </a>
                            <a href="https://www.linkedin.com/in/paulo-victor-damasceno-e-silva-0184ba183/" target="_blank" rel="noreferrer" className="text-decorator-none1">
                            <GitHub className="icone"/>
                            </a>
                        
                        </Box>
                    </Grid>
                    <Grid xs={3}>
                        <img src="https://i.imgur.com/Ms8MutM.jpg" alt="Foto Stefani" className="equipe" />
                        <Typography variant="inherit" textAlign="center"gutterBottom >Stefany oliveira</Typography>
                        <Box sx={{ display: "flex", flexWrap: 'wrap', alignItems: "center", justifyContent: "center" }}>
                        <a href="https://www.linkedin.com/in/stefani-machado-oliveira/" target="_blank" rel="noreferrer" className="text-decorator-none1">
                        <LinkedIn className="icone"/>
                            </a>
                            <a href="https://github.com/stefanimoliveira" target="_blank" rel="noreferrer" className="text-decorator-none1">
                            <GitHub className="icone"/>
                            </a>
                        
                        </Box>
                    </Grid>
                    <Grid xs={3}>
                        <img src="https://i.imgur.com/arFPHug.jpg" alt="Foto Dimitri" className="equipe" />
                        <Typography variant="inherit" gutterBottom textAlign="center">Dimitri Marinho </Typography>
                        <Box sx={{ display: "flex", flexWrap: 'wrap', alignItems: "center", justifyContent: "center" }}>
                        <a href="https://www.linkedin.com/in/dimitrimarinho/" target="_blank" rel="noreferrer" className="text-decorator-none1">
                        <LinkedIn className="icone"/>
                            </a>
                            <a href="https://github.com/dimitrimarinho" target="_blank" rel="noreferrer" className="text-decorator-none1">
                            <GitHub className="icone"/>
                            </a>
                       
                        </Box>
                    </Grid>
                    <Grid xs={3} >
                        <img src="" alt="Foto Thayna" className="equipe" />
                        <Typography variant="inherit" className='textoSobre2' textAlign="center" gutterBottom >Thayna Saraiva</Typography>
                        <Box sx={{ display: "flex", flexWrap: 'wrap', alignItems: "center", justifyContent: "center" }}>
                        <a href="https://www.linkedin.com/in/thayna-saraiva-2a6061215/" target="_blank" rel="noreferrer" className="text-decorator-none1">
                        <LinkedIn className="icone"/> 
                            </a>
                            <a href="https://github.com/thaynasaraiva" target="_blank" rel="noreferrer" className="text-decorator-none1">
                            <GitHub className="icone"/>
                            </a>
                       
                        </Box>
                    </Grid>
                </Grid>
            </Grid>
        </>
    )
}

export default SobreNos