import { AppDispatch, AppState } from "..";
export declare type LoadingAction = {
    type: "SHOW_LOADING";
    payload: {
        load?: boolean;
        loadingMessage?: string;
    };
} | {
    type: "SHOW_LOADING2";
    payload: {
        load?: boolean;
        loadingMessage?: string;
    };
};
export declare const showLoading: (load?: boolean | undefined, loadingMessage?: string | undefined) => LoadingAction;
export declare function loginAction(): (dispatch: AppDispatch, getState: () => AppState) => Promise<void>;
