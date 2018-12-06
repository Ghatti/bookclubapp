import React from 'react';
import Main from './components/Main';
import { Provider } from 'react-redux';
import { ConfigureStore } from './redux/configureStore';
import { PersistGate } from 'redux-persist/integration/react'
import { Loading } from './components/LoadingComponent';


const { persistor, store }  = ConfigureStore();

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
          <PersistGate 
          persistor={persistor}
          loading={<Loading/>}
          >
            <Main />
          </PersistGate>
      </Provider>

    );
  }
}

