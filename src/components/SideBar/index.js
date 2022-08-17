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


    return (
        <div className="fixed min-h-screen lg:relative w-64 shadow bg-gray-100 hidden lg:block">
        <div className="h-16 w-full flex items-center px-8">
        <img src={logo}/>
        </div>
        {/* side menu itens*/}
        <ul ariaOrientation="vertical" className=" py-6">
              <SideBarItem name="model"><Icon><SmartToy/></Icon></SideBarItem>
              <SideBarItem name="Annotation"><Icon><Label/></Icon></SideBarItem>
              <SideBarItem name="Label Distribuction"><Icon><ListAltOutlined/></Icon></SideBarItem>
        </ul>
      </div>
    )
}