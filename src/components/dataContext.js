import { createContext, useState } from "react";

const UserContext = createContext();

export function UserProvider({ children }) {
    const [perfilImg, setPerfilImg] = useState('');
    const [TOKEN, setTOKEN] = useState('');

    return (
        <UserContext.Provider value={{ perfilImg, setPerfilImg, TOKEN, setTOKEN }}>
            {children}
        </UserContext.Provider>
    )
}

export default UserContext;