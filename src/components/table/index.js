import React from "react";

import TableOptionsCOntainer from "../TableOptionsContainer";
import TableHeader from "../TableHeader";
import TableRow from "../TableRow";

const Table = () => {
    return (
        <div className="py-4">
            <div className="mx-auto container bg-white dark:bg-gray-800 shadow rounded">
                <TableOptionsCOntainer></TableOptionsCOntainer>
                <div className="w-full overflow-x-scroll xl:overflow-x-hidden">
                    <table style={{"emptyCells": "show;"}} className="min-w-full bg-white dark:bg-gray-800">
                        <TableHeader></TableHeader>
                        <tbody>
                            <TableRow></TableRow>
                            <TableRow></TableRow>
                            <TableRow></TableRow>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};
export default Table;
