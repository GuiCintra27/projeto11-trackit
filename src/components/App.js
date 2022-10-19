import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import GlobalStyle from "./global/globalStyle";
import Habits from "./habits/habits";
import Home from "./home";
import SingIn from "./singIn";
import Today from "./today/today";
import History from "./history/history";

export default function App() {
    const [userHabits, setUserHabits] = useState([]);
    const [percentage, setPercentage] = useState(0);

    return (
        <>
            <GlobalStyle />
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/cadastro" element={<SingIn />} />
                    <Route path="/habitos" element={<Habits userHabits={userHabits} setUserHabits={setUserHabits} percentage={percentage} />} />
                    <Route path="/hoje" element={<Today userHabits={userHabits} percentage={percentage} setPercentage={setPercentage} />} />
                    <Route path="/historico" element={<History />} />
                </Routes>
            </BrowserRouter>
        </>
    );
}

