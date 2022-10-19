import Footer from "../global/footer";
import Header from "../global/header";
import styled from "styled-components";
import Card from "./card";
import { useState } from "react";

export default function Today({ userHabits, percentage ,setPercentage }) {
    const [completedHabits, setCompletedHabits] = useState({id: [], completed: 0});

    return (
        <Body>
            <Header />

            <MyHabits>
                <h1>Quarta, 19/10</h1>
                <p className="subtitle">Nenhum hábito concluído ainda</p>
            </MyHabits>

            {userHabits.map((item, index) => (
                <Card key={index} cardName={item.name} total={userHabits.length} setPercentage={setPercentage} completedHabits={completedHabits} setCompletedHabits={setCompletedHabits} index={index} />
            ))}

            <Footer percentage={percentage} />
        </Body>
    );
}

const Body = styled.div`
    width: 100vw;
    height: 100vh;
    position: relative;
    padding: 9.2rem 1.7rem 10rem 1.7rem;
    color: var(--darkGray);

    & > div > p.subtitle{
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
