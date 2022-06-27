import React, { useEffect, useState } from "react";
import { HashLink } from "react-router-hash-link";
import { NAV_BAR_ITEMS } from "../../constants/navBarItem";
import { RiChat1Line } from "react-icons/ri";

function Header() {
  const [componentId, setComponentId] = useState("#Home");
  const [showMenu, setShowMenu] = useState();

  useEffect(() => {
    function handleResize() {
      const { innerWidth: width } = window;
      width <= 850 && setShowMenu(false);
      width > 850 && setShowMenu(true);
    }
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);


  // this function will render our all nav items;
  const getNavItem = () =>
    NAV_BAR_ITEMS.map((item) => (
      <>
        <li key={item.componentId}>
          <HashLink
            className={
              item.componentId === componentId
                ? "activeComponent"
                : "inActiveComponent"
            }
            activeClassName="selected"
            to={item.componentId}
            activeStyle={{ color: "red" }}
            onClick={() => { setComponentId(item.componentId); setShowMenu(false) }}
          >
            {item.icon} {item.componentName}
          </HashLink>
        </li>
      </>
    ));

  return (
    <div className="flex header">
      <div className="iconRow">
        <img src="./Logo.png" alt="" srcset="" />
      </div>

      <span
        className={
          showMenu ? "headerItems  w3-animate-top" : "headerItems  blockDisplay"
        }
      >
        <ul>{getNavItem()}</ul>
        <span className="chatButton">
          <button>
            <RiChat1Line /> Chat Now!
          </button>
        </span>
      </span>

      <div className="hamburger">
        <span onClick={() => setShowMenu((preState) => !preState)}>
          {/* {showMenu ? <AiOutlineClose /> : <GiHamburgerMenu />} */}
          <div className={showMenu ? "change" : "container"} >
            <div className={"bar1"}></div>
            <div className={"bar2"}></div>
            <div className={"bar3"}></div>
          </div >
        </span >
      </div >
    </div >
  );
}

export default Header;
