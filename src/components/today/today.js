import Footer from "../global/footer";
import Header from "../global/header";
import styled from "styled-components";
import Card from "./card";
import { useContext, useState } from "react";
import axios from "axios";
import UserContext from "../dataContext";

export default function Today({ percentage, setPercentage }) {
    const userHabits = [];
    const [completedHabits, setCompletedHabits] = useState({ id: [], completed: 0 });
    const URL = ('https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today');
    const { TOKEN } = useContext(UserContext);
    const header = {headers : {"Authorization" : `Bearer ${TOKEN}`}};

    axios.get(URL, header).then();
    axios.get(URL, header).catch(response => console.log(response));

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
