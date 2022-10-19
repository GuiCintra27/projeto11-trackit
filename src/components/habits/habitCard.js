import styled from "styled-components";
import trashIcon from "../../Assets/trashIcon.svg";

export default function HabitCard({ name, weekdays, habitDays }) {
    return (
        <Card>
            <img src={trashIcon} alt='deletar Hábito' />
            <h1>{name}</h1>
            <div className="weekDay">
                {weekdays.map((day, index) => (
                    <div className={`day` + (habitDays.includes(index) ? ' check' : '')}>{day}</div>
                ))}
            </div>
        </Card>
    );
}

const Card = styled.div`
    width: 34rem;
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