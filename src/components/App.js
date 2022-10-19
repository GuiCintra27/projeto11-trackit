import { BrowserRouter, Route, Routes } from "react-router-dom";
import GlobalStyle from "./globalStyle";
import Habits from "./habits/habits";
import Home from "./home";
import SingIn from "./singIn";

export default function App() {
    return (
        <>
            <GlobalStyle />
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/cadastro" element={<SingIn />} />
                    <Route path="/habitos" element={<Habits />} />
                </Routes>
            </BrowserRouter>
        </>
    );
}

