export interface ToastType {
  message: string;
  id: number;
  options: ToastOptionsType;
}

export interface SnackBarType {
  toasts: Array<ToastType>;
  add: Function;
  remove: Function;
  idCounter: number;
  removeAll: Function;
}

export interface SnackBarProp {
  toasts: Array<ToastType>;
  dismiss: Function;
}

export interface SnackBarMessageProp {
  toast: ToastType;
  id: number;
  options: ToastOptionsType;
  dismiss: Function;
}
export interface IconTypeProp {
  type?: string;
  icon?: string;
}

export interface ToastOptionsType {
  autoDismiss?: boolean;
  autoDismissTime?: number;
  retry?: Function;
  component?: object;
  icon?: string;
  type?: string;
  className?: any;
  closeButton?: boolean;
  closeIcon?: string
}
