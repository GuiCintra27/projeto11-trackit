import styled from "styled-components";
import Formulary from "./global/form";
import LOGO from "../Assets/logo.svg";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { ThreeDots } from 'react-loader-spinner'

export default function SingUp() {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [image, setImage] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const URL = ('https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/sign-up');

    function register(e) {
        e.preventDefault();
        setLoading(true);
        if (email.length > 10 && email.includes('.com')) {
            if (password.length > 7) {
                if (name.length > 2) {
                    if (image.includes('https://')) {
                        const resgisterInformations = {
                            email: email,
                            name: name,
                            image: image,
                            password: password
                        };

                        axios.post(URL, resgisterInformations).catch(error => {
                            setLoading(false);
                            alert(error.response.data.message);
                        });

                        axios.post(URL, resgisterInformations).then(response => navigate('/'));
                    } else {
                        alert('A imagem inserida não é válida');
                        setLoading(false);
                    }
                } else {
                    alert('O nome deve ter pelo menos 3 caracteres');
                    setLoading(false);
                }
            } else {
                alert('A senha deve ter pelo menos 8 dígitos');
                setLoading(false);
            }
        } else {
            alert('Email preenchido incorretamente');
            setLoading(false);
        }
    }

    return (
        <Body>
            <img src={LOGO} alt="Logo" />
            <Formulary className="login" opacity={loading ? '0.8' : '1'} onSubmit={register}>
                <input disabled={loading ? 'disabled' : null} placeholder="email" type='email' value={email} onChange={(e) => setEmail(e.target.value)} />
                <input disabled={loading ? 'disabled' : null} placeholder="senha" type='password' value={password} onChange={(e) => setPassword(e.target.value)} />
                <input disabled={loading ? 'disabled' : null} placeholder="nome" value={name} onChange={(e) => setName(e.target.value)} />
                <input disabled={loading ? 'disabled' : null} placeholder="foto" value={image} onChange={(e) => setImage(e.target.value)} />
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
                        'Cadastrar'
                    )}
                </button>
            </Formulary>
            <Link to={'/'}>Já tem uma conta? Faça login!</Link>
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