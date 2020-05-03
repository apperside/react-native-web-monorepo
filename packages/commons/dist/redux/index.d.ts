import { ThunkAction, ThunkDispatch } from "redux-thunk";
import * as loading from "./loading";
export declare type StatefulDataState = "loading" | "loaded" | "error" | "idle";
export declare type StatefulData<T> = {
    value?: T;
    state: StatefulDataState;
    message?: string;
};
export declare type AppState = {
    loading: loading.LoadingState;
};
export declare function uuidv4(): string;
export declare type AppAction = loading.LoadingAction;
declare const combinedReducers: import("redux").Reducer<import("redux").CombinedState<AppState>, import("redux").AnyAction>;
export declare const appInitialState: AppState;
export default combinedReducers;
export declare type AppDispatch = ThunkDispatch<AppState, undefined, AppAction>;
export declare type ActionResult<R> = ThunkAction<R, AppState, undefined, AppAction>;
export declare type Dispatch = AppDispatch;
