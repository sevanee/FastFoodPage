import { createStore } from "redux";
import { Reducer } from "../reducers/Reducer";

const configureStore= () =>{
    const store=createStore(Reducer);
    return store;
}

export default configureStore