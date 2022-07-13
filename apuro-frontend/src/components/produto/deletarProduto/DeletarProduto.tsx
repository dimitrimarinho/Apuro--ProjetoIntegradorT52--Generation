import { Button, Card, CardActions, CardContent, Typography } from '@material-ui/core';
import { Box } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import Produto from '../../../models/Produto';
import { buscaId, deleteId } from '../../../services/Service';
import { TokenState } from '../../../store/tokens/tokensReducer';

import "./DeletarProduto.css";

function DeletarProduto() {
 let navigate = useNavigate();
 const{id} = useParams<{id: string}>();
 const token = useSelector<TokenState, TokenState["token"]>(
    (state) => state.token
 );

 const [produto, setProdutos] = useState<Produto>()

 useEffect(()=>{
    if(token === ""){
        alert("Você precisa estar logado")
        navigate("/login")
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
 }, [token])
 
 useEffect(()=>{
    if(id !== undefined){
        findById(id)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
 }, [id])
 
 async function findById(id: string){
    buscaId(`/produtos/${id}`, setProdutos, {
        headers: {
            'Athorization': token
        }
    })
 }
 
 function sim() {
    navigate ("/listaProduto")
    deleteId(`/produtos/${id}`, {
        headers: {
            'Authorization': token
        }
    });
    alert("Produto deletado com sucesso")
 }
 
 function nao(){
    navigate("/listaProduto")
 }
 
    return (
        <>
        <Box m={2}>
          <Card variant="outlined" >
            <CardContent>
              <Box justifyContent="center">
                <Typography color="textSecondary" gutterBottom>
                  Deseja deletar o produto:
                </Typography>
                <Typography color="textSecondary" >
                {produto?.nome}
                </Typography>
              </Box>
  
            </CardContent>
            <CardActions>
              <Box display="flex" justifyContent="start" ml={1.0} mb={2} >
                <Box mx={2}>
                <Button  onClick={sim} variant="contained" className="marginLeft" size='large' color="primary">
                  Sim
                </Button>
                </Box>
                <Box>
                <Button  onClick={nao}  variant="contained" size='large' color="secondary">
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

export default DeletarProduto;
