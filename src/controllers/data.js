
class Data {
    constructor(index,content,humanLabel, predictions, status, isEnable){
        this.index = index
        this.content = content
        this.humanLabel = humanLabel
        this.predictions = predictions
        this.status = status
        this.isSelected =false
        this.isEnable = isEnable
    }
    
    remove(dataObject) {
        console.log("removing" + this.index)
        if(dataObject.hasOwnProperty(this.index)){
            delete dataObject[this.index]
        }
    }

}
export default Data;