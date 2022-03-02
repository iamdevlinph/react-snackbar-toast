import { useContext, useCallback } from "react";
import { SnackbarContext } from "./SnackbarProvider";
import { ToastOptionsType } from "./types";

const useSnackBar = () => {
  const [state, dispatch] = useContext<any>(SnackbarContext);
  const { toasts, idCounter } = state;

  const addToast = useCallback(
    (message: string, options: ToastOptionsType) => {
      let toastId = idCounter + 1;
      dispatch({ type: "ADD_TOAST", payload: { message, options, toastId } });
      return toastId;
    },
    [dispatch, idCounter]
  );

  const removeToast = useCallback(
    (id: number) => {
      dispatch({ type: "REMOVE_TOAST", payload: id });
    },
    [dispatch]
  );

  const removeAllToast = useCallback(
    () => {
      dispatch({ type: "REMOVE_ALL_TOASTS" });
    },
    [dispatch]
  );

  return {
    toasts: toasts,
    addToast: addToast,
    removeToast: removeToast,
    removeAllToast: removeAllToast,
    idCounter: idCounter
  };
};

export default useSnackBar;
