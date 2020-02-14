import React, { useState, ReactNode } from 'react';
import Snackbar from './Snackbar';
import { ToastOptionsType, ToastType } from './types';

const SnackbarContext = React.createContext<any>(undefined);
const { Provider } = SnackbarContext;

const SnackbarProvider = (props: { children: ReactNode }) => {
  //function to add toast message
  const add = (message: string, options: ToastOptionsType) => {
    let uniqueId;
    setState((curState: any) => {
      uniqueId = curState.idCounter + 1;

      let toast: ToastType = {
        message: message,
        id: uniqueId,
        options: options || {}
      };

      return {
        ...curState,
        idCounter: uniqueId,
        toasts: [...curState.toasts, toast]
      };
    });
    return uniqueId;
  };

  const remove = (id: number) => {
    setState(curState => {
      //remove the toast message using unique id
      let toasts = curState.toasts.filter(
        (toast: ToastType) => toast.id !== id
      );
      return {
        ...curState,
        toasts: toasts
      };
    });
  };

  let [state, setState] = useState({
    toasts: [],
    add: add,
    remove: remove,
    idCounter: 0
  });

  return (
    <Provider value={state}>
      {props.children}
      <Snackbar toasts={state.toasts} dismiss={remove} />
    </Provider>
  );
};

export { SnackbarContext, SnackbarProvider };
