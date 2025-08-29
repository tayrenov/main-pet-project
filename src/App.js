import './App.css';

import { useDispatch, useSelector } from 'react-redux';
import { fetchTodos, checkDbStatus } from './app/redux/todosActions.js';
import { switchTheme } from './app/redux/uiActions.js';

import LeftPanel from './components/left-panel/left-panel.jsx';
import Header from './components/header/header.jsx';

import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import IndexPage from './pages/index_page.jsx';
import TodosListPage from './pages/todos/todosList_page.jsx';
import TodoItemPage from './pages/todos/todoItem_page.jsx';
import { testAuthTrue } from './app/redux/appActions.js';

function App() {
  const dispatch = useDispatch();

  const { todos, loading, error, dbStatus, currentSource } = useSelector(state => state.todos);
  const { mainTheme } = useSelector(state => state.ui);
  const { auth } = useSelector(state => state.app);

  const handleLoad = () => dispatch(fetchTodos())

  const checkStatus= () => dispatch(checkDbStatus())

  const hundleSwitchTheme = () => dispatch(switchTheme())

  const hundleAuth = () => dispatch(testAuthTrue())

  return (
    <Router>

      <div className={mainTheme === 'dark' ? "app dark-theme" : "app light-theme"}>

        <LeftPanel />

        <div className='app-body'>

          <Routes>
            <Route path='/' element={<Header title='Index-page'/>}/>
            <Route path='/todos' element={<Header title='Todos-page'/>}/>
            <Route path='/todo/:id' element={<Header title='Todos-page-id'/>} />
          </Routes>

          <div className='app-main-panel'>

            <Routes>
              <Route path='/' element={<IndexPage/>}/>
              <Route path='/todos' element={<TodosListPage />}/>
              <Route path='/todo/:id' element={<TodoItemPage />} />
            </Routes>

            <button onClick={hundleAuth}>Set Auth: {auth ? '1' : '0'}</button>

            <button onClick={hundleSwitchTheme}>{console.log(mainTheme)}TEST THEME</button>

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

        </div>

      </div>

    </Router>
    
  );
}

export default App;
