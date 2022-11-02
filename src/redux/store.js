import { legacy_createStore as createStore } from "redux";
import {composeWithDevTools} from "redux-devtools-extension";
import rootReducer from './rootReducer';
import {loadState} from "./localStorage";

const persistedState = loadState();
const selectedUser = null;
const cartItems = [];
const qty = 0;
const view = 'homepage';
const item = null;
const page = 'items';

const initialStore = {
    user: selectedUser,
    cart: cartItems,
    lastView: view,
    lastPage: page,
    totQty: qty,
    item: item,
    persistedState
}

const store = createStore(rootReducer, persistedState, composeWithDevTools());
export default store;
