import Badge from "../../Badge"

export default function Predictions()
{
    return (
        <td className="table h-32 border-spacing-1">
                <tr className="border-hidden">
                    <td><Badge color={"red"} name="soccer"></Badge></td>
                    <td><Badge color={"red"} name="98%"></Badge></td>
                </tr>
                <tr>
                    <td><Badge color={"blue"} name="soccer"></Badge></td>
                    <td><Badge color={"blue"} name="98%"></Badge></td>
                </tr>
                <tr>
                    <td><Badge color={"orange"} name="soccer"></Badge></td>
                    <td><Badge color={"orange"} name="98%"></Badge></td>
                </tr>
                <tr>
                    <td><Badge color={"green"} name="soccer"></Badge></td>
                    <td><Badge color={"green"} name="98%"></Badge></td>
                </tr>

        </td>
    )
}