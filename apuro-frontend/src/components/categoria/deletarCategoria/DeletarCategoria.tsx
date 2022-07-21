import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Box } from '@mui/material';
import { CardContent, Button, Typography } from '@material-ui/core';
import Categorias from '../../../models/Categorias';
import { buscaId, deleteId } from '../../../services/Service';
import { TokenState } from '../../../store/tokens/tokensReducer';
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import './DeletarCategoria.css';

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
            hideProgressBar: true,
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
            <div className="centralized-box-del">
                <div className="box-border-del" >
                    <Typography className="title">
                        Deseja deletar a categoria {categoria?.tipo} ?
                    </Typography>
                    <CardContent>
                    </CardContent>
                    <Box display="flex" justifyContent="center" mb={2} mr={2}>
                        <Box mx={2}>
                            <Button onClick={sim} variant="contained" size='large' color="primary" className="button-sim">
                                Sim
                            </Button>
                        </Box>
                        <Box>
                            <Button onClick={nao} variant="contained" size='large' color="secondary" className="button-nao">
                                Não
                            </Button>
                        </Box>
                    </Box>
                </div>
            </div>
        </>
    );
}

export default DeletarCategoria;