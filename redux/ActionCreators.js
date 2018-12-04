import * as ActionTypes from './ActionTypes';
import { baseUrl } from '../shared/baseUrl';


export const fetchUser = (userId) => (dispatch) => {


    return fetch(baseUrl + 'USERS')
    .then(
        response => {
            if(response.ok)
                return response;
            else {
                var error = new Error('Error ' + response.status + ": " + response.statusText);
                throw error;
            }

        },
        error => {
            var errMess = new Error(error.message);
            throw errMess;
        }
    )
    .then(response => {
        return response.json();
    })
    .then(users => users.filter((user) => user.userId === userId )[0])
    .then(user => dispatch(initUser(user)))
    .catch(error => dispatch(userFailed(error.message)));

}

export const initUser = (user) => {
    return {
        type: ActionTypes.INIT_USER,
        payload: user
    }
}

export const userFailed = (error) => {
    return {
        type: ActionTypes.USER_FAILED,
        payload: error
    }
}

export const fetchBooks = (userId) => dispatch => {

    return fetch(baseUrl + 'BOOKLIST')
    .then(
        
        (response) => {

        if(response.ok){
            return response;
        }
        else {
            var error = new Error('Error ' + response.status + ': ' + response.statusText);
            throw error;
        }
    },
        (error) => {
            var errMess = new Error(error.message);
            throw errMess;
        }
    )
    .then(response => response.json())
    .then(booklists => dispatch( initBooks(booklists[userId])))
    .catch(error => dispatch(booksFailed(error)));
} 

export const initBooks = (booklist) => {
    return {
        type: ActionTypes.INIT_BOOKLIST,
        payload: booklist
    }
}

export const booksFailed = (error) => {
    return{
        type: ActionTypes.BOOKS_FAILED,
        payload: error
    }
}

export const fetchMessages = (userId) => dispatch => {

    return fetch(baseUrl + 'MESSAGES')
    .then(
        (response)=> {
            if(response.ok){
                return response;
            }
            else {
                var error = new Error('Error ' + response.status + ": " + response.statusText);
                throw error;
            }
        },
        (error) => {
            var errMess = new Error(error.message);
            throw errMess;
        }
    )
    .then(response => response.json())
    .then(messages => dispatch(initMessages(messages[userId])))
    .catch(error => dispatch(messagesFailed(error)));
}

export const initMessages = (messages) => {

    return {
        type: ActionTypes.INIT_MESSAGES,
        payload: messages
    }
}

export const messagesFailed = (error) => {

    return {
        type: ActionTypes.MESSAGES_FAILED,
        payload: error
    }
}

export const removeBook = (list, bookId) => {
    return {
        type: ActionTypes.REMOVE_BOOK,
        payload: {
            list: list,
            bookId:bookId
        }
    }
}

export const addBook = (bookData) => {
    
    return {
        type: ActionTypes.ADD_BOOK,
        payload: {
            title: bookData.title,
            author: bookData.author,
            list: bookData.list
        }
    }
}

export const deleteMessage = (mesId) => {
    console.log(mesId);
    return {
        type: ActionTypes.DELETE_MESSAGE,
        payload: {
            mesId: mesId
        }
    }
}