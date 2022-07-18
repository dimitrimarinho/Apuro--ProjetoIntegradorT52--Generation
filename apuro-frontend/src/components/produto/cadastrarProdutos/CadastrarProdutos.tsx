import React, { ChangeEvent, useEffect, useState } from 'react'
import { Button, FormControl, FormHelperText, InputLabel, MenuItem, Select, TextField, Typography } from '@material-ui/core';
import { useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import Categorias from '../../../models/Categorias';
import Produto from '../../../models/Produto';
import { busca, buscaId, post, put } from '../../../services/Service';
import { TokenState } from '../../../store/tokens/tokensReducer';
import "./CadastrarProdutos.css";

function CadastrarProdutos() {

    let navigate = useNavigate();
    const { id } = useParams<{ id: string }>();
    const [categorias, setCategorias] = useState<Categorias[]>([])
    const token = useSelector<TokenState, TokenState["token"]>(
        (state) => state.token
    );

    useEffect(() => {
        if (token === "") {
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

    const [categoria, setCategoria] = useState<Categorias>(
        {
            id: 0,
            tipo: '',
            descricao: '',
            imagemCategoria: undefined
        })

    const [produto, setProduto] = useState<Produto>({
        id: 0,
        nome: '',
        descricao: undefined,
        quantidade: null,
        preco: null,
        foto: '',
        sustentabilidade: 5,
        regiao: '',
        categorias: undefined
    })

    useEffect(() => {
        setProduto({
            ...produto,
            categorias: categoria
        })
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [categoria])

    useEffect(() => {
        getCategorias()
        if (id !== undefined) {
            findByIdProduto(id)
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [id])

    async function getCategorias() {
        await busca("/categorias", setCategorias, {
            headers: {
                'Authorization': token
            }
        })
    }

    async function findByIdProduto(id: string) {
        await buscaId(`/produtos/${id}`, setProduto, {
            headers: {
                'Authorization': token
            }
        })
    }

    function updatedProduto(e: ChangeEvent<HTMLInputElement>) {
        setProduto({
            ...produto,
            [e.target.name]: e.target.value,
            categorias: categoria
        })
    }

    async function onSubmit(e: ChangeEvent<HTMLFormElement>) {
        e.preventDefault()

        if (id !== undefined) {
            put(`/produtos`, produto, setProduto, {
                headers: {
                    'Authorization': token
                }
            })
            toast.success("Produto atualizada com sucesso", {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: false,
                theme: "colored",
                progress: undefined
            })
        } else {
            post(`/produtos`, produto, setProduto, {
                headers: {
                    'Authorization': token
                }
            })
            toast.success("Produto cadastrado com sucesso", {
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
        back()
    }

    function back() {
        navigate('/listaProduto')
    }

    return (
        <>
            <div className='background-prod'>
                <div className="box-formprod">
                    <form onSubmit={onSubmit} className="container-cadastroprodts">
                        <div className='flex1-prodts'>
                            <Typography variant="h4" color="textPrimary" component="h1" align="center" className='title-top' >Cadastrar produto</Typography>
                            <TextField required value={produto.nome} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedProduto(e)} id="nome" label="Nome" variant="outlined" name="nome" margin="normal" fullWidth />
                            <TextField value={produto.descricao} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedProduto(e)} id="descricao" label="Descrição" name="descricao" variant="outlined" margin="normal" fullWidth />
                            <TextField required value={produto.quantidade} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedProduto(e)} id="quantidade" label="Quantidade" name="quantidade" variant="outlined" margin="normal" fullWidth />
                            <TextField required value={produto.preco} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedProduto(e)} id="preco" label="Preço" name="preco" variant="outlined" margin="normal" fullWidth />

                        </div>
                        <div className='flex2-prodts'>
                            <TextField value={produto.foto} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedProduto(e)} id="foto" label="Imagem do Produto" name="foto" variant="outlined" margin="normal" fullWidth />
                            <TextField required value={produto.regiao} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedProduto(e)} id="regiao" label="Região" name="regiao" variant="outlined" margin="normal" fullWidth />
                            <FormControl fullWidth>
                                <InputLabel id="demo-simple-select-helper-label">Categoria</InputLabel>
                                <Select
                                    labelId="demo-simple-select-helper-label"
                                    id="demo-simple-select-helper-label"
                                    onChange={(e) => buscaId(`/categorias/${e.target.value}`, setCategoria, {
                                        headers: {
                                            'Authorization': token
                                        }
                                    })}>
                                    {
                                        categorias.map(categoria => (
                                            <MenuItem value={categoria.id}>{categoria.tipo}</MenuItem>
                                        ))
                                    }
                                </Select>
                                <FormHelperText>Escolha uma categoria para o produto</FormHelperText>
                            </FormControl>
                            <Button className="button-cadproduto" type="submit" variant="contained" color="primary" fullWidth>
                                Concluir
                            </Button>
                        </div>

                    </form>
                </div>
            </div>
        </>
    )
}

export default CadastrarProdutos