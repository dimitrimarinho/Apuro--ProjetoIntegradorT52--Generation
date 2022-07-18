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
    width: "70vw",
    margin: "20px",
  },
  media: {
    height: 345,
    width: 400

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
      <Box className='caixaLP'>
        {
          produtos.map(produto => (
            <Box m={2}>
              <Card variant="outlined" className={classes.root}>
                <CardActionArea>
                  <Box marginTop="15px" sx={{ display: "flex", flexWrap: 'wrap', alignItems: "left", justifyContent: "left" }}>
                    <CardMedia title="Imagem do produto" image={produto.foto} className={classes.media} />
                    <Box sx={{ display: "flex", flexDirection: 'column', alignItems: "left", justifyContent: "left" }}>
                      <CardContent className='tamanhoCard'>
                        <Typography variant="h4" component="h2">
                          {produto.nome}
                        </Typography>

                        <Box display="flex" flexDirection="column" alignItems="left" justifyContent="left" className='linhaCard' />

                        <Box display="flex" flexDirection="row" alignItems="left" justifyContent="left" marginTop="5px" marginBottom="10px">
                          <Typography variant="h5" color="initial" className='cifrao'>R$</Typography>
                          <Typography variant="h5" component="p" className='precoProduto'>
                            {produto.preco}
                          </Typography>
                        </Box>

                        <Box display="flex" flexDirection="row" alignItems="center" justifyContent="left" marginTop="5px" marginBottom="10px">
                          <Box className='infoCard'>
                            <Typography variant="inherit" color="initial" className='atributosProdutos'>
                              Sustentabilidade
                            </Typography>
                          </Box>
                          <Typography variant="inherit" component="p">
                            {produto.sustentabilidade}
                          </Typography>
                        </Box>

                        <Box display="flex" flexDirection="row" alignItems="center" justifyContent="left" marginTop="5px" marginBottom="10px">
                          <Box className='infoCard'>
                            <Typography variant="inherit" color="initial" className='atributosProdutos'>
                              Região
                            </Typography>
                          </Box>
                          <Typography variant="inherit" component="p">
                            {produto.regiao}
                          </Typography>
                        </Box>

                        <Box display="flex" flexDirection="row" alignItems="center" justifyContent="left" marginTop="5px" marginBottom="10px">
                          <Box className='infoCard'>
                            <Typography variant="inherit" color="initial" className='atributosProdutos'>
                              Quantidade em estoque
                            </Typography>
                          </Box>
                          <Typography variant="inherit" component="p">
                            {produto.quantidade}
                          </Typography>
                        </Box>

                        <Box display="flex" flexDirection="row" alignItems="center" justifyContent="left" marginTop="5px" marginBottom="10px">
                          <Box className='infoCard'>
                            <Typography variant="inherit" color="initial" className='atributosProdutos'>
                              Categoria
                            </Typography>
                          </Box>
                          <Typography variant="inherit" component="p">
                            {produto.categorias?.tipo}
                          </Typography>
                        </Box>

                        <Box display="flex" flexDirection="row" alignItems="center" justifyContent="left" marginTop="5px" marginBottom="10px">
                          <Box className='infoCard'>
                            <Typography variant="inherit" color="initial" className='atributosProdutos'>
                              Descrição
                            </Typography>
                          </Box>
                          <Box className='infoCard2'>
                            <Typography variant="inherit" component="p">
                              {produto.descricao}
                            </Typography>
                          </Box>
                        </Box>

                      </CardContent>

                      <CardActions>
                        <Box display="flex" justifyContent="center" mb={1.5}>
                          <Link to={`/cadastrarProduto/${produto.id}`} className="text-decorator-none" >
                            <Box mx={1}>
                              <Button className='button-cdto-produto'>
                                atualizar
                              </Button>
                            </Box>
                          </Link>
                          <Link to={`/deletarProduto/${produto.id}`} className="text-decorator-none">
                            <Box mx={1}>
                              <Button className='button-cdto-produto' id="button-deletar" variant="contained" size='small'>
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
      </Box>
    </>
  );
}

export default ListaProduto;