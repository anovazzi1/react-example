import HeaderIconItem from "../HeaderIconItem";
import SearchBarContainer from "../SearchBarContainer";
import UserHeaderItem from "../UserHeaderItem";
import { FilterAltOutlined } from "@mui/icons-material"

export default function Header(){
    
    
    
    return (
        <nav className="h-16 flex items-center lg:items-stretch justify-end lg:justify-between bg-white shadow relative z-10">
        <div className="hidden lg:flex w-full pr-6">
          <SearchBarContainer></SearchBarContainer>
          <div className="w-1/3 hidden lg:flex">
            <div className="w-full flex items-center pl-8 justify-end">
              <div className="h-full w-20 flex items-center justify-center border-r border-l">
                <div className="relative cursor-pointer text-gray-600">
                  <FilterAltOutlined></FilterAltOutlined>
                </div>
              </div>
              {/* <div className="h-full w-20 flex items-center justify-center border-r mr-4 cursor-pointer text-gray-600">
              </div> */}
              <UserHeaderItem></UserHeaderItem>
            </div>
          </div>
        </div>
      </nav>
    )
}