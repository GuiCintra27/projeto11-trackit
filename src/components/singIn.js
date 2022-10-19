import styled from "styled-components";
import Formulary from "./global/form";
import LOGO from "../Assets/logo.svg";
import { Link } from "react-router-dom";

export default function SingIn() {
    return (
        <Body>
            <img src={LOGO} alt="Logo" />
            <Formulary className="login">
                <input placeholder="email" type='email' />
                <input placeholder="senha" type='password' />
                <input placeholder="nome" />
                <input placeholder="foto" />
                <button type="submit" className="blue">Cadastrar</button>
            </Formulary>
            <Link to={'/'}>Já tem uma conta? Faça login!</Link>
        </Body>
    )
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