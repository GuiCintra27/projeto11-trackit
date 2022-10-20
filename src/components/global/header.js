import styled from "styled-components";
import { useContext } from "react";
import UserContext from "../dataContext";

export default function Header() {
    const { perfilImg } = useContext(UserContext);

    return (
        <PageHeader>
            <h1>TrackIt</h1>
            <img src={perfilImg} alt="Imagem de usuário" />
        </PageHeader>
    )
}

const PageHeader = styled.header`
    top: 0;
    left: 0;
    position: absolute;
    width: 100%;
    height: 7rem;
    background-color: var(--darkBlue);
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-inline: 1.8rem;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);

    h1{
        color: var(--white);
        font-size: 40px;
        font-weight: 400;
        font-family: 'Playball', cursive;
    }

    img{
        width: 5.1rem;
        height: 5.1rem;
        border-radius: 100%;
    }
`;