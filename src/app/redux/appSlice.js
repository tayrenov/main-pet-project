import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
    name: 'app',
    initialState: {
        auth: {
            isAuth: false,
            user:null,
            error:null, 
            loading: false,
            role:null,
            token: null           
        }

    },
    reducers: {
        authStart(state) {
            state.auth.loading = true;
            state.auth.error = null;
        },
        loginSuccess(state, action) {
            state.auth.isAuth = true;
            state.auth.user = action.payload.login;
            state.auth.role = action.payload.role;
            state.auth.token =action.payload.token
            state.auth.error = null;
            state.auth.loading = false;
        },
        loginFail(state, action) {
            state.auth.isAuth = false;
            state.auth.user = null;
            state.auth.error= action.payload;
            state.auth.loading = false;
        },
        clearAuthError(state) {
            state.auth.error = null;
        }
    }
});


export const { authStart, loginSuccess, loginFail, clearAuthError } = appSlice.actions;
export default appSlice.reducer;