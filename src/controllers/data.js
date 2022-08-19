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
    remove(dataList) {
        console.log("removing" + this.index)

    }

}
export default Data;