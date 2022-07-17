import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Box, Card, CardActions, CardContent, CardActionArea, CardMedia, Button, Typography } from '@mui/material';
import './ListaCategoria.css';
import { useNavigate } from 'react-router-dom';
import { busca } from '../../../services/Service';
import { useSelector } from 'react-redux';
import { TokenState } from '../../../store/tokens/tokensReducer';
import Categorias from '../../../models/Categorias';
import { toast } from 'react-toastify';

function ListaCategoria() {

    const [categorias, setCategoria] = useState<Categorias[]>([])
    let navigate = useNavigate();
    const token = useSelector<TokenState, TokenState["token"]>(
        (state) => state.token
    );

    useEffect(() => {
        if (token === '') {
            toast.error("Você precisa estar logado", {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: false,
                theme: "colored",
                progress: undefined
            })
            navigate("/login")
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [token])

    async function getCategoria() {
        await busca("/categorias", setCategoria, {
            headers: {
                'Authorization': token
            }
        })
    }

    useEffect(() => {
        getCategoria()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [categorias.length])
    
    return (
        <>
            <Box className='flexbox-categorias'>
                {
                    categorias.map((categorias) => (
                        <Card sx={{ m: 2, maxWidth: 300 }}>
                            <CardActionArea>
                                <CardMedia
                                    component="img"
                                    style={{height:180}}
                                    image="https://static8.depositphotos.com/1011590/911/i/450/depositphotos_9116833-stock-photo-iguana.jpg"
                                    alt="green iguana"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        {categorias.tipo}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        Artesanatos produzidos tendo a madeira como um dos elementos da confecção
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                            <CardActions className='center-buttons'>
                                <Button size="small" className='button-green'>
                                    Ver produtos
                                </Button>
                                <Link to={`/cadastrar-categoria/${categorias.id}`} className="text-decorator-none">
                                    <Button size="small" className='button-green'>
                                        Atualizar
                                    </Button>
                                </Link>
                                <Link to={`/deletarCategoria/${categorias.id}`} className="text-decorator-none">
                                    <Button size="small" className='button-green'>
                                        Deletar
                                    </Button>
                                </Link>
                            </CardActions>
                        </Card>
                    ))
                }
            </Box>
        </>
    );
}

export default ListaCategoria;