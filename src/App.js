import React from 'react';
import { Provider } from 'react-redux';
import './App.css';

import store from './store';
//import TodosListReduxHooks from './components/TodosListReduxHooks';
import TodosListRedux from './components/TodosListRedux';

function App() {
    return (
        <Provider store={store}>
            <div className='App'>
                <TodosListRedux label='Todos List Redux Version' />
            </div>
        </Provider>
    );
}

export default App;
