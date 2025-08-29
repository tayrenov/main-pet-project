import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import './main-panel.css'

import IndexPage from '../../pages/index_page.jsx';
import TodosListPage from '../../pages/todos/todosList_page.jsx';
import TodoItemPage from '../../pages/todos/todoItem_page.jsx';

import { useDispatch, useSelector } from 'react-redux';
import { fetchTodos, checkDbStatus } from '../../app/redux/todosActions.js';
import { switchTheme } from '../../app/redux/uiActions.js';
import { testAuthTrue } from '../../app/redux/appActions.js';

function MainPanel() {

    const dispatch = useDispatch();

    const { todos, loading, error, dbStatus, currentSource } = useSelector(state => state.todos);
    const { mainTheme } = useSelector(state => state.ui);
    const { auth } = useSelector(state => state.app);

    const checkStatus= () => dispatch(checkDbStatus())

    const hundleAuth = () => dispatch(testAuthTrue())

    const handleLoad = () => dispatch(fetchTodos())

    return (
        <div className="app-main-panel">

            <Routes>
              <Route path='/' element={<IndexPage/>}/>
              <Route path='/todos' element={<TodosListPage />}/>
              <Route path='/todo/:id' element={<TodoItemPage />} />
            </Routes>

            <button onClick={hundleAuth}>Set Auth: {auth ? '1' : '0'}</button>

            <button onClick={checkStatus} disabled={loading}>
                Check Status
            </button>
            <p>Status: {dbStatus}</p>
            <button onClick={handleLoad} disabled={loading}>
                {loading ? "Loading..." : 'Load Todos'}
            </button>

            {error && <p style={{color:'red'}}>Error: { error }</p>}

            <pre>{JSON.stringify(todos.slice(0,3), null, 2)}</pre>

        </div>
    )
}

export default MainPanel;