import styled from "styled-components";
import Footer from "../global/footer";
import Header from "../global/header";
import addictIcon from "../../Assets/addictIcon.svg"
import Formulary from "../global/form";
import Day from "./day";
import { useEffect, useState } from "react";
import HabitCard from "./habitCard";
import { useContext } from "react";
import UserContext from "../dataContext";
import axios from "axios";
import { ThreeDots } from 'react-loader-spinner'

export default function Habits() {
    const [userHabits, setUserHabits] = useState([]);
    const [habitName, setHabitName] = useState('');
    const [habitDays, setHabitDays] = useState([]);
    const [newHabit, setNewHabit] = useState(false);
    const weekdays = ['D', 'S', 'T', 'Q', 'Q', 'S', 'S'];
    const { calcPercentage, TOKEN } = useContext(UserContext);
    const postURL = 'https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits';
    const getURL = 'https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits';
    const header = { headers: { "Authorization": `Bearer ${TOKEN}` } };
    const [loading, setLoading] = useState(false);
    const [card, setCard] = useState({ name: '', days: [] });

    function getHabit() {
        axios.get(getURL, header).then((response) => {
            setUserHabits([...response.data])
        });
        axios.get(getURL, header).catch((response) => {
            setUserHabits([...response.data])
        });
    }

    useEffect(() => {
        getHabit();
    }, []);

    function addHabit(reset = false) {
        setNewHabit(!newHabit);
        setLoading(false);
        getHabit();

        if(reset === true){
            setHabitName('');
            setHabitDays([]);
            calcPercentage();
        }else{
            setCard({ name: '', days: [] });
            setHabitName(card.name);
            setHabitDays([...card.days]);
        }
    }

    function cancel() {
        setCard({ name: habitName, days: [...habitDays] });
        setNewHabit(!newHabit);
    }

    function saveHabit(e) {
        e.preventDefault();
        setLoading(true);

        if (habitName.length > 3 && habitDays.length > 0) {
            axios.post(postURL, { name: habitName, days: [...habitDays] }, header)
                .then(response => addHabit(true))
                .catch(err => {
                    alert(err.response.data.message);
                    setLoading(false);
                });
        } else {
            if (habitName.length <= 3) {
                alert('Nome do hábito curto demais')
            } else {
                alert('Preencha pelo menos um dia da semana');
            }
            setLoading(false);
        }
    }

    return (
        <>
            <Header />
            <Body>
                <MyHabits>
                    <div className="menu">
                        <h1>Meus hábitos</h1>
                        <button onClick={addHabit}>
                            <img src={addictIcon} alt='Adicionar novo hábito' />
                        </button>
                    </div>
                    {
                        newHabit ? (
                            <CreateHabit>
                                <Formulary onSubmit={saveHabit} opacity={loading ? '0.8' : '1'}>
                                    <input
                                        disabled={loading ? 'disabled' : null}
                                        placeholder="nome do hábito"
                                        onChange={(e) => setHabitName(e.target.value)}
                                        value={habitName}
                                        type='text'
                                    />
                                    <div className="weekDay">
                                        {weekdays.map((weekday, index) => <Day key={index} loading={loading} weekday={weekday} habitDays={habitDays} setHabitDays={setHabitDays} index={index} />)}
                                    </div>

                                    <div className="habitsButtons">
                                        <button disabled={loading ? 'disabled' : null} className="white habits" type="button" onClick={cancel}>Cancelar</button>
                                        <button disabled={loading ? 'disabled' : null} className="blue habits" type="submit">
                                            {loading ? (
                                                <ThreeDots
                                                    height="40"
                                                    width="40"
                                                    radius="9"
                                                    color="#FFFFFF"
                                                    ariaLabel="three-dots-loading"
                                                    wrapperStyle={{}}
                                                    wrapperClassName=""
                                                    visible={true}
                                                />
                                            ) : (
                                                'Salvar'
                                            )}
                                        </button>
                                    </div>
                                </Formulary>
                            </CreateHabit>
                        ) : (
                            null
                        )
                    }
                </MyHabits>
                {userHabits.length > 0 ?
                    userHabits.map((item, index) => (
                        <HabitCard key={index} header={header} getHabit={getHabit} id={item.id} name={item.name} weekdays={weekdays} habitDays={item.days} calcPercentage={calcPercentage} />
                    ))
                    :
                    <p>Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!</p>
                }
            </Body>
            <Footer />
        </>
    );
}

const Body = styled.div`
    width: 100vw;
    height: calc(72vh);
    position: relative;
    margin: 9.2rem 0 0 0;
    padding: 0 1.7rem 1rem 1.7rem;
    color: var(--darkGray);
    overflow-y: scroll;

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