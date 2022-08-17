export default function Status({color}){
    return (
        <td>
            <div className={`w-2 h-2 rounded-full bg-${color}-400`} />
        </td>
    )
}