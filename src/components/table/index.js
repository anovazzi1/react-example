import React from "react";
import { useContext } from "react";
import {tableContext} from "../../context/table";

import TableOptionsCOntainer from "../TableOptionsContainer";
import TableHeader from "../TableHeader";
import TableRow from "../TableRow";
import table from "../../controllers/table"
import getData from "../../controllers/dataReceiver";
import { dataContext } from "../../context/data";


export default function Table() {
    let {size} = useContext(tableContext)
    let {dataObject} =useContext(dataContext)
    dataObject = getData(table.size[size].rowNum)
    
    let dataRows = Object.values(dataObject).map(data=><TableRow tableSpecs={table.size[size]} data={data}/>)
    return (
        <div className="py-4">
            <div className="mx-auto container bg-white dark:bg-gray-800 shadow rounded">
                <TableOptionsCOntainer></TableOptionsCOntainer>
                <div className="w-full overflow-x-scroll xl:overflow-x-hidden">
                    <table className="min-w-full bg-white dark:bg-gray-800 overflow-hidden">
                        <TableHeader></TableHeader>
                        <tbody>
                            {[...dataRows]}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

