import Footer from "../global/footer";
import Header from "../global/header";
import UserContext from "../dataContext";
import { useContext } from "react";

export default function History() {
    const { Body, MyHabits } = useContext(UserContext);

    return (
        <>
            <Header />
            <Body height={'72vh'}>

                <MyHabits>
                    <h1>Histórico</h1>
                </MyHabits>
                <p className="subtitle">Em breve você poderá ver o histórico dos seus hábitos aqui!</p>
            </Body>
            <Footer />
        </>
    )
}
