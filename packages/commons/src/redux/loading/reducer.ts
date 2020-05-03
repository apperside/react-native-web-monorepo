import { AppAction } from "..";

export type LoadingState = {
  isLoading?: boolean,
  loadingMessage?: string
}

export const initialState: LoadingState = { isLoading: false };

export function reducer(s: LoadingState = initialState, action: AppAction): LoadingState {
  switch (action.type) {
    case "SHOW_LOADING": {
      return {
        ...s,
        isLoading: action.payload.load,
        loadingMessage: action.payload.loadingMessage || ""
      };
    }
    default:
      return s;
  }
}
