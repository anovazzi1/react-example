import Data from "./data"
import {content} from "./content"
import {humanLabel} from "./humanLabel"
import {predictions} from "./predictions"

export default function getData(index){
    console.log(content)
    //getDataApi or connection
    let fetchedData = []
    for(let i=0;i<index;i++)
    {
        let newData = new Data(i,content,humanLabel,predictions)
        fetchedData.push(newData)
    }
    return fetchedData
}