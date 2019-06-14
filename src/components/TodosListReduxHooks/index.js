import React, { useState, useEffect } from './node_modules/react';
import { useSelector, useDispatch } from './node_modules/react-redux';
import { START, ADD_TODO, REMOVE_TDDO } from '../../actionTypes';

function TodosList(props) {
    const dispatch = useDispatch();
    const state = useSelector(state => state);
    const [name, setName] = useState('');

    useEffect(() => {
        dispatch({ type: START, payload: { isLoading: true, todos: [] } });

        async function getData(url) {
            try {
                const res = await fetch(url);
                const data = await res.json();

                dispatch({
                    type: START,
                    payload: { isLoading: false, todos: data }
                });
            } catch (e) {
                console.log(e);
            }
        }

        setTimeout(() => {
            getData('https://jsonplaceholder.typicode.com/todos');
        }, 1000);
    }, [dispatch]);

    return (
        <div>
            <h3>{props.label}</h3>

            <div className='form'>
                <input value={name} onChange={e => setName(e.target.value)} />

                <button
                    className='btn'
                    onClick={() => {
                        if (name !== '') {
                            setName('');
                            dispatch({
                                type: ADD_TODO,
                                payload: { title: name }
                            });
                        }
                    }}
                >
                    Adicionar
                </button>
            </div>

            {state.isLoading ? (
                <div className='loading'>Loading ...</div>
            ) : (
                <ul>
                    {state.todos.map((todo, i) => (
                        <li key={i}>
                            {todo.title}
                            <button
                                className='btn small'
                                onClick={() =>
                                    dispatch({ type: REMOVE_TDDO, payload: i })
                                }
                            >
                                Remove
                            </button>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}

export default TodosList;
