import { createContext, useState } from "react";

export const tableContext = createContext({})

export default function TableProvider({children}){
    const [size,setSize] = useState("big")
    return (
        <tableContext.Provider value={{size,setSize}}>
            {children}
        </tableContext.Provider>
    )
}