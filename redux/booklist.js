import * as ActionTypes from './ActionTypes';
import { booksFailed } from './ActionCreators';

export const BOOKS = ( state = {loading: true, errMess: null, my: [], wanted: [],offers: []}, action) => {

    switch(action.type){

        case ActionTypes.BOOKS_FAILED:
            return {loading: false, errMess: action.payload, booklist: []};
        case ActionTypes.BOOKS_LOADING:
            return {loading: true, errMess: null, booklist: []};
        case ActionTypes.INIT_BOOKLIST:
            return {loading: false, errMess: null, my: action.payload.my, wanted: action.payload.wanted, offers: action.payload.offers};
        case ActionTypes.REMOVE_BOOK:
            return {...state, [action.payload.list]: state[action.payload.list].filter((book) => book.id !== action.payload.bookId) };
        case ActionTypes.ADD_BOOK:
            return {...state, [action.payload.list]: state[action.payload.list].concat({...action.payload.bookData, id: action.payload.list.length})}
        default:
            return state;
    }
}