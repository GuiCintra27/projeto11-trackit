import { Link } from "react-router-dom";
import styled from "styled-components";
import { useState } from "react";

// Import react-circular-progressbar module and styles
import {
    CircularProgressbar,
    buildStyles
} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

// Animation
import ChangingProgressProvider from "./ChangingProgressProvider";


export default function Footer() {
    const [test, setTest] = useState([0]);

    function change() {
        setTest([...test, 80]);
        setInterval(() => {
            setTest([80]);
        }, 1500);
    }

    return (
        <Menu>
            <Link to={'/habitos'}>Hábitos</Link>
            <div className="progressBar" onClick={change}>
                <Link to={'/hoje'}>
                    <ChangingProgressProvider values={[...test]}>
                        {(test) => {
                            return (
                                <CircularProgressbar
                                    value={test}
                                    text={`Hoje`}
                                    background
                                    backgroundPadding={6}
                                    styles={buildStyles({
                                        backgroundColor: "#52B6FF",
                                        textColor: "#fff",
                                        pathColor: "#fff",
                                        trailColor: "transparent"
                                    })}
                                />
                            );
                        }}
                    </ChangingProgressProvider>
                </Link>
            </div>
            <Link>Histórico</Link>
        </Menu>
    );
}

const Menu = styled.footer`
    bottom: 0;
    left: 0;
    position: absolute;
    height: 7rem;
    width: 100%;
    background-color: var(--white);
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-inline: 3.6rem;
    color: var(--lightBlue);

    div.progressBar{
        width: 9rem;
        margin-bottom: 4rem;
    }
`;