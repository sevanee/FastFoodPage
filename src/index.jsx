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

const product1=store.dispatch(addProduct({id:0,img:"https://mcdonalds.az/images/c3810fe9a08f596796758778288d4346.png",title: "Beefcakes Burgers",desc: '100% beef patty, melted cheddar cheese, fresh onions, cucumber'}))
store.dispatch(addProduct({id:1,img:"https://mcdonalds.az/images/c3810fe9a08f596796758778288d4346.png",title: "CBeefcakes Burgers",desc: '100% beef patty, melted cheddar cheese, fresh onions, cucumber'}))
store.dispatch(addProduct({id:2, img: "https://mcdonalds.az/images/c3810fe9a08f596796758778288d4346.png", title:"Beefcakes Burgers",desc:"100% beef patty, melted cheddar cheese, fresh onions, cucumber"}));


store.dispatch(removeProduct({id:product1.value.id}))

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
    <App />
    </Provider>
  </React.StrictMode>
  
);


