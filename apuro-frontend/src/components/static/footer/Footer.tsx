import React from "react";
import { Grid, Typography } from "@material-ui/core";
import { Box } from "@mui/material";
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import "./Footer.css";
import { Link } from "react-router-dom";

function Footer() {
    return (
        <>
            <Grid container direction="row" justifyContent="center" alignItems="center">

                <Grid alignItems="center" item xs={4}>


                    <Box className="box1">

                        <Box paddingTop={1} display="flex" alignItems="center" justifyContent="center">
                            <Typography variant="h5" align="center" gutterBottom className="textos">Apuro </Typography>
                        </Box>
                        <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center" className="boxFooter">
                            <Link to='/home' className='text-decoration-none'>
                                <Typography variant="inherit" align="center" gutterBottom className="textos" >Home </Typography>
                            </Link>
                            <Link to="/sobre-nos" className='text-decoration-none'>
                                <Typography variant="inherit" align="center" gutterBottom className="textos">Sobre </Typography>
                            </Link>
                            <Link to="/Listaproduto" className='text-decoration-none' >
                                <Typography variant="inherit" align="center" gutterBottom className="textos">Produtos</Typography>
                            </Link>
                        </Box>
                    </Box>
                </Grid>
                <Grid alignItems="center" item xs={4}>


                    <Box className="box1">

                        <Box paddingTop={1} display="flex" alignItems="center" justifyContent="center" >
                           
                            <Typography variant="h5" align="center" gutterBottom className="textos">Linkedin</Typography>
                        </Box>
                        <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center" className="boxFooter">
                            <a href="https://www.linkedin.com/in/stefani-machado-oliveira/" target="_blank" rel="noreferrer" className="text-decorator-none">
                                <Typography variant="inherit" align="left" gutterBottom className="textos-footer" >Stefani Oliveira</Typography>
                            </a>
                            <a href="https://www.linkedin.com/in/paulo-victor-damasceno-e-silva-0184ba183/" target="_blank" rel="noreferrer" className="text-decorator-none">
                                <Typography variant="inherit" align="left" gutterBottom className="textos-footer">Paulo Vitor</Typography>
                            </a>
                            <a href="https://www.linkedin.com/in/dimitrimarinho/" target="_blank" rel="noreferrer" className="text-decorator-none">
                                <Typography variant="inherit" align="left" gutterBottom className="textos-footer">Dimitri Marinho</Typography>
                            </a>
                            <a href="https://www.linkedin.com/in/thayna-saraiva-2a6061215/" target="_blank" rel="noreferrer" className="text-decorator-none">
                                <Typography variant="inherit" align="left" gutterBottom className="textos-footer">Thayná Saraiva</Typography>
                            </a>
                        </Box>
                    </Box>
                </Grid>
                <Grid alignItems="center" item xs={4}>


                    <Box className="box1">

                        <Box paddingTop={1} display="flex" alignItems="center" justifyContent="center" >
                            <Typography variant="h5" align="center" gutterBottom className="textos">Redes sociais </Typography>
                        </Box>
                        <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center" className="boxFooter">
                            <Box display="flex" flexDirection="row" alignItems="center" justifyContent="center" >

                                <FacebookIcon className="icones" />
                                <InstagramIcon className="icones" />
                                <LinkedInIcon className="icones" />

                            </Box>
                        </Box>
                    </Box>
                </Grid>
            </Grid>

            <Grid alignItems="center" item xs={12}>
                <Box className="box2">
                    <Box paddingTop={1}>
                        <Typography variant="subtitle2" align="center" gutterBottom className="textos-rodape" >© 2020 Copyright: brasil.generation.org</Typography>
                    </Box>
                </Box>
            </Grid>

        </>
    );
}
export default Footer;