import styled from "styled-components";
import Formulary from "./form";
import LOGO from "../Assets/logo.svg";
import { Link, useNavigate } from "react-router-dom";

export default function Home(){
    const navigate = useNavigate();
    
    function login(e){
        e.preventDefault();
        navigate('/habitos');
    }

    return(
        <Body>
            <img src={LOGO} alt="Logo" />
            <Formulary className="login" onSubmit={login}>
                <input placeholder="email" type='email' />
                <input placeholder="senha" type='password' />
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