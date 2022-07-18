import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, makeStyles, Typography } from '@material-ui/core';
import { Box } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import Produto from '../../../models/Produto';
import { busca } from '../../../services/Service';
import { TokenState } from '../../../store/tokens/tokensReducer';
import "./ListaProduto.css";


const useStyles = makeStyles({
  root: {
    width: 250,
    margin: "20px",
  },
  media: {
    height: 300,
    width: 300

  },
});

function ListaProduto() {

  const [produtos, setProdutos] = useState<Produto[]>([])

  const classes = useStyles();

  let navigate = useNavigate();

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

  async function getProdutos() {
    await busca(`/produtos`, setProdutos, {
      headers: {
        'Authorization': token
      }
    })
  }

  useEffect(() => {
    getProdutos()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [produtos.length])

  return (
    <>
      {
        produtos.map(produto => (
          <Box m={2} >
            <Card variant="outlined">
              <CardActionArea>
                <Box sx={{ display: "flex", flexWrap: 'wrap', alignItems: "left", justifyContent: "left" }}>
                  <CardMedia title="Imagem do produto" image={produto.foto} className={classes.media} />
                  <Box sx={{ display: "flex", flexDirection: 'column', alignItems: "left", justifyContent: "left" }}>
                    <CardContent className='cardProduto'>
                      <Typography className='nomeProduto' variant="h4" component="h2">
                        {produto.nome}
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
                        {produto.quantidade}
                      </Typography>
                      <Typography variant="body2" component="p">
                        {produto.descricao}
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
                    
                  </Box>
                </Box>
              </CardActionArea>
            </Card>
          </Box>
        ))
      }
    </>
  );
}

export default ListaProduto;