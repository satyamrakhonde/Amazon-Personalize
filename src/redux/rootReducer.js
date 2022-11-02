import { combineReducers } from "redux";
import cartReducer from "./cartReducer";
import lastViewReducer from "./lastViewReducer";
import userReducer from "./userReducer";
import viewItemReducer from "./viewItemReducer";

const rootReducer = combineReducers({
    user: userReducer,
    lastView: lastViewReducer,
    cart: cartReducer,
    item: viewItemReducer,
})

export default rootReducer;