import styled from "styled-components";
import Footer from "../global/footer";
import Header from "../global/header";

export default function History(){
    return(
        <Body>
            <Header />

            <MyHabits>
                <h1>Histórico</h1>
            </MyHabits>
            <p className="subtitle">Em breve você poderá ver o histórico dos seus hábitos aqui!</p>

            <Footer />
        </Body>
    )
}


const Body = styled.div`
    width: 100vw;
    height: 100vh;
    position: relative;
    padding: 9.2rem 1.7rem 10rem 1.7rem;
    color: var(--darkGray);

    p.subtitle{
      font-size: 18px;
      color: var(--defaultSubtitle);
    }
`;

const MyHabits = styled.div`
    width: 100%;
    margin-bottom: 2.8rem;
    
    h1{
        font-weight: 400;
        font-size: 23px;
        color: var(--darkBlue);
    }
`;