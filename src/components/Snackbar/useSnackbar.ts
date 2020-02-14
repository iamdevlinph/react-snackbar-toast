import { useContext } from 'react';
import { SnackbarContext } from './SnackbarProvider';
import { SnackBarType } from './types';

const useSnackBar = () => {
  const SnackBar = useContext<SnackBarType>(SnackbarContext);

  return {
    toasts: SnackBar.toasts,
    addToast: SnackBar.add,
    removeToast: SnackBar.remove,
    id: SnackBar.idCounter
  };
};
export default useSnackBar;
