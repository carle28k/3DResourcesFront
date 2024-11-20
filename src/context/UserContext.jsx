import { createContext, useState } from "react";
import { Navigate } from "react-router-dom";


export const UserContext = createContext()


export const UserProvider =({children})=>{
    const [user, setUser] = useState({})
    const [isAuthenticated, setIsAuthenticated] = useState(false)

    const login = () => setIsAuthenticated(true)
    const logout = () => {
        setIsAuthenticated(false)
        setUser({})
        Navigate ("/")
    }

    return (
        <UserContext.Provider value={{
            user,
            setUser,
            isAuthenticated,
            login,
            logout

        }}>
            {children}
        </UserContext.Provider>
    )

}