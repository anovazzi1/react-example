import Badge from "../Badge"
import Checkbox from "../TableRowComponents/Checkbox"
import DataIndex from "../TableRowComponents/DataIndex"
import Content from "../TableRowComponents/Content"
import HumanLabel from "../TableRowComponents/HumanLabel"
import Predictions from "../TableRowComponents/Predictions"
import Status from "../TableRowComponents/Status"
import Options from "../TableRowComponents/options"

export default function TableRow({data,tableSpecs}){
    data.remove()

    return (
        <tr className={`h-${tableSpecs.rowHeight} border-gray-300 dark:border-gray-200 border-b`}>
            <Checkbox data={data}/>
            <DataIndex index={data.index}/>
            <Content tableSpecs={tableSpecs} contentData={data.content}></Content>
            <HumanLabel>
                <Badge name={data.humanLabel.value} color={data.humanLabel.color}></Badge>
            </HumanLabel>
            <Predictions tableSpecs={tableSpecs} predictions={data.predictions}/>
            <Status color={data.status.color}/>
            <Options></Options>
        </tr>
    )
}