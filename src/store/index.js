import { createStore } from 'redux';
import { START, ADD_TODO, REMOVE_TDDO } from '../actionTypes';

const InitialState = {
    todos: [],
    isLoading: false
};

function reducer(state = InitialState, action) {
    switch (action.type) {
        case START:
            return {
                ...state,
                todos: action.payload.todos,
                isLoading: action.payload.isLoading
            };
        case ADD_TODO:
            console.log('ADD_TODO');
            return { ...state, todos: [...state.todos, action.payload] };
        case REMOVE_TDDO:
            console.log('REMOVE_TDDO');

            return {
                ...state,
                todos: [
                    ...state.todos.slice(0, action.payload),
                    ...state.todos.slice(action.payload + 1)
                ]
            };
        default:
            return state;
    }
}

const store = createStore(reducer);

export default store;
