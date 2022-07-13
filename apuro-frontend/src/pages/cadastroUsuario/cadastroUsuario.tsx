import React, { ChangeEvent, useEffect, useState } from "react";
import { Grid, Typography, TextField, Button } from "@material-ui/core";
import { Box } from "@mui/material";
import { Link, useNavigate } from 'react-router-dom';
import './CadastroUsuario.css';
import User from "../../models/User";
import { cadastroUsuario } from "../../services/Service";
import { toast } from "react-toastify";

function CadastroUsuario() {

    let navigate = useNavigate();
    const [confirmarSenha,setConfirmarSenha] = useState<String>("")
    const [user, setUser] = useState<User>(
        {
            id: 0,
            usuario: '',
            nome: '',
            senha: '',
            foto: null,
            dataDeNascimento: null,
            cpf: '',
            endereco: null,
            descricao: null,
            produtos: null
        })

    const [userResult, setUserResult] = useState<User>(
        {
            id: 0,
            nome: '',
            usuario: '',
            senha: '',
            foto: null,
            dataDeNascimento: null,
            cpf: '',
            endereco: null,
            descricao: null,
            produtos: null
        })

    useEffect(() => {

        if (userResult.id !== 0) {
            navigate("/login")
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [userResult])


    function confirmarSenhaHandle(e: ChangeEvent<HTMLInputElement>){
        setConfirmarSenha(e.target.value)
    }


    function updatedModel(e: ChangeEvent<HTMLInputElement>) {

        setUser({
            ...user,
            [e.target.name]: e.target.value
        })

    }
    async function onSubmit(e: ChangeEvent<HTMLFormElement>) {
        e.preventDefault()
        if(confirmarSenha === user.senha){
        cadastroUsuario("/usuario/cadastrar", user, setUserResult)
       
        toast.success("Usuario cadastrado com sucesso", {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: false,
            theme: "colored",
            progress: undefined
            
    
        })
        }else{
           
            toast.error("Dados inconsistentes. Favor verificar as informações de cadastro.", {
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
    }


    return (
        <Grid container direction='row' justifyContent='center' alignItems='center'>
            <Grid item xs={6} className='imagem2'></Grid>
            <Grid item xs={6} alignItems='center'>
                <Box paddingX={10}>
                    <form onSubmit={onSubmit}>
                        <Typography variant="h3" gutterBottom color="textPrimary" component="h3" align="center" className="textos2">Cadastrar</Typography>

                        <TextField value={user.usuario} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)} id='usuario' label='usuario' variant='outlined' name='usuario' margin='normal' fullWidth />

                        <TextField value={user.nome} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)} id='nome' label='nome' variant='outlined' name='nome' margin='normal' fullWidth />
                        
                        <TextField value={user.senha} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)} id='senha' label='senha' variant='outlined' name='senha' margin='normal' type='password' fullWidth />

                        <TextField value={confirmarSenha} onChange={(e: ChangeEvent<HTMLInputElement>) => confirmarSenhaHandle(e)} id='confirmarSenha' label='confirmarSenha' variant='outlined' name='confirmarSenha' margin='normal' type='password' fullWidth />

                        <TextField value={user.foto} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)} id='foto' label='foto' variant='outlined' name='foto' margin='normal' fullWidth />

                        <TextField value={user.dataDeNascimento} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)} id='dataDeNascimento' label='dataDeNascimento' variant='outlined' name='dataDeNascimento' margin='normal' fullWidth />

                        <TextField value={user.cpf} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)} id='cpf' label='cpf' variant='outlined' name='cpf' margin='normal' fullWidth />

                        <TextField value={user.endereco} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)} id='endereco' label='endereco' variant='outlined' name='endereco' margin='normal' fullWidth />

                        <TextField value={user.descricao} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)} id='descricao' label='descricao' variant='outlined' name='descricao' margin='normal' fullWidth />

                        <Box marginTop={2} textAlign='center'>
                            <Button className='btnCadastrar' type='submit' variant='contained' color='primary' >
                                Cadastrar
                            </Button>
                            <Link to='/login' className='text-decorator-none'>
                                <Button variant='contained' color='secondary' className='btnCancelar'>
                                    Cancelar
                                </Button>
                            </Link>
                        </Box>
                    </form>
                </Box>
            </Grid>
        </Grid>
    );
}

export default CadastroUsuario;