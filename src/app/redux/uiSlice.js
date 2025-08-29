import { createSlice } from "@reduxjs/toolkit";

const uiSlice = createSlice({
    name:'ui',
    initialState: {
        mainTheme:'dark' //light || dark
    },
    reducers: {
        setTheme(state, action) {
            state.mainTheme = action.payload;
        }
    }
})

export const { setTheme } = uiSlice.actions;
export default uiSlice.reducer;