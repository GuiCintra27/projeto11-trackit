import styled from "styled-components";
import Formulary from "./global/form";
import LOGO from "../Assets/logo.svg";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

export default function Home() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    function login(e) {
        e.preventDefault();
        if (email.length > 10 && password.length >= 6) {
            navigate('/habitos');
        }else{
            alert('Campo email, ou senha incorreto.')
        }
    }

    return (
        <Body>
            <img src={LOGO} alt="Logo" />
            <Formulary className="login" onSubmit={login}>
                <input placeholder="email" value={email} onChange={(e) => setEmail(e.target.value)} type='email' />
                <input placeholder="senha" value={password} onChange={(e) => setPassword(e.target.value)} type='password' />
                <button type="submit" className="blue">Entrar</button>
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