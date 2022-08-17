export default function Checkbox(){
    return (
        <td className="text-center pl-2 whitespace-no-wrap text-sm text-gray-800 dark:text-gray-100 tracking-normal leading-4">
            <input type="checkbox" className="cursor-pointer relative w-5 h-5 border rounded border-gray-400 dark:border-gray-200 bg-white dark:bg-gray-800 outline-none" onclick="tableInteract(this)" />
        </td>
    )
}