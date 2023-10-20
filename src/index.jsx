import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle'
import '../src/sass/style.css';
import { Provider } from 'react-redux';
import { addProduct, removeProduct } from './manager/actions/Action';
import configureStore from './manager/store/configureStore';

const store=configureStore()
store.subscribe(()=>{
  console.log(store.getState())
})

store.dispatch(addProduct({id:0,img:"https://mcdonalds.az/images/c3810fe9a08f596796758778288d4346.png",title: "Beefcakes Burgers",desc: '100% beef patty, melted cheddar cheese, fresh onions, cucumber'}))
store.dispatch(addProduct({id:1,img:"https://mcdonalds.az/images/41f4b61d6b03de45443abbb89a2e4422.png",title: "Bugout Burger",desc: 'Fried, crispy chicken fillet served on a caramelized bun'}))
store.dispatch(addProduct({id:2, img: "https://mcdonalds.az/images/afa4b44cdad58e8e48e825e682dd5bae.png", title:"Crazy Burger",desc:"Fried, breaded crispy fish fillet served on a bun"}));


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
    <App />
    </Provider>
  </React.StrictMode>
  
);


