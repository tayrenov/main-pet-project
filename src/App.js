import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './App.css';

import LeftPanel from './components/left-panel/left-panel.jsx';
import Header from './components/header/header.jsx';
import MainPanel from './components/main-panel/main-panel.jsx';
import { useEffect } from 'react';
import { initAuth } from './app/redux/appActions.js';


function App() {
  const dispatch = useDispatch();
  const { mainTheme } = useSelector(state => state.ui);
  
  useEffect(() => {
    dispatch(initAuth());
  }, [dispatch])

  return (
    <Router>

      <div className={mainTheme === 'dark' ? "app dark-theme" : "app light-theme"}>

        <LeftPanel />

        <div className='app-body'>
          <Routes>
            <Route path='/' element={<Header title='Index-page'/>}/>
            <Route path='/todos' element={<Header title='Todo app'/>}/>
            <Route path='/todo/:id' element={<Header title='Todos-page-id'/>} />
          </Routes>

          <MainPanel />

        </div>

      </div>

    </Router>
    
  );
}

export default App;
