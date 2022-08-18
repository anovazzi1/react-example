import { createContext, useState } from "react";

export const tableContext = createContext({})

export default function TableProvider({children}){
    const [size,setSize] = useState("big")
    const [isHighlighted,setHighlight] = useState(true)
    return (
        <tableContext.Provider value={{size,setSize,isHighlighted,setHighlight}}>
            {children}
        </tableContext.Provider>
    )
}