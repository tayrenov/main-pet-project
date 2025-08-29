import { setTodos, setLoading, setError, setDbStatus } from "./todosSlice.js";

const SERVICE = "todo-list-api__v2";

const API_TODOS_URL = "/todos";
const API_HEALTH_URL = "/health"

export const checkDbStatus = () => async (dispatch, getState) => {
    try {
        dispatch(setLoading(true));
        const response = await fetch(API_HEALTH_URL);
        if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`)
        
        const data = await response.json();

        console.log(data[0].service)
        if (data[0].service === SERVICE) {
            dispatch(setDbStatus(data[0].status))
        } else {
            dispatch(setDbStatus('wrong'))
        }
    } catch (error) {
        console.log('Error')
        dispatch(setDbStatus('error'))
        dispatch(setError(error.message));
    } finally {
        dispatch(setLoading(false));
    }
}

export const fetchTodos = () => async (dispatch, getState) => {

    try {
        dispatch(setLoading(true));
        const response = await fetch(API_TODOS_URL);
        if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`)
        const data = await response.json();
        dispatch(setTodos(data));    
    } catch (error) {
        console.log('Error')
        dispatch(setError(error.message));
    } finally {
        dispatch(setLoading(false));
    }
}
