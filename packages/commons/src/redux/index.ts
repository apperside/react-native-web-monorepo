// import * as customers from './customers'
// import * as productBuilder from './productBuilder'
import { combineReducers } from "redux";
import { ThunkAction, ThunkDispatch } from "redux-thunk";
// import * as cart from "./cart";
// import * as checkout from "./checkout";
import * as loading from "./loading";
// import * as modal from "./modal";
// import * as order from "./order";
// import * as paypal from "./paypal";
// import * as screen from "./screen";
// import * as settings from "./settings";
// import * as user from "./user";
// import * as weed from "./weed";

export type StatefulDataState = "loading" | "loaded" | "error" | "idle";
export type StatefulData<T> = {
  value?: T;
  state: StatefulDataState;
  message?: string;
};
const reducers = {
  // settings: settings.reducer,
  // user: user.reducer,
  // // auth: user.AuthReducer,
  // weed: weed.reducer,
  // cart: cart.reducer,
  // order: order.reducer,
  // checkout: checkout.reducer,
  loading: loading.reducer
  // paypal: paypal.reducer,
  // screen: screen.reducer,
  // modal: modal.reducer
  // customers:customers.reducer
};

export type AppState = {
  loading: loading.LoadingState;
  // auth: user.AuthState;
  // productBuilder: productBuilder.productBuilderState
};
export function uuidv4() {
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (c) {
    var r = (Math.random() * 16) | 0;
    var v = c === "x" ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
}

export type AppAction =
  // | modal.ModalActions
  // | screen.ScreenActions
  // | paypal.PaypalActions
  | loading.LoadingAction
// | checkout.CheckoutActions
// | settings.SettingsActions
// | user.UserActions
// | weed.WeedActions
// | cart.CartActions
// | order.OrderActions
// | user.AuthActions;

const combinedReducers = combineReducers<AppState>(reducers);

export const appInitialState: AppState = {
  loading: loading.initialState
};
export default combinedReducers;

export type AppDispatch = ThunkDispatch<AppState, undefined, AppAction>;
export type ActionResult<R> = ThunkAction<R, AppState, undefined, AppAction>;
export type Dispatch = AppDispatch;
