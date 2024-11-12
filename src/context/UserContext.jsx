import { createContext } from "react";


export const UserContext = createContext()


export const UserProvider =({children})=>{

    return (
        <UserContext.Provider value={{mensaje:"Hola Mundo"}}>
            {children}
        </UserContext.Provider>
    )

}