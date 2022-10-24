import axios from "axios";
import styled from "styled-components";
import checkIcon from "../../Assets/checkIcon.svg";

export default function Card({ id, header, isDone, getHabits, cardName, currentSequence, highestSequence, calcPercentage }) {
    const postURL = `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}/check`;
    const deleteURL = `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}/uncheck`;

    function check() {
        if (!isDone) {
            axios.post(postURL, '', header)
                .then(response => {
                    calcPercentage();
                    getHabits();
                })
                .catch(err => alert(err.response.data.message));
        } else {
            axios.post(deleteURL, '', header)
                .then(response => {
                    calcPercentage();
                    getHabits();
                })
                .catch(err => alert(err.response.data.message));
        }
    }

    return (
        <CardInformations color={isDone ? 'var(--completedHabit)' : 'var(--mediumGray)'} onClick={check}>
            <div className="cardInformations">
                <h1>{cardName}</h1>
                <p>Sequência atual: <span className={isDone ? 'green' : null}>{currentSequence} dias</span></p>
                <p>Seu recorde: <span className={currentSequence === highestSequence ? 'green' : null}>{highestSequence} dias</span></p>
            </div>
            <div className="check">
                <img src={checkIcon} alt='Marcar como concluído' />
            </div>
        </CardInformations>
    );
}


const CardInformations = styled.div`
    width: clamp(100%, 100%, 34rem);
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

    .green{
        color: var(--completedHabit);
    }
`;
