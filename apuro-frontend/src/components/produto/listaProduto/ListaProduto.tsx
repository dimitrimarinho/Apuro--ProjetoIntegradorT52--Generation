import { Button, Card, CardActions, CardContent, Typography } from '@material-ui/core';
import { Box } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import Produto from '../../../models/Produto';
import { busca } from '../../../services/Service';
import { TokenState } from '../../../store/tokens/tokensReducer';

import "./ListaProduto.css";

function ListaProduto() {

    const[produtos, setProdutos] = useState<Produto[]>([])
  
    let navigate = useNavigate();
  
    const token = useSelector<TokenState, TokenState["token"]>(
        (state) => state.token
    );
    
   useEffect(()=>{
    if(token === "") {
        alert("Você precisa estar logado")
        navigate("/login")
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
   }, [token])
   
async function getProdutos(){
    await busca(`/produtos`, setProdutos, {
        headers: {
            'Authorization': token
        }
    })
}
 useEffect(()=>{
    getProdutos()
    // eslint-disable-next-line react-hooks/exhaustive-deps
 }, [produtos.length])  


  
    return (
   <>
   {
        produtos.map(produto => (
          <Box m={2} >
            <Card variant="outlined">
              <CardContent>
                <Typography color="textSecondary" gutterBottom>
                  Produto
                </Typography>
                <Typography variant="h5" component="h2">
                  {produto.nome}
                </Typography>
                <Typography variant="body2" component="p">
                  {produto.descricao}
                </Typography>
                <Typography variant="body2" component="p">
                  {produto.quantidade}
                </Typography>
                <Typography variant="body2" component="p">
                  {produto.preco}
                </Typography>
                <Typography variant="body2" component="p">
                  {produto.foto}
                </Typography>
                <Typography variant="body2" component="p">
                  {produto.sustentabilidade}
                </Typography>
                <Typography variant="body2" component="p">
                  {produto.regiao}
                </Typography>
                <Typography variant="body2" component="p">
                  {produto.categorias?.tipo}
                </Typography>
                <Typography variant="body2" component="p">
                  {produto.categorias?.artista}
                </Typography>
                <Typography variant="body2" component="p">
                  {produto.categorias?.tutorial}
                </Typography>
              </CardContent>
              <CardActions>
                <Box display="flex" justifyContent="center" mb={1.5}>

                  <Link to={`/cadastrarProduto/${produto.id}`} className="text-decorator-none" >
                    <Box mx={1}>
                      <Button variant="contained" className="marginLeft" size='small' color="primary" >
                        atualizar
                      </Button>
                    </Box>
                  </Link>
                  <Link to={`/deletarProduto/${produto.id}`} className="text-decorator-none">
                    <Box mx={1}>
                      <Button variant="contained" size='small' color="secondary">
                        deletar
                      </Button>
                    </Box>
                  </Link>
                </Box>
              </CardActions>
            </Card>
          </Box>
        ))
      }
   </>

  );
}

export default ListaProduto;

