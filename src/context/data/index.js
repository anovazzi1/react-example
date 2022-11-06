import { createContext,useState } from "react";
import getData from "../../controllers/dataReceiver";

export const  dataContext = createContext({})
export default function DataProvider({children}){
    const [dataObject,setDataList] = useState(getData(3))
    const [selectedDataList,setSelectedDataList] = useState([])
    return (
        <dataContext.Provider value={{dataObject, setDataList,selectedDataList,setSelectedDataList}}>
        {children}
    </dataContext.Provider>
    )
}