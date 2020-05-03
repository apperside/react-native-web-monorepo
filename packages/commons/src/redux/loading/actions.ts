import { action } from "typesafe-actions";

export const showLoading = (load?: boolean, loadingMessage?: string) => action("SHOW_LOADING", { load, loadingMessage });
export const hideLoading = () => action("SHOW_LOADING", { load: false, loadingMessage: undefined });

export type LoadingAction = ReturnType<typeof showLoading> | ReturnType<typeof hideLoading>
