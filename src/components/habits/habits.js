import styled from "styled-components";
import Footer from "./footer";
import Header from "./header";
import addictIcon from "../../Assets/addictIcon.svg"
import Formulary from "../form";
import Day from "./day";
import { useState } from "react";
import HabitCard from "./habitCard";

export default function Habits() {
    const [habitName, setHabitName] = useState('');
    const [habitDays, setHabitDays] = useState([]);
    const [newHabit, setNewHabit] = useState(false);
    const [userHabits, setUserHabits] = useState([]);
    const weekdays = ['D', 'S', 'T', 'Q', 'Q', 'S', 'S'];

    function addHabit() {
        setNewHabit(!newHabit);
        setHabitName('');
        setHabitDays([]);
    }

    function saveHabit(e) {
        e.preventDefault();

        setUserHabits([
            ...userHabits,
            {
                name: habitName,
                days: [...habitDays]
            }
        ]);
        addHabit();
    }

    return (
        <Body>
            <Header />
            <MyHabits>
                <div className="menu">
                    <h1>Meus hábitos</h1>
                    <button onClick={addHabit}>
                        <img src={addictIcon} alt='Adicionar novo hábito' />
                    </button>
                </div>

                {newHabit ? (
                    <CreateHabit>
                        <Formulary onSubmit={saveHabit}>
                            <input
                                placeholder="nome do hábito"
                                onChange={(e) => setHabitName(e.target.value)}
                                value={habitName}
                                type='text' />

                            <div className="weekDay">
                                {weekdays.map((weekday, index) => <Day key={index} weekday={weekday} habitDays={habitDays} setHabitDays={setHabitDays} index={index} />)}
                            </div>

                            <div className="habitsButtons">
                                <button className="white habits" onClick={addHabit}>Cancelar</button>
                                <button className="blue habits" type="submit">Salvar</button>
                            </div>
                        </Formulary>
                    </CreateHabit>
                ) : (
                    null
                )}
            </MyHabits>
            {userHabits.length > 0 ?
                userHabits.map((item, index) => (
                    <HabitCard key={index} name={item.name} weekdays={weekdays} habitDays={item.days} />
                ))
                :
                <p>Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!</p>}
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

    &>p{
      font-size: 18px;
    }
`;

const MyHabits = styled.div`
    width: 100%;
    margin-bottom: 2.8rem;

    div.menu{
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 2.8rem;
    }
    
    h1{
        font-weight: 400;
        font-size: 23px;
        color: var(--darkBlue);
    }

    button{
        width: 4rem;
        height: 3.5rem;
        background-color: var(--lightBlue);
        border: none;
        border-radius: 5px;
        display: flex;
        align-items: center;
        justify-content: center;

        img{
            width: 1.6rem;
        }
    }
`;

const CreateHabit = styled.div`
    width: 34rem;
    height: 18rem;
    background-color: var(--white);
    border-radius: 5px;
    padding: 1.8rem;
`;