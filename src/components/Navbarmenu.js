import React,{useState} from 'react';
import { NavLink } from 'react-router-dom';
import {FiAlignRight, FiXCircle, FiChevronDown} from 'react-icons/fi';


const Navbarmenu = () => {
    const [isMenu, setIsMenu] = useState(false);
    const [isResponsiveClose, setResponsiveClose] = useState(false);
    const toggleClass = () =>{
        setIsMenu(isMenu === false ? true : false);
        setResponsiveClose(isResponsiveClose === false ? true : false);
    };

    let boxClass = ["main-menu menu-right menuq1"];
    if(isMenu){
        boxClass.push('menuq2');
    }  
    else{
        boxClass.push('');
    }
    const [isMenuSubMenu, setMenuSubMenu] = useState(false);
    const toggleSubmenu = () => {
      setMenuSubMenu(isMenuSubMenu === false ? true : false);
    };
    let boxClassSubMenu = ["sub__menus"];
    if(isMenuSubMenu) {
        boxClassSubMenu.push('sub__menus__Active');
    }else {
        boxClassSubMenu.push('');
    }
  return (
    <header className='header__middle'>
        <div className='container'>
            <div className='row'>
                <div className='header__middle__menus'>
                    <nav className='main-nav'>
                        {
                        isResponsiveClose===true ?<>
                            <span className='menubar__button' style={{display:'none'}} onClick={toggleClass} > <FiXCircle/></span>
                        </>:<>
                            <span className='menubar__button' style={{display:'none'}} onclick={toggleClass} > <FiAlignRight/></span>
                        </>}
                        <ul className={boxClass.join(' ')}>
                            <li className='menu-item'>
                                <NavLink exact activeClassName='is-active' onClick={toggleClass} to={`/Home`}> Home </NavLink>
                            </li>
                            <li className='menu-item'>
                                <NavLink activeClassName='is-active' onClick={toggleClass} to={`/Calendar`}> Calendar </NavLink>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
    </header>
    
  )
}

export default Navbarmenu;