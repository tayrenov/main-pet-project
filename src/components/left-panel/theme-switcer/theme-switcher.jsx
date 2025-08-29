import { useSelector, useDispatch } from 'react-redux';

import { switchTheme } from '../../../app/redux/uiActions';

import './theme-switcher.css'


function ThemeSwitcher() {
    const { mainTheme } = useSelector(state => state.ui);
    const dispatch = useDispatch();
    
    const handleSwitchTheme = () => {
        dispatch(switchTheme());
    }
    
    return (
        <div className="theme-switcher" onClick={handleSwitchTheme}>
            <div className={`switch ${mainTheme === 'dark' ? 'dark' : 'light'}`}>
                <div className="slider">
                    <div className="icon sun-icon">
                        <SunSVG />
                    </div>
                    <div className="icon moon-icon">
                        <MoonSVG />
                    </div>
                </div>
            </div>
        </div>
    )
}

// SVG иконка Солнца
const SunSVG = () => (
    <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="18" cy="18" r="8" fill="currentColor"/>
        <path d="M18 6V2" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        <path d="M18 34V30" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        <path d="M6 18H2" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        <path d="M34 18H30" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        <path d="M9.51472 9.51472L6.34315 6.34315" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        <path d="M29.6569 29.6569L26.4853 26.4853" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        <path d="M9.51472 26.4853L6.34315 29.6569" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        <path d="M29.6569 6.34315L26.4853 9.51472" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    </svg>
);

// SVG иконка Луны
const MoonSVG = () => (
    <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M27.5 18.5C27.5 23.7467 23.2467 28 18 28C12.7533 28 8.5 23.7467 8.5 18.5C8.5 13.2533 12.7533 9 18 9C18.3314 9 18.6596 9.0119 18.9842 9.03538C17.8929 10.0711 17.25 11.5833 17.25 13.25C17.25 16.5637 19.9363 19.25 23.25 19.25C24.9167 19.25 26.4289 18.6071 27.4646 17.5158C27.4881 17.8404 27.5 18.1686 27.5 18.5Z" 
              fill="currentColor" 
              stroke="currentColor" 
              strokeWidth="1.5"/>
    </svg>
);


export default ThemeSwitcher;