import styled from "styled-components";

const Formulary = styled.form`
    margin-inline: auto;
    width: 30.3rem;
    display: flex;
    flex-direction: column;
    gap: .6rem;
    opacity: ${props => props.opacity};

    input{
        width: 100%;
        height: 4.5rem;
        padding: 1rem;
        font-size: 20px;
        font-weight: 400;
        border: 1px solid var(--stroke);
        border-radius: 5px;
    }

    input::placeholder{
        color: var(--textDisabled);
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

    div.habitsButtons{
        margin-top: 3rem;
        display: flex;
        align-items: center;
        justify-content: end;
        gap: 1rem;
    }

    button{
        width: 100%;
        height: 4.5rem;
        display: flex;
        align-items: center;
        justify-content: center;
        border: none;
        border-radius: 5px;
    }

    button.blue{
        font-size: 20px;
        background-color: var(--lightBlue);
        color: var(--white);
    }

    button.white{
        background-color: var(--white);
        color: var(--lightBlue);
    }

    button.habits{
        width: 8.4rem;
        height: 3.4rem;
        font-size: 16px;
    }

    &.login{
        margin: 3.5rem 0 2.5rem 0;
    }
`;

export default Formulary;