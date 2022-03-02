import { SnackBarType, ToastType } from "./types";

const snackbarReducer = (state: SnackBarType, action: any) => {
  const { type, payload } = action;
  switch (type) {
    case "ADD_TOAST":
      return add(state, payload);
    case "REMOVE_TOAST":
      return remove(state, payload);
    case "REMOVE_ALL_TOASTS":
      return removeAll(state);
    default:
      throw "Action type not found";
  }
};

const add = (state: SnackBarType, payload: any) => {
  const { message, options, toastId } = payload;
  let toast: ToastType = {
    message: message,
    id: toastId,
    options: options || {}
  };
  return {
    ...state,
    idCounter: toastId,
    toasts: [...state.toasts, toast]
  };
};

const remove = (state: SnackBarType, payload: any) => {
  let toasts = state.toasts.filter((toast: ToastType) => toast.id !== payload);
  return {
    ...state,
    toasts: toasts
  };
};

const removeAll = (state: any) => {
  return {
    ...state,
    toasts: []
  };
};

export default snackbarReducer;
