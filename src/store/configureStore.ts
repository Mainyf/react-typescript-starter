import { createStore } from 'redux';

function todos(state = [], action: any): any {
    switch(action.type) {
        case 'ADD_TODO':
            return state.concat(action.text);
        default:
            return state;
    }
}

export default function configure(initialState: any) {
    return createStore(todos, initialState);
}
