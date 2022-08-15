import { FilterAltOutlined } from "@mui/icons-material"

export default function HeaderIconItem()
{
    return (
        <div className="h-full w-20 flex items-center justify-center border-r border-l">
        <div className="relative cursor-pointer text-gray-600">
            <FilterAltOutlined></FilterAltOutlined>
        </div>
      </div>
    )
}
