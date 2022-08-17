import Badge from "../../Badge"
import Checkbox from "../TableRowComponents/Checkbox"
import DataIndex from "../TableRowComponents/DataIndex"
import Content from "../TableRowComponents/Content"
import HumanLabel from "../TableRowComponents/HumanLabel"
import Predictions from "../TableRowComponents/Predictions"
import Status from "../TableRowComponents/Status"

export default function TableRow({data}){
    return (
        <>
        <tr className="h-32 border-gray-300 dark:border-gray-200 border-b">
            <Checkbox/>
            <DataIndex index={1}/>
            <Content></Content>
            <HumanLabel>
                <Badge name={"Soccer"} color="red"></Badge>
            </HumanLabel>
            <Predictions/>
            <Status color="green"/>
            <td className="pr-2 relative text-center">
                <button className="text-gray-500 rounded cursor-pointer border border-transparent focus:outline-none">
                    <svg xmlns="http://www.w3.org/2000/svg" onclick="dropdownFunction(this)" className="icon icon-tabler icon-tabler-dots-vertical dropbtn" width={28} height={28} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" />
                        <circle cx={12} cy={12} r={1} />
                        <circle cx={12} cy={19} r={1} />
                        <circle cx={12} cy={5} r={1} />
                    </svg>
                </button>
            </td>
        </tr>
        </>
    )
}