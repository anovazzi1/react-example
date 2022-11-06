import Data from "./data"
import {content} from "./content"
import {humanLabel} from "./humanLabel"
import {predictions} from "./predictions"
import { status } from "./status"

export default function getData(index){
    //getDataApi or connection
    let fetchedData = {}
    for(let i=0;i<index;i++)
    {
        let newData = new Data(i,content,humanLabel,predictions,status, true)
        fetchedData[i] = newData
    }
    return fetchedData
}