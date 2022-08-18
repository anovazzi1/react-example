export default function TableIconButton({children, handleClick})
{

    return(
        <button onClick={handleClick} className="text-gray-600 dark:text-gray-400 mr-2 p-2 border-transparent border bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 hover:bg-gray-200 cursor-pointer rounded focus:outline-none focus:border-gray-800 focus:shadow-outline-gray" href="javascript: void(0)">
            {children}
    </button>
    )
}