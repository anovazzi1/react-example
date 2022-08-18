import NavBar from "../NavBar"
import Table from "../table"
import TableProvider from "../../context/table"

export default function BodyContainer(){
    return (
        <div className="container mx-auto px-3">
        <NavBar />
        <TableProvider>
          <Table></Table>
        </TableProvider>
      </div>
    )
}