import React from 'react'
import useSnackBar from './useSnackbar'

// Wrap the class component to use snackbar
export const withSnackbar = (Component: any) => {
    return (props: any) => {
      const {addToast, removeAllToast, removeToast} = useSnackBar();
  
      return <Component addToast={addToast} removeAllToast={removeAllToast} removeToast={removeToast} {...props} />;
    };
};

