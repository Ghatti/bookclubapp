import * as ActionTypes from './ActionTypes';


export const MESSAGE_LIST = (state = {loading: true, errMess: null, messages: []}, action) =>{

    switch(action.type){
        case ActionTypes.MESSAGES_FAILED:
            return {loading: false, errMess: action.payload, messages: []};
        case ActionTypes.MESSAGES_LOADING:
            return {loading: true, errMess: null, messages: []};
        case ActionTypes.INIT_MESSAGES:
            return {loading: false, errMess: null, messages: action.payload};
        default:
            return state;
    }
    
}