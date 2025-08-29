import { setAuth } from "./appSlice.js";

export const testAuthTrue = () => (dispatch, getState) => {
    console.log("TEST_AUTH");

    const currentAuth = getState().app.auth;
    
    dispatch(setAuth(!currentAuth))
}