import styled from "styled-components";
import Formulary from "./global/form";
import LOGO from "../Assets/logo.svg";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { ThreeDots } from 'react-loader-spinner'
import { useContext } from "react";
import UserContext from "./dataContext";

export default function Home() {
    const { setPerfilImg, setTOKEN } = useContext(UserContext);
    const [loading, setLoading] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const URL = 'https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login';

    function login(e) {
        e.preventDefault();
        const userData = { email: email, password: password };
        setLoading(true);
        axios.post(URL, userData).then(response => {
            setPerfilImg(response.data.image);
            setTOKEN(response.data.token);
            navigate("/hoje");
        });
        axios.post(URL, userData).catch(err => {
            alert(err.response.data.message);
            setLoading(false);
        });
    }

    return (
        <Body>
            <img src={LOGO} alt="Logo" />
            <Formulary className="login" opacity={loading ? '0.8' : '1'} onSubmit={login}>
                <input disabled={loading ? 'disabled' : null} placeholder="email" value={email} onChange={(e) => setEmail(e.target.value)} type='email' />
                <input disabled={loading ? 'disabled' : null} placeholder="senha" value={password} onChange={(e) => setPassword(e.target.value)} type='password' />
                <button disabled={loading ? 'disabled' : null} type="submit" className="blue">
                    {loading ? (
                        <ThreeDots
                            height="80"
                            width="80"
                            radius="9"
                            color="#FFFFFF"
                            ariaLabel="three-dots-loading"
                            wrapperStyle={{}}
                            wrapperClassName=""
                            visible={true}
                        />
                    ) : (
                        'Entrar'
                    )}
                </button>
            </Formulary>
            <Link to={'/cadastro'}>Não tem uma conta? Cadastre-se!</Link>
        </Body>
    );
}

const Body = styled.div`
    height: 100vh;
    width: 100vw;
    background-color: var(--white);
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 6.8rem;

    img{
        height: 18rem;
    }

    a{
        text-decoration: underline;
        color: var(--lightBlue);
        font-weight: 400;
        font-size: 14px;
    }
`;