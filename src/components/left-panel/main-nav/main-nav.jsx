import { NavLink } from 'react-router-dom';

import "./main-nav.css";

function MainNav() {
    return (
        <div className="left-panel__nav main-nav">
            
            <div className="left-panel-nav__title">Main menu</div>
            
            <NavLink 
                to="/" 
                className={({ isActive }) => isActive ? "user-nav__item _item-active" : "user-nav__item"}
            >
                Main menu
            </NavLink>
            <NavLink 
                to="/about" 
                className={({ isActive }) => isActive ? "user-nav__item _item-active" : "user-nav__item"}
            >
                About
            </NavLink>
            <NavLink 
                to="/instruction" 
                className={({ isActive }) => isActive ? "user-nav__item _item-active" : "user-nav__item"}
            >
                How to use
            </NavLink>
            <NavLink 
                to="/contacts" 
                className={({ isActive }) => isActive ? "user-nav__item _item-active" : "user-nav__item"}
            >
                Contacts
            </NavLink>
            <NavLink 
                to="/auth" 
                className={({ isActive }) => isActive ? "user-nav__item _item-active" : "user-nav__item"}
            >
                Auth
            </NavLink>
            <NavLink
                to="/check-token"
                className={({ isActive }) => isActive ? "user-nav__item _item-active" : "user-nav__item"}
            >
                Checed Token
            </NavLink>
        </div>
    )
}

export default MainNav;