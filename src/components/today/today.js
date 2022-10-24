import Footer from "../global/footer";
import Header from "../global/header";
import styled from "styled-components";
import Card from "./card";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import UserContext from "../dataContext";

export default function Today() {
    const dayjs = require('dayjs');
    const [userHabits, setUserHabits] = useState([]);
    const URL = ('https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today');
    const { percentage, calcPercentage, TOKEN } = useContext(UserContext);
    const header = { headers: { "Authorization": `Bearer ${TOKEN}` } };
    const weekdays = ['Domingo', 'Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira', 'Sábado'];

    function getHabits() {
        axios.get(URL, header).then(response => setUserHabits([...response.data]));
        axios.get(URL, header).catch(response => console.log(response));
    }

    useEffect(() => {
        getHabits();
        calcPercentage();
    }, []);

    return (
        <Body>
            <Header />

            <MyHabits>
                <h1>{weekdays[dayjs().day()]}, {dayjs().format('DD/MM')}</h1>
                <p className={Number(percentage) === 0 ? 'unDone' : 'done'}>{Number(percentage) === 0 ? 'Nenhum hábito concluído ainda' : `${percentage}% dos hábitos concluídos`}</p>
            </MyHabits>

            {userHabits.map((item, index) => (
                <Card key={index} id={item.id} header={header} isDone={item.done} getHabits={getHabits} cardName={item.name} currentSequence={item.currentSequence} highestSequence={item.highestSequence} calcPercentage={calcPercentage} />
            ))}

            <Footer />
        </Body>
    );
}

const Body = styled.div`
    width: 100vw;
    height: 100vh;
    position: relative;
    padding: 9.2rem 1.7rem 10rem 1.7rem;
    color: var(--darkGray);

    p.done{
        font-size: 18px;
        color: var(--completedHabit);
    }

    p.unDone{
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
