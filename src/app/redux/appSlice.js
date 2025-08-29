import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
    name: 'app',
    initialState: {
        auth: true
    },
    reducers: {
        setAuth(state, action) {
            state.auth = action.payload;
        },
    }
});

export const { setAuth } = appSlice.actions;
export default appSlice.reducer;