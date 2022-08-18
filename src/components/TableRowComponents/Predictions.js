import Badge from "../Badge"

export default function Predictions({tableSpecs,predictions})
{
    function generateBadges(){
        let badgesList=[]
        let counter = predictions.size
        if(tableSpecs.predictionsNum<=predictions.size){
            counter = tableSpecs.predictionsNum
        }
        for(let i=0;i<counter;i++){
            badgesList.push(
            <tr>
                <td><Badge color={predictions.values[i].color} name={predictions.values[i].name}></Badge></td>
                <td><Badge color={predictions.values[i].color} name={predictions.values[i].percent}></Badge></td>
            </tr>
            )
        }
        return badgesList
    }

    return (
        <td className={`table h-${tableSpecs.rowHeight} border-spacing-1`}>
            {[...generateBadges()]}
        </td>
    )
}