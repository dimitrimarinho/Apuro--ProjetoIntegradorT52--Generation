import { Button, Container, TextField, Typography } from '@material-ui/core';
import React, { ChangeEvent, useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom'
import Categorias from '../../../models/Categorias';
import { buscaId, post, put } from '../../../services/Service';
import { TokenState } from '../../../store/tokens/tokensReducer';
import "./CadastroCategoria.css";

function CadastroCategoria() {

  let navigate = useNavigate();
  const { id } = useParams<{ id: string }>();
  const token = useSelector<TokenState, TokenState["token"]>(  
    (state) => state.token
  );
  const [categoria, setCategoria] = useState<Categorias>({
    id: 0,
    tipo: "",
    artista: "",
    tutorial: null
  })

  useEffect(() => {
    console.log(token)
    if (token === "") {
      alert("Você precisa estar logado")
      navigate("/login")
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [token])

  useEffect(() => {
    if (id !== undefined) {
      findByID(id)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id])

  async function findByID(id: string) {
    buscaId(`/categorias/${id}`, setCategoria, {
      headers: {
        'Authorization': token
      }
    })
  }

  function updatedCategoria(e: ChangeEvent<HTMLInputElement>) {
    setCategoria({
      ...categoria,
      [e.target.name]: e.target.value,
    })
  }

  async function onSubmit(e: ChangeEvent<HTMLFormElement>) {
    e.preventDefault()
    console.log("categoria " + JSON.stringify(categoria))

    if (id !== undefined) {
      console.log(categoria)
      put(`/categorias`, categoria, setCategoria, {
        headers: {
          'Authorization': token
        }
      })
      alert('Categoria atualizada com sucesso');
    } else {
      post(`/categorias`, categoria, setCategoria, {
        headers: {
          'Authorization': token
        }
      })
      alert('Categoria cadastrada com sucesso')
    }
    back()
  }

  function back() {
    navigate("/categorias")
  }

  return (
    <Container maxWidth="sm" className="topo">
      <form onSubmit={onSubmit}>
        <Typography variant="h3" color="textSecondary" component="h1" align="center">Formulário de cadastro Categoria</Typography>
        <TextField value={categoria.tipo} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedCategoria(e)} id="tipo" label="tipo" variant="outlined" name="tipo" margin="normal" fullWidth />
        <TextField value={categoria.artista} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedCategoria(e)} id="artista" label="artista" variant="outlined" name="artista" margin="normal" fullWidth />
        <TextField value={categoria.tutorial} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedCategoria(e)} id="tutorial" label="tutorial" variant="outlined" name="tutorial" margin="normal" fullWidth />
        <Button type="submit" variant="contained" color="primary">
          Finalizar
        </Button>
      </form>
    </Container>
  )
}

export default CadastroCategoria