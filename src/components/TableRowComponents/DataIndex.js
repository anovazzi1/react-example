export default function DataIndex({index})
{
    return (
        <td className="text-sm whitespace-no-wrap pl-3 text-gray-800 dark:text-gray-100 tracking-normal leading-4">
            <div className="relative text-gray-600 dark:text-gray-400">
                <div className="w-fit h-5 -mt-1 text-black flex justify-center items-center text-xs">{index}</div>
            </div>
        </td>
    )
}