import React, { ReactNode, useReducer, useMemo, useCallback } from "react";
import Snackbar from "./Snackbar";

import snackbarReducer from "./snackbarReducer";
const SnackbarContext = React.createContext<any>(undefined);
const { Provider } = SnackbarContext;

const initialState = {
  toasts: [],
  idCounter: 0
};

const SnackbarProvider = (props: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(snackbarReducer, initialState);
  const value = useMemo(() => [state, dispatch], [state]);

  const removeToast = useCallback(
    (id: number) => {
      dispatch({ type: "REMOVE_TOAST", payload: id });
    },
    [dispatch]
  );

  return (
    <Provider value={value}>
      {props.children}
      <Snackbar toasts={state.toasts} dismiss={removeToast} />
    </Provider>
  );
};

export { SnackbarContext, SnackbarProvider };
