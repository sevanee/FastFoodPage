import { applyMiddleware, compose, createStore } from "redux";
import { Reducer } from "../reducers/Reducer";
import thunk from "redux-thunk";

const configureStore = () => {
    const store = createStore(Reducer,
        compose(applyMiddleware(thunk)));
    return store;
}

export default configureStore;



