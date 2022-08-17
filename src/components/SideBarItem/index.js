

export default function SideBarItem({name,children})
{
    return (
      <li className="pl-6 cursor-pointer text-gray-600 text-sm leading-3 tracking-normal mt-4 mb-4 py-2 hover:text-indigo-700 focus:text-indigo-700 focus:outline-none">
          <div className="flex items-center">
            {children}
            <span className="ml-2">{name}</span>
          </div>
        </li>
    )
}