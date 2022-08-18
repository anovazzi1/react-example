import React from "react";

import TableOptionsCOntainer from "../TableOptionsContainer";
import TableHeader from "../TableHeader";
import TableRow from "../TableRow";
import table from "../../controllers/table"
import getData from "../../controllers/dataReceiver";

export default function Table() {
    let fetchedData = getData(table.size.big.rowNum).map(data=><TableRow tableSpecs={table.size.big} data={data}/>)

    return (
        <div className="py-4">
            <div className="mx-auto container bg-white dark:bg-gray-800 shadow rounded">
                <TableOptionsCOntainer></TableOptionsCOntainer>
                <div className="w-full overflow-x-scroll xl:overflow-x-hidden">
                    <table className="min-w-full bg-white dark:bg-gray-800 overflow-hidden">
                        <TableHeader></TableHeader>
                        <tbody>
                            {[...fetchedData]}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

