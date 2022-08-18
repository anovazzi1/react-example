const table = Object.freeze({
    size:{
        big:{
            rowHeight:32, //size of an row
            rowNum:3, //number of rows by scroll in the table
            contentTextSize: "lg",
            contentHeight:26,
            predictionsNum:4,
            
        },
        medium:{
            rowHeight:20,
            rowNum:5,
            contentTextSize:"lg",
            contentHeight:16,
            predictionsNum:3,
        },
        small:{
            rowHeight:12,
            rowNum:8,
            contentTextSize:"lg",
            contentHeight:8,
            predictionsNum:2
        },
    }
})

export default table