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
                  <Box>
                   <Box sx={{ display: "flex", flexDirection: 'column', alignItems: "left", justifyContent: "left" }}>
                        <Typography variant="h3" className='titulo' >Quem Somos:</Typography>
                        <Typography variant="h6" className="textoSobre2" >Oferecemos um espaço online personalizado para artistas desconhecidos exporem e venderem suas produções, viabilizando maior alcance e valorização dos seus trabalhos </Typography>
                        </Box>
                        <Box sx={{ display: "flex", flexWrap: 'wrap', alignItems: "center", justifyContent: "center" }}>
                            <img src="" alt="" />
                        </Box>
                        </Box>
                    <Box>
                    <Box sx={{ display: "flex", flexDirection: 'column', alignItems: "left", justifyContent: "left" }}>
                        <Typography variant="h3" className='titulo'> Motivação:</Typography>
                        <Typography variant="h6" className="textoSobre2">A pluralidade brasileira releva um povo singular, criativo, resiliente e artístico. Contudo devido às complicações econômicas o país acumula quase 12 milhões de desempregados. Pensando nisso, a Apuro surgiu com a missão de oferecer a todos os brasileirosa chance de alimentar sua veia artística com um ambiente de negociação valorizada das suas obras.
                        </Typography>
                        </Box>
                        <Box sx={{ display: "flex", flexWrap: 'wrap', alignItems: "center", justifyContent: "center" }}>
                            <img src="" alt="" />
                        </Box>
                        </Box>
                    
                    <Box>
                        <Box sx={{ display: "flex", flexDirection: 'column', alignItems: "left", justifyContent: "left" }}>
                        <Typography variant="h3" className='titulo'>Público Alvo:</Typography>
                        <Typography variant="h6" className="textoSobre2">Artistas, principalmente de regiões periféricas, que queiram divulgar seus produtos, a fim de facilitar a venda.</Typography>
                        </Box>
                        <Box sx={{ display: "flex", flexWrap: 'wrap', alignItems: "center", justifyContent: "center" }}>
                            <img src="" alt="" />
                        </Box>
                        </Box>
                </Grid>
                <Grid xs={12}>
                    <Typography variant="h3" className="titulo2" align="center">Equipe de Desenvolvedores</Typography>
                </Grid>
                <Grid container xs={12}>
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
                    <Grid xs={3} alignContent="center" >
                        <img src="https://i.imgur.com/SjRjrBn.jpg" alt="Foto Paulo" className="equipe" />
                        <Typography variant="inherit" gutterBottom  textAlign="center">Paulo Victor</Typography>
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
                        <img src="https://i.imgur.com/7NTYzD7.jpg" alt="Foto Stefani" className="equipe" />
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
                    
                    <Grid xs={3} >
                        <img src="https://i.imgur.com/SiPZIjl.jpg" alt="Foto Thayna" className="equipe" />
                        <Typography variant="inherit"  textAlign="center" gutterBottom >Thayna Saraiva</Typography>
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