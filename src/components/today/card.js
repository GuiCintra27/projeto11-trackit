import { useState } from "react";
import styled from "styled-components";
import checkIcon from "../../Assets/checkIcon.svg";

export default function Card({ cardName, total, setPercentage, completedHabits, setCompletedHabits, index }) {
    const [checkBg, setCheckBg] = useState('var(--mediumGray)');

    function check() {
        if (!completedHabits.id.includes(index)) {
            let completed = completedHabits.completed + 1;
            setCheckBg('var(--completedHabit)');
            setPercentage(((completed / total) * 100).toFixed(0));
            setCompletedHabits({id: [...completedHabits.id, index], completed: completed});
        }else{
            let completed = completedHabits.completed - 1;
            let ids = completedHabits.id.map((item) =>{
                if(item === index){
                    return false;
                }
                return item;
            })
            setCheckBg('var(--mediumGray)');
            setPercentage(((completed / total) * 100).toFixed(0));
            setCompletedHabits({id: [...ids], completed: completed});
        }
    }

    return (
        <CardInformations color={checkBg} onClick={check}>
            <div className="cardInformations">
                <h1>{cardName}</h1>
                <p>Sequência atual: 3 dias</p>
                <p>Seu recorde: 5 dias</p>
            </div>
            <div className="check">
                <img src={checkIcon} alt='Marcar como concluído' />
            </div>
        </CardInformations>
    );
}


const CardInformations = styled.div`
    width: 34rem;
    height: 9.5rem;
    background-color: var(--white);
    position: relative;
    padding: 1.3rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 1rem;

    div.cardInformations{
        display: flex;
        flex-direction: column;

        p{
            font-size: 13px;
        }
    }

    h1{
        font-weight: 400;
        font-size: 20px;
        margin-bottom: .7rem;
    }

    div.check{
        height: 7rem;
        width: 7rem;
        display: flex;
        align-items: center;
        justify-content: center;
        border: 1px solid var(--stroke);
        border-radius: 5px;
        background-color: ${props => props.color};

        img{
            width: 3.5rem;
            height: 2.8rem;
        }
    }
`;