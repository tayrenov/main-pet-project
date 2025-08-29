import { setTheme } from "./uiSlice.js";

export const switchTheme = () => (dispatch, getState) => {
    console.log("SWITCHTHEME");

    const currentTheme = getState().ui.mainTheme;
    const newTheme = currentTheme === "dark" ? "light" : "dark";

    dispatch(setTheme(newTheme));
};
