import { authStart, loginSuccess, loginFail} from "./appSlice.js";

export const loginUser = (login, password) => {
    console.log({login}, {password})
    return async (dispatch) => {
        dispatch(authStart());

        try {
            const response = await fetch("http://localhost:5000/api/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ login, password })
            });

            const data = await response.json();

            console.log("🔑 Token from server:", data.token)

            if (data.success) {
                dispatch(loginSuccess({ 
                    login:data.login, 
                    role: data.role,
                    token: data.token
                }));
            } else {
                dispatch(loginFail(data.message));
            }
        } catch (error) {
            dispatch(loginFail("Server error"))
        }
    }
}

export const checkToken = () => {
    return async (dispatch, getState) => {
        const token = getState().app.auth.token;

        if (!token) {
            dispatch(loginFail('Token is empty'))
            return
        }

        try {
            const response = await fetch("http://localhost:5000/api/check-token", {
                method: "GET",
                headers: {
                    "Authorization": `Bearer ${token}`
                }
            });

            const data = await response.json();
            console.log("Checked token: ",data);

            if (data.success) {
                dispatch(loginSuccess({
                    login: data.user.login,
                    role: data.user.role,
                    token
                }))
            } else {
                dispatch(loginFail(data.message));
            }

        } catch (error) {
            dispatch(loginFail("Error checked token"))
        }
    }
}

export const clearAuthError = () => ({
    type: 'CLEAR_AUTH_ERROR'
});