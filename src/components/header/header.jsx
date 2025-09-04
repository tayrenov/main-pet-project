import { useDispatch, useSelector } from 'react-redux';
import './header.css'
import { Link } from 'react-router-dom';
import { logoutUser } from '../../app/redux/appActions';

function Header(props) {

    const { isAuth, user } = useSelector(state => state.app.auth);

    return (
        <header className="app-header">
            <div>{props.title}</div>
            { isAuth ? <UserContainer user={user}/> : <GuestContainer />}
        </header>
    )

}

function UserContainer(props) {

    const dispatch = useDispatch();

    const hundleExit = () => {
        dispatch(logoutUser())
    }

    return (
        <div>
            <div>{props.user}</div>
            <div onClick={hundleExit}>Exit</div>
        </div>
    )
} 

function GuestContainer() {
    return (
        <Link to="/auth">Sign up</Link>
    )
}

export default Header;