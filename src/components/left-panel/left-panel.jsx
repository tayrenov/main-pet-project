import { useSelector } from "react-redux";
import { BtnThemeSwitch, SomeComponent } from "../UI/ui";
import MainNav from "./main-nav/main-nav";
import UserNav from "./user-nav/user-nav";

import Logo from '../../assets/img/Logo.svg'

import './left-panel.css'
import ThemeSwitcher from "./theme-switcer/theme-switcher";

function LeftPanel() {

    const auth = useSelector((state) => state.app.auth)

    return (
        <div className="app-left-panel">
            <div className="_logo">
                <img src={Logo} alt="logo" />
            </div>

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

export default LeftPanel;