import { NavLink } from 'react-router-dom';

function UserNav() {
    return(
        <div className="left-panel__nav user-nav">
            <div className="left-panel-nav__title">All applications</div>

            <NavLink 
                to="/todos" 
                className={({ isActive }) => isActive ? "user-nav__item _item-active" : "user-nav__item"}
            >
                Todo App
            </NavLink>
            <NavLink 
                to="/someapp1" 
                className={({ isActive }) => isActive ? "user-nav__item _item-active" : "user-nav__item"}
            >
                Some app1
            </NavLink>
            <NavLink 
                to="/someapp2" 
                className={({ isActive }) => isActive ? "user-nav__item _item-active" : "user-nav__item"}
            >
                Some app2
            </NavLink>
        </div>
    )
}

export default UserNav;