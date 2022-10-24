import axios from "axios";
import { createContext, useState } from "react";
import styled from "styled-components";

const UserContext = createContext();

export function UserProvider({ children }) {
    const URL = ('https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today');
    const [percentage, setPercentage] = useState(0);
    const [perfilImg, setPerfilImg] = useState('');
    const [TOKEN, setTOKEN] = useState('');
    const header = { headers: { "Authorization": `Bearer ${TOKEN}` } };

    function calcPercentage() {
        axios.get(URL, header).then(response => {
            const total = [...response.data];
            const completed = total.filter((item) => {
                if (item.done) {
                    return true
                }
                return false
            });
            if (total.length === 0) {
                setPercentage(0)
            } else {
                setPercentage(((completed.length / total.length) * 100).toFixed(0));
            }
        });
        axios.get(URL, header).catch(response => console.log(response));
    }

    return (
        <UserContext.Provider value={{ percentage, calcPercentage, perfilImg, setPerfilImg, TOKEN, setTOKEN, Body, MyHabits }}>
            {children}
        </UserContext.Provider>
    )
}

const Body = styled.div`
    width: calc(100vw - 4rem);
    height: ${props => props.height};
    position: relative;
    margin-top: 9.2rem;
    margin-inline: auto;
    padding: 0 0 3rem 0;
    color: var(--darkGray);
    overflow-y: scroll;

    &>p{
      font-size: 18px;
    }

    p.subtitle{
      font-size: 18px;
      color: var(--defaultSubtitle);
    }

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

export default UserContext;
