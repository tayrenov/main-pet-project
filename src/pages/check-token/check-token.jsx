import { useDispatch, useSelector } from "react-redux";
import { checkToken } from "../../app/redux/appActions"

function CheckToken() {

    const dispatch = useDispatch();
    const { isAuth, user, role, token, error} = useSelector(state => state.app.auth);

    const handleCheck = () => {
        dispatch(checkToken());
    }

    return (
        <div>
            CHECK TOKEN
            <h2>🔐 Проверка авторизации</h2>
            <p>{isAuth ? `Пользователь авторизован: ${user} (роль: ${role})` : "❌ Не авторизован"}</p>
            {token && <p><b>Token:</b> {token}</p>}
            {error && <p style={{color:"red"}}>{error}</p>}
            <button onClick={handleCheck}>Проверить токен</button>
        </div>
    )
}

export default CheckToken;