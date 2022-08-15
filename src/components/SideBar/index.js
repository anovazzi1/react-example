import { useState } from "react";
import Icon from "../Icon";
import  SmartToy  from "@mui/icons-material/SmartToyOutlined";
import Label  from "@mui/icons-material/LabelOutlined";
import ListAltOutlined  from "@mui/icons-material/ListAltOutlined";


import SideBarItem from "../SideBarItem";
import logo from '../../assets/company-logo.svg';


export default function SideBar(){
    const [menu, setMenu] = useState(false);
    const [menu1, setMenu1] = useState(false);
    const [menu2, setMenu2] = useState(false);
    const [menu3, setMenu3] = useState(false);


    return (
        <div className="absolute lg:relative w-64 h-screen shadow bg-gray-100 hidden lg:block">
        <div className="h-16 w-full flex items-center px-8">
        <img src={logo}/>
        </div>
        {/* side menu itens*/}
        <ul ariaOrientation="vertical" className=" py-6">
        <li className="pl-6 cursor-pointer text-gray-600 text-sm leading-3 tracking-normal mt-4 mb-4 py-2 hover:text-indigo-700 focus:text-indigo-700 focus:outline-none">
            <div className="flex items-center">
              <SmartToy></SmartToy>
              <span className="ml-2">Model</span>
            </div>
          </li>
          <li className="pl-6 cursor-pointer text-gray-600 text-sm leading-3 tracking-normal mt-4 mb-4 py-2 hover:text-indigo-700 focus:text-indigo-700 focus:outline-none">
            <div className="flex items-center">
              <Label></Label>
              <span className="ml-2">Annotation</span>
            </div>
          </li>
          <li className="pl-6 cursor-pointer text-gray-600 text-sm leading-3 tracking-normal mb-4 py-2 hover:text-indigo-700 focus:text-indigo-700 focus:outline-none">
            <div className="flex items-center">
              <ListAltOutlined></ListAltOutlined>
              <span className="ml-2">Label Distribuction</span>
            </div>
          </li>
        </ul>
      </div>
    )
}