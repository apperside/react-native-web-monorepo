import { AppAction } from "..";
export declare type LoadingState = {
    isLoading?: boolean;
    loadingMessage?: string;
};
export declare const initialState: LoadingState;
export declare function reducer(s: LoadingState | undefined, action: AppAction): LoadingState;
