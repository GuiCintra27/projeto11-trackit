import axios from "axios";
import { createContext, useState } from "react";

const UserContext = createContext();

export function UserProvider({ children }) {
    const URL = ('https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today');
    const [percentage, setPercentage] = useState(0);
    const [perfilImg, setPerfilImg] = useState('');
    const [TOKEN, setTOKEN] = useState('');
    const header = {headers : {"Authorization" : `Bearer ${TOKEN}`}};

    function calcPercentage() {
        axios.get(URL, header).then(response => {
            const total = [...response.data];
            const completed = total.filter((item) => {
                if (item.done){
                    return true
                }
                return false
            })
            setPercentage(((completed.length / total.length) * 100).toFixed(0));
        });
        axios.get(URL, header).catch(response => console.log(response));
    }

    return (
        <UserContext.Provider value={{ percentage, calcPercentage, perfilImg, setPerfilImg, TOKEN, setTOKEN }}>
            {children}
        </UserContext.Provider>
    )
}

export default UserContext;