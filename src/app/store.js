import { configureStore } from "@reduxjs/toolkit";
import appReducer from "./redux/appSlice.js";
import todosReducer from "./redux/todosSlice.js";
import uiReducer from "./redux/uiSlice.js";

const store = configureStore({
    reducer: {
        app: appReducer,
        todos: todosReducer,
        ui: uiReducer
    }
});

export default store;