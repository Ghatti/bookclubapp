import { createStore, combineReducers, applyMiddleware } from 'redux';
import { USER } from './user';
import { MESSAGE_LIST } from './messages';
import { BOOKS } from './booklist';
import thunk from 'redux-thunk';


export const ConfigureStore = () => {

    return createStore(
        combineReducers({
    
            user: USER,
            messages: MESSAGE_LIST,
            books: BOOKS
        }),
        applyMiddleware(thunk)
    );
}
