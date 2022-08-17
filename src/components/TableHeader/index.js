import WhiteSpace from "./WhiteSpace"

export default function TableHeader(){
    return (
        <thead>
            <tr className="w-full h-16 border-gray-300 dark:border-gray-200 border-b py-8">
                <th className="text-gray-600 dark:text-gray-400 font-normal text-center text-sm tracking-normal leading-4">
                    <input type="checkbox" className="cursor-pointer relative w-5 h-5 border rounded border-gray-400 dark:border-gray-200 bg-white dark:bg-gray-800 outline-none" onclick="checkAll(this)" />
                </th>
                <th className="text-gray-600 dark:text-gray-400 font-normal text-left text-sm tracking-normal leading-4">
                    <div className="text-gray-600 dark:text-gray-400 opacity-0 cursor-default relative w-5">
                        <div className="absolute top-0 right-0 w-5 h-5 mr-2 -mt-1 rounded-full bg-indigo-700 text-white flex justify-center items-center text-xs"></div>
                        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-file" width={14} height={14} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" />
                            <path d="M14 3v4a1 1 0 0 0 1 1h4" />
                            <path d="M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z" />
                        </svg>
                    </div>
                </th>
                <th  className="text-gray-600 dark:text-gray-400 font-normal pr-6 text-left text-sm tracking-normal leading-4">Content</th>
                <WhiteSpace/>
                <WhiteSpace/>
                <WhiteSpace/>
                <WhiteSpace/>
                <WhiteSpace/>
                <th className="text-gray-600 dark:text-gray-400 font-normal pr-6 text-center text-sm tracking-normal leading-4">Human Label</th>
                <th className="text-gray-600 dark:text-gray-400 font-normal text-left text-sm tracking-normal leading-4">Predictions</th>
                <WhiteSpace/>
                <td className="text-gray-600 dark:text-gray-400 font-normal pr-2 text-center text-sm tracking-normal leading-4">More</td>
            </tr>
        </thead>
    )
}