import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import './DeletarCategoria.css';
import { Box } from '@mui/material';
import { Card, CardActions, CardContent, Button, Typography } from '@material-ui/core';
import Categorias from '../../../models/Categorias';
import { buscaId, deleteId } from '../../../services/Service';
import { TokenState } from '../../../store/tokens/tokensReducer';
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';

function DeletarCategoria() {
    let navigate = useNavigate();
    const { id } = useParams<{ id: string }>();

    const token = useSelector<TokenState, TokenState["token"]>(
        (state) => state.token
    );

    const [categoria, setCategoria] = useState<Categorias>()

    useEffect(() => {
        if (token === "") {
            
            toast.error("Você não está logado", {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: false,
                theme: "colored",
                progress: undefined
                
        
            })
            navigate("/login")
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [token]);

    useEffect(() => {
        if (id !== undefined) {
            findById(id)
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [id]);

    async function findById(id: string) {
        buscaId(`/categorias/${id}`, setCategoria, {
            headers: {
                'Authorization': token
            }
        });
    }

    function sim() {
        navigate('/categorias')
        deleteId(`/categorias/${id}`, {
            headers: {
                'Authorization': token
            }
        });
       
        toast.success("Categoria deletada com sucesso", {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: false,
            theme: "colored",
            progress: undefined
            
    
        })
    }

    function nao() {
        navigate('/categorias')
    }

    return (
        <>
            <Box m={2}>
                <Card variant="outlined">
                    <CardContent>
                        <Box justifyContent="center">
                            <Typography color="textSecondary" gutterBottom>
                                Deseja deletar a categoria:
                            </Typography>
                            <Typography color="textSecondary">
                                {categoria?.tipo}
                            </Typography>
                        </Box>
                    </CardContent>
                    <CardActions>
                        <Box display="flex" justifyContent="start" ml={1.0} mb={2} >
                            <Box mx={2}>
                                <Button onClick={sim} variant="contained" className="marginLeft" size='large' color="primary">
                                    Sim
                                </Button>
                            </Box>
                            <Box mx={2}>
                                <Button onClick={nao} variant="contained" size='large' color="secondary">
                                    Não
                                </Button>
                            </Box>
                        </Box>
                    </CardActions>
                </Card>
            </Box>
        </>
    );
}

export default DeletarCategoria;