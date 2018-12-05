import * as ActionTypes from './ActionTypes';

export const USER = (state = {loading: true, errMess: null, user: {}}, action) => {

    switch(action.type){

        case(ActionTypes.USER_FAILED):
            return {loading: false, errMess: action.payload, user: {}};
        case(ActionTypes.USER_LOADING):
            return {loading: true, errMess: null, user: {}};
        case(ActionTypes.INIT_USER):
            return {loading: false, errMess:null, user: {...action.payload}};
        case(ActionTypes.SUBMIT_FORM):
            return {...state, user: {...state.user, [action.payload.form]: action.payload.formData}}
        default:
            return state;
    }
}