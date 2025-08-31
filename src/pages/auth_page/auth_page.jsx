import { NavLink } from 'react-router-dom';

import './auth_page.css'

function AuthPage() {
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
                    <input type='password'></input>
                </label>
                <label className='auth-page__form__show-pw'>
                    <input type='checkbox'></input>
                    <p>Show password</p>
                </label>
                <div className='auh-page__form__btn-panel'>
                    <NavLink to='/'>Cancel</NavLink>
                    <button>Login</button>
                </div>
                
            </form>
        </div>
    )
}

export default AuthPage;