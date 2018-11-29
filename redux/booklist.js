import * as ActionTypes from './ActionTypes';

export const BOOKS = ( state = {loading: true, errMess: null, booklist: []}, action) => {

    switch(action.type){

        case ActionTypes.BOOKS_FAILED:
            return {loading: false, errMess: action.payload, booklist: []};
        case ActionTypes.BOOKS_LOADING:
            return {loading: true, errMess: null, booklist: []};
        case ActionTypes.INIT_BOOKLIST:
            return {loading: false, errMess: null, booklist: action.payload};
        default:
            return state;
    }
}