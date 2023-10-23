import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle'
import '../src/sass/style.css';
import { Provider } from 'react-redux';
import configureStore from './manager/store/configureStore';
import { getProductsFromDatabase } from './manager/actions/Action'

const store=configureStore()

const result = (
  <Provider store={store}>
      <App />
  </Provider>
)



ReactDOM.render(<div className="loading mt-5"><img src="https://media.tenor.com/DWAVxZzFBf8AAAAC/friends-loading.gif" alt="" /></div>, document.getElementById('root'));

store.dispatch(getProductsFromDatabase()).then(() => {
    ReactDOM.render(result, document.getElementById('root'));
})


