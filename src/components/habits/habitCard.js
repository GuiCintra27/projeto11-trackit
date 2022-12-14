import axios from "axios";
import styled from "styled-components";
import trashIcon from "../../Assets/trashIcon.svg";

export default function HabitCard({ header, getHabit, id, name, weekdays, habitDays, calcPercentage }) {
    const URL = `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}`;

    function trash() {
        const del = window.confirm('Deseja deletar o hábito?');

        if (del === true) {
            axios.delete(URL, header).then(response => {
                getHabit();
                calcPercentage();
            });
        }
    }

    return (
        <Card>
            <img src={trashIcon} alt='deletar Hábito' onClick={trash} />
            <h1>{name}</h1>
            <div className="weekDay">
                {weekdays.map((day, index) => (
                    <div key={index} className={`day` + (habitDays.includes(index) ? ' check' : '')}>{day}</div>
                ))}
            </div>
        </Card>
    );
}

const Card = styled.div`
    width: clamp(100%, 100%, 34rem);
    height: 9rem;
    background-color: var(--white);
    position: relative;
    padding: 1rem;
    display: flex;
    flex-direction: column;
    gap: .8rem;
    margin-bottom: 1rem;

    img{
        width: 1.3rem;
        height: 1.5rem;
        position: absolute;
        top: 1rem;
        right: 1rem;
    }

    h1{
        font-weight: 400;
        font-size: 20px;
    }

    div.weekDay{
        width: 100%;
        display: flex;
        gap: .5rem;

        div.day{
            height: 3rem;
            width: 3rem;
            padding: .8rem;
            font-size: 20px;
            font-weight: 400;
            border: 1px solid var(--stroke);
            border-radius: 5px;
            color: var(--textDisabled);
            display: flex;
            justify-content: center;
            align-items: center;
        }

        div.check{
            background-color: var(--mediumGray);
            color: var(--white);
        }
    }
`;
