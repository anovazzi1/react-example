import NavBar from "../NavBar"
import Table from "../table"

export default function BodyContainer(){
    return (
        <div className="container mx-auto h-64 px-3">
        <NavBar />
        <Table></Table>
      </div>
    )
}