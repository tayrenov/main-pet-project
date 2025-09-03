import { Navigate, NavLink } from 'react-router-dom';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser } from "../../app/redux/appActions"

import './auth_page.css'

function AuthPage() {

    const dispatch = useDispatch(); 

    const isAuth = useSelector(state => state.app.auth.isAuth);

    const [login, setLogin] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);

    const authError = useSelector((state) => state.app.auth.error)
    const isLoading = useSelector((state) => state.app.auth.loading)
    const handleCheckboxChange = () => {
        setShowPassword(!showPassword);
    };

    if (isAuth) {
        return <Navigate to="/" replace />
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!isLoading) {
           dispatch(loginUser(login, password)); 
        }
    }

    return (
        <div className='auth-page'>
            <form className='auth-page__form' onSubmit={handleSubmit}>
                <h1>Login</h1>
                <label className='auth-page__form__input'>
                    <p>Login</p>
                    <input 
                            type='text' 
                            value={login}
                            onChange={(e) => setLogin(e.target.value)}
                    ></input>
                </label>
                <label className='auth-page__form__input'>
                    <p>Password</p>
                    <input 
                        type={showPassword ? 'text' : 'password'}
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    ></input>
                </label>
                <label className={`auth-page__form__show-pw ${showPassword ? '_auth-checkbox__active' : ''}`}>
                    <input 
                            type='checkbox' 
                            checked={showPassword}
                            onChange={handleCheckboxChange} 
                    />
                    <p>Show password</p>
                </label>

                {authError && <ErrorMessage err={authError} />}

                <div className='auh-page__form__btn-panel'>
                    <NavLink className="_cancel" to='/'>Cancel</NavLink>
                    <button>{isLoading ? 'Loading...' : 'Login'}</button>
                </div>
                
            </form>
        </div>
    )
}

function ErrorMessage(props) {
    return (
        <div className='auh-page__form__error-container'>
            <p>{props.err}</p>
        </div>
    )
}

export default AuthPage;