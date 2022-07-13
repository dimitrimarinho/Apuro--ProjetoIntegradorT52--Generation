import { Button, Container, TextField, Typography } from '@material-ui/core';
import React, { ChangeEvent, useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom'
import { toast } from 'react-toastify';
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
    tutorial: undefined
  })

  useEffect(() => {
    console.log(token)
    if (token === "") {
      toast.error("Você precisa estar logado", {
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

    if (id !== undefined) {
      if (categoria.tutorial === "") {
        categoria.tutorial = undefined
      }
      put(`/categorias`, categoria, setCategoria, {
        headers: {
          'Authorization': token
        }
      })
      
      toast.success("Categoria atualizada com sucesso", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: false,
        theme: "colored",
        progress: undefined
        

    })

    } else {
      if (categoria.tutorial === "") {
        categoria.tutorial = undefined
      }
      post(`/categorias`, categoria, setCategoria, {
        headers: {
          'Authorization': token
        }
      })
      
      toast.success("Categoria cadastrada com sucesso", {
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
    back()
  }

  function back() {
    navigate("/categorias")
  }

  return (
    <Container maxWidth="sm" className="topo">
      <form onSubmit={onSubmit}>
        <Typography variant="h3" color="textSecondary" component="h1" align="center">Formulário de cadastro Categoria</Typography>
        <TextField required value={categoria.tipo} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedCategoria(e)} id="tipo" label="tipo" variant="outlined" name="tipo" margin="normal" fullWidth />
        <TextField required value={categoria.artista} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedCategoria(e)} id="artista" label="artista" variant="outlined" name="artista" margin="normal" fullWidth />
        <TextField value={categoria.tutorial} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedCategoria(e)} id="tutorial" label="tutorial" variant="outlined" name="tutorial" margin="normal" fullWidth />
        <Button type="submit" variant="contained" color="primary">
          Finalizar
        </Button>
      </form>
    </Container>
  )
}

export default CadastroCategoria