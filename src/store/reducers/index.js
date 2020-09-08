import { combineReducers } from "redux";
import userCountReducer from "./userCountReducer";
import productCountReducer from "./productCountReducer";
import cartInfoReducer from "./cartInfoReducer";

export default combineReducers({
  userCountReducer,
  productCountReducer,
  cartInfoReducer,
});
