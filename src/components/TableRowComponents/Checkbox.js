import { useContext } from "react"
import { dataContext } from "../../context/data"

export default function Checkbox({data}){
    const {selectedDataList} = useContext(dataContext)

    function toggleSelection(element){
        if(element.checked){
            
            selectedDataList.push(data)
            data.isSelected= true
        }
        else{
            selectedDataList.splice(selectedDataList.indexOf(data),1)
            
        }
        console.log(selectedDataList)
    }
    return (
        <td className="text-center pl-2 whitespace-no-wrap text-sm text-gray-800 dark:text-gray-100 tracking-normal leading-4">
            <input type="checkbox" className="cursor-pointer relative w-5 h-5 border rounded border-gray-400 dark:border-gray-200 bg-white dark:bg-gray-800 outline-none" onClick={(e)=>toggleSelection(e.target)}  />
        </td>
    )
}