import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle'
import '../src/sass/style.css';
import { Provider } from 'react-redux';
import configureStore from './manager/store/configureStore';

const store=configureStore()
store.subscribe(()=>{
  console.log(store.getState())
})


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
    <App />
    </Provider>
  </React.StrictMode>
  
);


