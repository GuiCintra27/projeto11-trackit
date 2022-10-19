import styled from "styled-components";

export default function Header(){
    return (
        <PageHeader>
            <h1>TrackIt</h1>
            <img src="https://akamai.sscdn.co/letras/215x215/fotos/f/b/e/7/fbe7f6e0f613d2121a31a68fdd7963cf.jpg" alt="Imagem de usuário" />
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