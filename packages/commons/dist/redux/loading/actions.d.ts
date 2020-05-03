export declare const showLoading: (load?: boolean | undefined, loadingMessage?: string | undefined) => {
    type: "SHOW_LOADING";
    payload: {
        load: boolean | undefined;
        loadingMessage: string | undefined;
    };
};
export declare const hideLoading: () => {
    type: "SHOW_LOADING";
    payload: {
        load: boolean;
        loadingMessage: undefined;
    };
};
export declare type LoadingAction = ReturnType<typeof showLoading> | ReturnType<typeof hideLoading>;
