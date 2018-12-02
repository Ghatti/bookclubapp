import * as ActionTypes from './ActionTypes';

/* TODO: fix the id assignment for new books

Removing a book reduces the length of the array, so books added after that will receive an ID that was already assigned to other books
(prior to the removal)

Proposed provisory solution: keep count of a current bookId on the state and increments it everytime a book is added to any list.
Simple but ugly, think more */

export const BOOKS = ( state = {loading: true, errMess: null, my: [], wanted: [],offers: []}, action) => {

    switch(action.type){

        case ActionTypes.BOOKS_FAILED:
            return {loading: false, errMess: action.payload, my: [], wanted: [],offers: []};
        case ActionTypes.BOOKS_LOADING:
            return {loading: true, errMess: null, my: [], wanted: [],offers: []};
        case ActionTypes.INIT_BOOKLIST:
            return {loading: false, errMess: null, my: action.payload.my, wanted: action.payload.wanted, offers: action.payload.offers};
        case ActionTypes.REMOVE_BOOK:
            return {...state, [action.payload.list]: state[action.payload.list].filter((book) => book.id !== action.payload.bookId) };
        case ActionTypes.ADD_BOOK:

            return {...state, 
                [action.payload.list]: state[action.payload.list].concat({
                    title: action.payload.title,
                    author: action.payload.author,
                    rating: '5.0',
                    cover: '/img/cover.png',
                    id: state[action.payload.list].length
            })}
        default:
            return state;
    }
}