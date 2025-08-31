import { NavLink } from 'react-router-dom';
import { useState } from 'react';

import './auth_page.css'

function AuthPage() {
    
    const [showPassword, setShowPassword] = useState(false);

    const handleCheckboxChange = () => {
        setShowPassword(!showPassword);
    };

    return (
        <div className='auth-page'>
            <form className='auth-page__form'>
                <h1>Login</h1>
                <label className='auth-page__form__input'>
                    <p>Login</p>
                    <input type='text'></input>
                </label>
                <label className='auth-page__form__input'>
                    <p>Password</p>
                    <input type={showPassword ? 'text' : 'password'}></input>
                </label>
                <label className={`auth-page__form__show-pw ${showPassword ? '_auth-checkbox__active' : ''}`}>
                    <input type='checkbox' 
                           checked={showPassword}
                           onChange={handleCheckboxChange} 
                    />
                    <p>Show password</p>
                </label>
                <div className='auh-page__form__btn-panel'>
                    <NavLink className="_cancel" to='/'>Cancel</NavLink>
                    <button>Login</button>
                </div>
                
            </form>
        </div>
    )
}

export default AuthPage;