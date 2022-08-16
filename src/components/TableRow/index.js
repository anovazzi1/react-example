export default function TableRow(){
    return (
        <tr className="h-24 border-gray-300 dark:border-gray-200 border-b">
            <td className="text-center whitespace-no-wrap text-sm text-gray-800 dark:text-gray-100 tracking-normal leading-4">
                <input type="checkbox" className="cursor-pointer relative w-5 h-5 border rounded border-gray-400 dark:border-gray-200 bg-white dark:bg-gray-800 outline-none" onclick="tableInteract(this)" />
            </td>
            <td className="text-sm whitespace-no-wrap pl-3 text-gray-800 dark:text-gray-100 tracking-normal leading-4">
                <div className="relative text-gray-600 dark:text-gray-400">
                    <div className="w-fit h-5 -mt-1 text-black flex justify-center items-center text-xs">1</div>

                </div>
            </td>
            <td colSpan={3} className="text-sm pr-6 whitespace-no-wrap text-gray-800 dark:text-gray-100 tracking-normal leading-4">Content</td>
            <td className="text-sm pr-6 whitespace-no-wrap text-gray-800 dark:text-gray-100 tracking-normal leading-4">human label</td>
            <td className="text-sm pr-6 whitespace-no-wrap text-gray-800 dark:text-gray-100 tracking-normal leading-4">Predictions</td>
            <td className="pr-6">
                <div className="w-2 h-2 rounded-full bg-indigo-400" />
            </td>
            <td className="pr-2 relative">
                <div className="dropdown-content mt-8 absolute left-0 -ml-12 shadow-md z-10 hidden w-32">
                    <ul className="bg-white dark:bg-gray-800 shadow rounded py-1">
                        <li className="cursor-pointer text-gray-600 dark:text-gray-400 text-sm leading-3 tracking-normal py-3 hover:bg-indigo-700 hover:text-white px-3 font-normal">Edit</li>
                        <li className="cursor-pointer text-gray-600 dark:text-gray-400 text-sm leading-3 tracking-normal py-3 hover:bg-indigo-700 hover:text-white px-3 font-normal">Delete</li>
                        <li className="cursor-pointer text-gray-600 dark:text-gray-400 text-sm leading-3 tracking-normal py-3 hover:bg-indigo-700 hover:text-white px-3 font-normal">Duplicate</li>
                    </ul>
                </div>
                <button className="text-gray-500 rounded cursor-pointer border border-transparent focus:outline-none">
                    <svg xmlns="http://www.w3.org/2000/svg" onclick="dropdownFunction(this)" className="icon icon-tabler icon-tabler-dots-vertical dropbtn" width={28} height={28} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" />
                        <circle cx={12} cy={12} r={1} />
                        <circle cx={12} cy={19} r={1} />
                        <circle cx={12} cy={5} r={1} />
                    </svg>
                </button>
            </td>
        </tr>
    )
}