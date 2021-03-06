import { Grid } from '@material-ui/core'
import { Box, Typography } from '@mui/material'
import React from 'react'
import "./SobreNos.css"
import { GitHub, LinkedIn } from '@material-ui/icons';


function SobreNos() {
    return (
        <>
            <Grid className="all-page-about-us caixa1">

                <div className='caixa2'>
                    <Grid xs={12}>
                        <Typography variant="h2" className='textoSobre' align='center'>O que é o Apuro?</Typography>
                        <Typography variant="h5" color="textPrimary" align="center">Saiba mais sobre nós</Typography>
                    </Grid>
                    <Grid item>
                        <Grid item>
                            <Typography variant="h3" className='titulo'>
                                Quem Somos
                            </Typography>
                            <br />
                            <Typography variant="h6" className="textoSobre2">
                                Oferecemos um espaço online personalizado para artistas desconhecidos exporem e venderem suas produções, viabilizando maior alcance e valorização dos seus trabalhos
                            </Typography>
                        </Grid>
                        <br />
                    </Grid>
                    <Grid item>
                        <Grid item>
                            <Typography variant="h3" className='titulo'>
                                Motivação
                            </Typography>
                            <br />
                            <Typography variant="h6" className="textoSobre2">
                                A pluralidade brasileira releva um povo singular, criativo, resiliente e artístico. Contudo devido às complicações econômicas o país acumula quase 12 milhões de desempregados. Pensando nisso, a Apuro surgiu com a missão de oferecer a todos os brasileirosa chance de alimentar sua veia artística com um ambiente de negociação valorizada das suas obras.
                            </Typography>
                        </Grid>
                        <br />
                    </Grid>
                    <Grid item>
                        <Grid item>
                            <Typography variant="h3" className='titulo'>
                                Público Alvo
                            </Typography>
                            <br />
                            <Typography variant="h6" className="textoSobre2">
                                Artistas, principalmente de regiões periféricas, que queiram divulgar seus produtos, a fim de facilitar a venda.
                            </Typography>
                        </Grid>
                    </Grid>
                </div>
                <Grid xs={12}>
                    <Typography variant="h3" className="titulo2" align="center">Time de Desenvolvedores</Typography>
                </Grid>

                <Grid container xs={12}>

                    <Grid xs={2} className="justify-items-aboutus">
                        <img src="https://i.imgur.com/es2WqrE.png" alt="Foto Dimitri" className="equipe2_aboutus" />
                        <Typography variant="inherit" gutterBottom className='nomesSobreNos_aboutus'>Dimitri Marinho </Typography>
                        <Box sx={{ display: "flex", flexWrap: 'wrap', alignItems: "center", justifyContent: "center" }}>
                            <a href="https://www.linkedin.com/in/dimitrimarinho/" target="_blank" rel="noreferrer" className="text-decorator-none1">
                                <LinkedIn className="icone" />
                            </a>
                            <a href="https://github.com/dimitrimarinho" target="_blank" rel="noreferrer" className="text-decorator-none1">
                                <GitHub className="icone" />
                            </a>
                        </Box>
                    </Grid>

                    <Grid xs={2} className="justify-items-aboutus">
                        <img src="https://i.imgur.com/OSQqDV4.png" alt="Foto Paulo" className="equipe2_aboutus" />
                        <Typography variant="inherit" gutterBottom className='nomesSobreNos_aboutus'>Paulo Victor</Typography>
                        <Box sx={{ display: "flex", flexWrap: 'wrap', alignItems: "center", justifyContent: "center" }}>
                            <a href="https://www.linkedin.com/in/paulo-victor-damasceno-e-silva-0184ba183/" target="_blank" rel="noreferrer" className="text-decorator-none1">
                                <LinkedIn className="icone" />
                            </a>
                            <a href="https://github.com/PvPaulinho" target="_blank" rel="noreferrer" className="text-decorator-none1">
                                <GitHub className="icone" />
                            </a>
                        </Box>
                    </Grid>

                    <Grid xs={2} className="justify-items-aboutus">
                        <img src="https://i.imgur.com/jH8XA5A.png" alt="Foto Stefany" className="equipe2_aboutus" />
                        <Typography variant="inherit" gutterBottom className='nomesSobreNos_aboutus'>Stefany Oliveira</Typography>
                        <Box sx={{ display: "flex", flexWrap: 'wrap', alignItems: "center", justifyContent: "center" }}>
                            <a href="https://www.linkedin.com/in/stefani-machado-oliveira/" target="_blank" rel="noreferrer" className="text-decorator-none1">
                                <LinkedIn className="icone" />
                            </a>
                            <a href="https://github.com/stefanimoliveira" target="_blank" rel="noreferrer" className="text-decorator-none1">
                                <GitHub className="icone" />
                            </a>
                        </Box>
                    </Grid>

                    <Grid xs={2} className="justify-items-aboutus">
                        <img src="https://i.imgur.com/vUa7IHF.png" alt="Foto Thayna" className="equipe2_aboutus" />
                        <Typography variant="inherit" gutterBottom className='nomesSobreNos_aboutus'>Thayna Saraiva</Typography>
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

            </Grid>
        </>
    )
}

export default SobreNos