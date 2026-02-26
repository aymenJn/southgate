import React , {Children, createContext , useState} from "react";

export const AppContext = createContext() 

export default function  AppProvider   ({Children})  {
    const [user , setuser] = useState("aymen") 
    const loginUser = (userData) => setuser(userData)
    const contextvalue  = {
        user , loginUser 
    } 
    return(
        <AppContext.Provider value={{user}}>
            {Children}
        </AppContext.Provider>
    )
}