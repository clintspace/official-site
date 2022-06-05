import React, { useEffect, useState } from 'react'
import { HashLink } from "react-router-hash-link"
import { NAV_BAR_ITEMS } from '../../constants/navBarItem';
import { RiChat1Line } from "react-icons/ri";
import { GiHamburgerMenu } from "react-icons/gi"
import { AiOutlineClose } from "react-icons/ai"

function Header() {

  const [componentId, setComponentId] = useState("#Home")
  const [showMenu, setShowMenu] = useState(false);


  useEffect(() => {

    function handleResize() {
      const { innerWidth: width } = window;
      width <= 850 && setShowMenu(false)
      width >= 850 && setShowMenu(true)
    }
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);



  // this function will render our all nav items;
  const getNavItem = () => NAV_BAR_ITEMS.map(item => <>
    <li key={item.componentId}> <HashLink
      className={item.componentId === componentId ? "activeComponent" : "inActiveComponent"}
      activeClassName="selected"
      to={item.componentId}
      activeStyle={{ color: 'red' }}
      onClick={() => setComponentId(item.componentId)}
    > {item.icon} {item.componentName}  </HashLink>  </li>
  </>)




  return (
    <div className='flex header'>
      <div className="iconRow">
        <img src="./Logo.png" alt="" srcset="" />
      </div>

      <span className={showMenu ? "headerItems w3-animate-right" : "headerItems blockDisplay"} >
        <ul  >
          {getNavItem()}
        </ul>
        <span className='chatButton'>
          <button  >
            <RiChat1Line /> Chat Now!
          </button>
        </span>
      </span>

      <div className="hamburger">
        <button onClick={() => setShowMenu(preState => !preState)} >
          {showMenu ? <AiOutlineClose /> : <GiHamburgerMenu />}
        </button>
      </div>

    </div>
  )
}

export default Header