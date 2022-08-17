export default function humanLabel({children})
{
    return (
        <td className="text-sm text-center pr-6 whitespace-no-wrap text-gray-800 dark:text-gray-100 tracking-normal leading-4">
            {children}
        </td>
    )
}