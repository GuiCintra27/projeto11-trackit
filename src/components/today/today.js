import Footer from "../global/footer";
import Header from "../global/header";
import Card from "./card";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import UserContext from "../dataContext";

export default function Today() {
    const dayjs = require('dayjs');
    const [userHabits, setUserHabits] = useState([]);
    const URL = ('https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today');
    const { percentage, calcPercentage, TOKEN, Body, MyHabits } = useContext(UserContext);
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
        <>
            <Header />
            <Body height={'72vh'}>

                <MyHabits>
                    <h1>{weekdays[dayjs().day()]}, {dayjs().format('DD/MM')}</h1>
                    <p className={Number(percentage) === 0 ? 'unDone' : 'done'}>{Number(percentage) === 0 ? 'Nenhum hábito concluído ainda' : `${percentage}% dos hábitos concluídos`}</p>
                </MyHabits>

                {userHabits.map((item, index) => (
                    <Card key={index} id={item.id} header={header} isDone={item.done} getHabits={getHabits} cardName={item.name} currentSequence={item.currentSequence} highestSequence={item.highestSequence} calcPercentage={calcPercentage} />
                ))}

            </Body>
            <Footer />
        </>
    );
}
