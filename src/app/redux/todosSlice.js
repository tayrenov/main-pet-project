import { createSlice } from "@reduxjs/toolkit";

const todosSlice = createSlice({
    name: 'todos',
    initialState: {
        todos: [],
        loading: false,
        error: null,
        dbStatus: 'unknown' // ok, wrong, error
    },
    reducers: {
        setTodos(state, action) {
            state.todos = action.payload;
        },
        setLoading(state, action) {
            state.loading = action.payload;
        },
        setError(state, action) {
            state.error = action.payload;
        },
        setDbStatus(state, action) {
            state.dbStatus = action.payload;
        }
    }
});

export const { setTodos, setLoading, setError, setDbStatus } = todosSlice.actions;
export default todosSlice.reducer;