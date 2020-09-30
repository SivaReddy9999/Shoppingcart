import React from 'react';
import logo from './logo.svg';
import './App.css';
import Loginform from './container/Loginform'
import {Provider} from 'react-redux'
import store from './redux/store'
import ProductContainer from './container/ProductContainer'
import Main from './container/Main'

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Main />
      </div>
    </Provider>
  );
}

export default App;

