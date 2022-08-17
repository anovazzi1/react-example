import Badge from "../../Badge"

export default function Predictions()
{
    return (
        <td className="">
            <div className="flex h-full">
                <div className="flex flex-col">
                    <Badge color={"red"} name="soccer"></Badge>
                    <Badge color={"red"} name="soccer"></Badge>
                    <Badge color={"red"} name="soccer"></Badge>
                </div>
                <div className="flex flex-col">
                    <Badge color={"red"} name="99%"></Badge>
                    <Badge color={"red"} name="99%"></Badge>
                    <Badge color={"red"} name="99%"></Badge>
                </div>

            </div>
        </td>
    )
}