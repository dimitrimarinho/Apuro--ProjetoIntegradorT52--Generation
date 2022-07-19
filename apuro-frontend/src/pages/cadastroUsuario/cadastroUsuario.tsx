import React, { ChangeEvent, useEffect, useState } from "react";
import { Link, useNavigate } from 'react-router-dom';
import './CadastroUsuario.css';
import User from "../../models/User";
import { cadastroUsuario } from "../../services/Service";
import { toast } from "react-toastify";

function CadastroUsuario() {

    let navigate = useNavigate();
    const [confirmarSenha, setConfirmarSenha] = useState<string>("")
    const [user, setUser] = useState<User>(
        {
            id: 0,
            usuario: '',
            nome: '',
            senha: '',
            foto: undefined,
            dataDeNascimento: undefined,
            cpf: '',
            endereco: undefined,
            descricao: undefined,
            produtos: undefined
        }
    )
    const [userResult, setUserResult] = useState<User>(
        {
            id: 0,
            nome: '',
            usuario: '',
            senha: '',
            foto: undefined,
            dataDeNascimento: undefined,
            cpf: '',
            endereco: undefined,
            descricao: undefined,
            produtos: undefined
        }
    )

    useEffect(() => {
        if (userResult.id !== 0) {
            navigate("/login")
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [userResult])

    function confirmarSenhaHandle(e: ChangeEvent<HTMLInputElement>) {
        setConfirmarSenha(e.target.value)
    }

    function updatedModel(e: ChangeEvent<HTMLInputElement>) {
        setUser({
            ...user,
            [e.target.name]: e.target.value
        })
    }

    function validateEmail(email: string) {
        var re = /\S+@\S+\.\S+/;
        return re.test(email);
    }

    function validateCPF(cpf: string) {
        var Soma;
        var Resto;
        Soma = 0;
        if (cpf === "00000000000") return false;

        for (let i = 1; i <= 9; i++)
            Soma = Soma + parseInt(cpf.substring(i - 1, i)) * (11 - i);
        Resto = (Soma * 10) % 11;

        if ((Resto === 10) || (Resto === 11))
            Resto = 0;
        if (Resto !== parseInt(cpf.substring(9, 10)))
            return false;

        Soma = 0;
        for (let i = 1; i <= 10; i++)
            Soma = Soma + parseInt(cpf.substring(i - 1, i)) * (12 - i);
        Resto = (Soma * 10) % 11;

        if ((Resto === 10) || (Resto === 11))
            Resto = 0;
        if (Resto !== parseInt(cpf.substring(10, 11)))
            return false;

        return true;
    }

    async function onSubmit(e: ChangeEvent<HTMLFormElement>) {
        e.preventDefault()
        if (confirmarSenha === user.senha && (user.senha).length >= 8 && validateEmail(user.usuario) === true && validateCPF(user.cpf) === true) {
            await cadastroUsuario("/usuario/cadastrar", user, setUserResult)
            toast.success("Usuario cadastrado com sucesso", {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: false,
                theme: "colored",
                progress: undefined
            })
            navigate("/home")
        } else {
            if (validateCPF(user.cpf) !== true) {
                toast.error("Insira um CPF válido (somente números)", {
                    position: "top-right",
                    autoClose: 2000,
                    hideProgressBar: true,
                    closeOnClick: true,
                    pauseOnHover: false,
                    draggable: false,
                    theme: "colored",
                    progress: undefined
                })
            } else if (validateEmail(user.usuario) === false) {
                toast.error("Você deve inserir um e-mail válido", {
                    position: "top-right",
                    autoClose: 2000,
                    hideProgressBar: true,
                    closeOnClick: true,
                    pauseOnHover: false,
                    draggable: false,
                    theme: "colored",
                    progress: undefined
                })
            } else if ((user.senha).length < 8) {
                toast.error("A senha deve ter no mínimo 8 caracteres", {
                    position: "top-right",
                    autoClose: 2000,
                    hideProgressBar: true,
                    closeOnClick: true,
                    pauseOnHover: false,
                    draggable: false,
                    theme: "colored",
                    progress: undefined
                })
            } else if (confirmarSenha !== user.senha) {
                toast.error(<div>As senhas não são iguais.<br /> Confirme corretamente a senha digitada</div>, {
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
                toast.error(<div>Dados inconsistentes.<br /> Erro ao logar!</div>, {
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
        }
    }

    return (
        <>
            <div className="background-login">
                <form onSubmit={onSubmit} className="container-cadastro">
                    <div className='flex1'>
                        <h2 className='criar-conta'>Criar Conta</h2>
                        <p> Seu nome * </p>
                        <input required value={user.nome} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)} id='nome' name='nome' placeholder="Nome e Sobrenome" className='input-cadastro' />
                        <p> Seu CPF * </p>
                        <input required value={user.cpf} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)} id='cpf' name='cpf' placeholder="CPF (somente números)" className='input-cadastro' />
                        <p> Insira um foto </p>
                        <input value={user.foto} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)} id='foto' name='foto' placeholder="Link da foto hospedada em outro site" className='input-cadastro' />
                    </div>
                    <div className='flex2'>
                        <p> Data de nascimento </p>
                        <input value={user.dataDeNascimento} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)} id='dataDeNascimento' name='dataDeNascimento' placeholder="Data de Nascimento" className='input-cadastro' />
                        <p> Seu endereço </p>
                        <input value={user.endereco} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)} id='endereco' name='endereco' placeholder="Endereço" className='input-cadastro' />
                        <p>Se desejar, apresente-se abaixo</p>
                        <input value={user.descricao} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)} id='descricao' name='descricao' placeholder="Breve descrição pessoal" className='input-cadastro' />
                    </div>
                    <div className='flex3'>
                        <p> Email * </p>
                        <input required value={user.usuario} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)} id='usuario' name='usuario' type="usuario" placeholder="Insira um e-mail válido" className='input-cadastro' />
                        <p> Senha * </p>
                        <input required value={user.senha} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)} id='senha' name='senha' type='password' placeholder="mínimo de 8 caracteres" className='input-cadastro' />
                        <p> Confirmar Senha * </p>
                        <input required value={confirmarSenha} onChange={(e: ChangeEvent<HTMLInputElement>) => confirmarSenhaHandle(e)} id='confirmarSenha' name="confirmarSenha" type='password' placeholder="mínimo de 8 caracteres" className='input-cadastro' />
                        <div className='flex-buttons'>
                            <Link to='/login' className='text-decoration-none'>
                                <button className='button-cdto' id="button-cancelar"> Cancelar </button>
                            </Link>
                            <button type="submit" className='button-cdto'> Cadastrar </button>
                        </div>
                    </div>
                </form>
            </div>
        </>
    );
}

export default CadastroUsuario;