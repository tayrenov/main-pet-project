import { Routes, Route } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import './main-panel.css'

import IndexPage from '../../pages/index_page.jsx';
import TodosListPage from '../../pages/todos/todosList_page.jsx';
import TodoItemPage from '../../pages/todos/todoItem_page.jsx';

import { fetchTodos } from '../../app/redux/todosActions.js';
// import { testAuthTrue } from '../../app/redux/appActions.js';
import AuthPage from '../../pages/auth_page/auth_page.jsx';
import CheckToken from '../../pages/check-token/check-token.jsx';
import ProtectedRoute from '../ProtectedRoute.js';

function MainPanel() {

    const dispatch = useDispatch();

    const { todos, loading, error } = useSelector(state => state.todos);

    const handleLoad = () => dispatch(fetchTodos())

    return (
        <div className="app-main-panel">

            <Routes>
                <Route path='/' element={<IndexPage/> }/>
                <Route path='/todos' element={<ProtectedRoute > <TodosListPage /> </ProtectedRoute>}/>
                <Route path='/todo/:id' element={<ProtectedRoute > <TodoItemPage /> </ProtectedRoute>} />
                <Route path='/auth' element={<AuthPage/>} />
                <Route path='/check-token' element={<ProtectedRoute > <CheckToken /> </ProtectedRoute>} />       
            </Routes>

            {/* <button onClick={hundleAuth}>Set Auth: {auth ? '1' : '0'}</button>

            <button onClick={checkStatus} disabled={loading}>
                Check Status
            </button>
            <p>Status: {dbStatus}</p>*/}
            <button onClick={handleLoad} disabled={loading}>
                {loading ? "Loading..." : 'Load Todos'}
            </button>

            {error && <p style={{color:'red'}}>Error: { error }</p>}

            <pre>{JSON.stringify(todos.slice(0,3), null, 2)}</pre> 

        </div>
    )
}

export default MainPanel;