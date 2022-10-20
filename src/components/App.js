import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import GlobalStyle from "./global/globalStyle";
import Habits from "./habits/habits";
import Home from "./home";
import SingUp from "./singUp";
import Today from "./today/today";
import History from "./history/history";
import { UserProvider } from "./dataContext";

export default function App() {
    const [percentage, setPercentage] = useState(0);

    return (
        <>
            <GlobalStyle />
            <UserProvider>
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/cadastro" element={<SingUp />} />
                        <Route path="/habitos" element={<Habits percentage={percentage} />} />
                        <Route path="/hoje" element={<Today percentage={percentage} setPercentage={setPercentage} />} />
                        <Route path="/historico" element={<History />} />
                    </Routes>
                </BrowserRouter>
            </UserProvider>
        </>
    );
}

