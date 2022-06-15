import { AiFillHome } from "react-icons/ai";
import { FcAbout } from "react-icons/fc";
import { GrServices } from "react-icons/gr";
import {  RiPassportFill} from "react-icons/ri";
import { BsFileEarmarkRuled } from "react-icons/bs";
import { MdOutlineConnectWithoutContact } from "react-icons/md";


 export const NAV_BAR_ITEMS = [
    {
        componentId :  "#Home",
        componentName : "Home",
        icon:  <AiFillHome   className="navItemIcons"  />
    },
    {
        componentId :  "#about",
        componentName : "Our Story",
        icon:  <FcAbout className="navItemIcons"  />
    },
    {
        componentId :  "#services",
        componentName : "Services",
        icon:  <GrServices className="navItemIcons"  />
    },
    {
        componentId :  "#portfolio",
        componentName : "Portfolio",
        icon:  <RiPassportFill className="navItemIcons"  />
    },
    {
        componentId :  "#team",
        componentName : "Team",
        icon:  <BsFileEarmarkRuled className="navItemIcons"  />
    },
    {
        componentId :  "#contact",
        componentName : "Contact",
        icon:  <MdOutlineConnectWithoutContact className="navItemIcons"  />
    },

]