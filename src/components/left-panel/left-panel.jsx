import { useSelector } from "react-redux";
import { NavLink } from 'react-router-dom';

import { BtnThemeSwitch, SomeComponent } from "../UI/ui";
import MainNav from "./main-nav/main-nav";
import UserNav from "./user-nav/user-nav";

// import Logo from '../../assets/img/Logo.svg'

import './left-panel.css'
import ThemeSwitcher from "./theme-switcer/theme-switcher";

function LeftPanel() {

    const auth = useSelector((state) => state.app.auth)
    const themeStyle =useSelector((state) => state.ui.mainTheme)
    return (
        <div className="app-left-panel">
            <NavLink to="/" className="_logo">
                <Logo theme={themeStyle}/>
            </NavLink>

            {auth ? <UserNav /> : null}
            
            <MainNav />

            <div className="app-left-panel_bottom-panel">
                <ThemeSwitcher />
                <BtnThemeSwitch />
                <SomeComponent />
                <div>Auth</div>
            </div>

        </div>
    )
}

function Logo(props) {

    const textColor = props.theme === 'dark' ? '#fff' : '#A5B4FC'
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="208" height="80" viewBox="0 0 260 80" role="img" aria-labelledby="title desc">
            <title id="title">Sandbox Logo</title>
            <desc id="desc">Minimalist logo with abstract geometric symbol and text Sandbox.</desc>

            <g transform="translate(0,20)">
                <polygon points="0,30 20,0 40,30" fill="#4F46E5"/>
                <polygon points="0,20 20,50 40,20" fill="#6366F1" opacity="0.8"/>
                <polygon points="10,15 20,40 30,15" fill="#A5B4FC" opacity="0.6"/>
            </g>

            <text x="60" y="56" font-family="Inter, Arial, sans-serif" font-size="32" font-weight="600" fill={textColor}>
                Sandbox
            </text>
        </svg>

    )
}

export default LeftPanel;