import React, { useState } from 'react';
import { connect } from 'react-redux';
import { ADD_TODO, REMOVE_TDDO } from '../../actionTypes';

function TodosListRedux(props) {
    const [name, setName] = useState('');
    return (
        <div>
            <h3>{props.label}</h3>

            <div className='form'>
                <input value={name} onChange={e => setName(e.target.value)} />

                <button
                    className='btn'
                    onClick={() => {
                        setName('');
                        props.addTodo(name);
                    }}
                >
                    Adicionar
                </button>
            </div>

            {props.isLoading ? (
                <div className='loading'>Loading ...</div>
            ) : (
                <ul>
                    {props.todos.map((todo, i) => (
                        <li key={i}>
                            {todo.title}
                            <button
                                className='btn small'
                                onClick={() => props.removeTodo(i)}
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

function mapStateToProps(state) {
    return {
        isLoading: false,
        todos: state.todos
    };
}

function mapDispatchToProps(dispatch, ownProps) {
    return {
        addTodo: name => {
            console.log('dispatch ADD_TODO');
            dispatch({
                type: ADD_TODO,
                payload: { title: name }
            });
        },
        removeTodo: i => {
            console.log('dispatch REMOVE_TDDO');

            dispatch({ type: REMOVE_TDDO, payload: i });
        }
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TodosListRedux);
