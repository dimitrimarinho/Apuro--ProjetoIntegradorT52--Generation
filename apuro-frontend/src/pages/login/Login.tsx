import React, { ChangeEvent, useState, useEffect } from "react";
import { Link, useNavigate } from 'react-router-dom';
import UserLogin from "../../models/UserLogin";
import { login } from "../../services/Service";
import { useDispatch } from "react-redux";
import { addToken } from "../../store/tokens/actions";
import { toast } from "react-toastify";
import logoApuro from '../../assets/logo/logo-apuro-verdeclaro.gif'
import "./Login.css";

function Login() {

    let navigate = useNavigate();

    const dispatch = useDispatch();

    const [token, setToken] = useState('');

    const [userLogin, setUserLogin] = useState<UserLogin>(
        {
            id: 0,
            // nome: '',
            usuario: '',
            senha: '',
            foto: '',
            token: ''
        }
    )

    // const [respUserLogin, setRespUserLogin] = useState<UserLogin>({
    //     id: 0,
    //     nome: '',
    //     usuario: '',
    //     senha: '',
    //     token: '',
    //     foto: '',
    //   });

    function updatedModel(e: ChangeEvent<HTMLInputElement>) {
        setUserLogin(
            {
                ...userLogin,
                [e.target.name]: e.target.value
            })
    }

    async function onSubmit(e: ChangeEvent<HTMLFormElement>) {
        e.preventDefault();
        try {
            await login("/usuario/logar", userLogin, setToken/*, setRespUserLogin*/)
            toast.success("Usuário logado com sucesso!", {
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
        catch (error) {
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

    useEffect(() => {
        if (token !== "") {
            dispatch(addToken(token))
            navigate('/home')
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [token])

    // useEffect(() => {
    //     if (respUserLogin.token !== '') {

    //       dispatch(addToken(respUserLogin.token));
    //       dispatch(addId(respUserLogin.id.toString())); // Faz uma conversão de Number para String
    //       navigate('/home');
    //     }
    //     // eslint-disable-next-line react-hooks/exhaustive-deps
    //   }, [respUserLogin.token]);

    return (
        <>
            <div className="background-login">
                <div className="container" id="container">
                    <div className="form-container sign-in-container">
                        <form className="form-login" onSubmit={onSubmit}>
                            <h1>Login</h1>
                            <div className="social-container">
                            </div>
                            <span>Use seu login</span>
                            <input value={userLogin.usuario} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)} id='usuario' name='usuario' type="email" placeholder="Email" className='input-login' />
                            <input value={userLogin.senha} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)} id='senha' name='senha' type="password" placeholder="Senha" className='input-login' />
                            <Link to='/cadastro' className='text-decoration-none forget-password'>
                                Esqueceu sua senha?
                            </Link>
                            <button className="button-login">Entrar</button>
                        </form>
                    </div>
                    <div className="overlay-container">
                        <div className="overlay">
                            <div className="overlay-panel overlay-right">
                                <img className="logoApuro" src={logoApuro} alt="Logo da Apuro" />
                                <p>Crie uma conta para começar a vender suas obras!</p>
                                <Link to='/cadastro'>
                                    <button className="button-login" id="cadastre-se">Cadastre-se</button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Login;