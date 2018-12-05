import { createStore, combineReducers, applyMiddleware } from 'redux';
import { persistStore, persistCombineReducers } from 'redux-persist';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';
import storage from 'redux-persist/es/storage';
import { USER } from './user';
import { MESSAGE_LIST } from './messages';
import { BOOKS } from './booklist';
import thunk from 'redux-thunk';

const config = {
    key: 'root',
    storage,
    debug: true,
    stateReconciler: autoMergeLevel2
  }





export const ConfigureStore = () => {

    const store = createStore(
        persistCombineReducers(config,
            {
                user: USER,
                messages: MESSAGE_LIST,
                books: BOOKS
            }),
            applyMiddleware(thunk)  
    )

    const persistor = persistStore(store);

    return {persistor, store};
}
