import React, { ChangeEvent, useEffect, useState } from 'react'
import { Button, Container, TextField, Typography } from '@material-ui/core';
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
    descricao: "",
    imagemCategoria: undefined
  })

  useEffect(() => {
    console.log(token)
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
      if (categoria.imagemCategoria === "") {
        categoria.imagemCategoria = undefined
      }
      put(`/categorias`, categoria, setCategoria, {
        headers: {
          'Authorization': token
        }
      })
      toast.success("Categoria atualizada com sucesso", {
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
      if (categoria.imagemCategoria === "") {
        categoria.imagemCategoria = undefined
      }
      post(`/categorias`, categoria, setCategoria, {
        headers: {
          'Authorization': token
        }
      })
      toast.success("Categoria cadastrada com sucesso", {
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
    navigate("/categorias")
  }

  return (
    <>
      <div className="box-form">
        <Container maxWidth="sm" className="sticky-container">
          <form onSubmit={onSubmit}>
            <Typography variant="h4" color="textPrimary" component="h1" align="center">Cadastrar Categoria</Typography>
            <TextField required value={categoria.tipo} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedCategoria(e)} id="tipo" label="Nome da Categoria" variant="outlined" name="tipo" margin="normal" fullWidth />
            <TextField required value={categoria.descricao} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedCategoria(e)} id="descricao" label="Descrição" variant="outlined" name="descricao" margin="normal" fullWidth />
            <TextField value={categoria.imagemCategoria} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedCategoria(e)} id="imagemCategoria" label="Imagem (link)" variant="outlined" name="imagemCategoria" margin="normal" fullWidth />
            <Button className="button-cadcategoria" type="submit" variant="contained" color="primary" fullWidth>
              Concluir
            </Button>
          </form>
        </Container>
      </div>
    </>
  )
}

export default CadastroCategoria