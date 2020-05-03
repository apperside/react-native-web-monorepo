import { action } from "typesafe-actions";
import { AppAction, AppDispatch, AppState } from "..";
import { showLoading } from ".";

export function loginAction() {
  return async (dispatch: AppDispatch, getState: () => AppState) => {
    dispatch(showLoading(true));
    setTimeout(() => {
      dispatch(showLoading(false));
    }, 5000);
  };
}
