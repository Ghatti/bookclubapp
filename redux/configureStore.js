import { createStore, applyMiddleware } from 'redux';
import { persistStore, persistCombineReducers } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { USER } from './user';
import { MESSAGE_LIST } from './messages';
import { BOOKS } from './booklist';
import thunk from 'redux-thunk';


export const ConfigureStore = () => {

    const config = {
        key: 'root',
        storage
      }

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
