import { Button, CardContent, Typography } from '@material-ui/core';
import { Box } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import Produto from '../../../models/Produto';
import { buscaId, deleteId } from '../../../services/Service';
import { TokenState } from '../../../store/tokens/tokensReducer';
import "./DeletarProduto.css";

function DeletarProduto() {

  let navigate = useNavigate();
  const { id } = useParams<{ id: string }>();
  const token = useSelector<TokenState, TokenState["token"]>(
    (state) => state.token
  );
  const [produto, setProdutos] = useState<Produto>()

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

  useEffect(() => {
    if (id !== undefined) {
      findById(id)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id])

  async function findById(id: string) {
    buscaId(`/produtos/${id}`, setProdutos, {
      headers: {
        'Athorization': token
      }
    })
  }

  function sim() {
    navigate("/listaProduto")
    deleteId(`/produtos/${id}`, {
      headers: {
        'Authorization': token
      }
    });
    toast.success("Produto deletado com sucesso", {
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
    navigate("/listaProduto")
  }

  return (
    <>
      <div className="centralized-box-del">
        <div className="box-border-del" >
          <Typography className="title">
            Deseja deletar o produto ?
          </Typography>
          <CardContent>
            <Box justifyContent="center">
              <Typography color="textSecondary" >
                {produto?.nome}
              </Typography>
            </Box>

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

export default DeletarProduto;