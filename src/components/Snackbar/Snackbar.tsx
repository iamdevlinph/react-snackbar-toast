import React, { useEffect } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import classNames from 'classnames';
import Image from '../Image/Image';
import { SnackBarProp, SnackBarMessageProp, IconTypeProp } from './types';
let styles = require('./SnackBar.css');

const Icon = ({ type, icon }: IconTypeProp) => {
  const getIcon = (iconType?: string) => {
    switch (iconType) {
      case 'success':
        return 'snackbarTick';
      case 'error':
        return 'errorIcon';
      default:
        return undefined;
    }
  };

  icon = icon || getIcon(type);
  if (!icon) {
    return null;
  }
  return (
    <div className={styles.icon + ' verticleMiddle'}>
      <Image src={icon} />
    </div>
  );
};

const SnackBarMessage = ({
  toast,
  id,
  options,
  dismiss
}: SnackBarMessageProp) => {
  var classes = classNames({
    [styles.message]: true,
    [styles.success]: options.type === 'success'
  });

  useEffect(() => {
    //dismiss the snackbar on timeout
    if (options.autoDismiss !== false) {
      let timer = setTimeout(() => {
        dismiss(id);
      }, options.autoDismissTime || 3000);

      return () => {
        clearTimeout(timer);
      };
    }
    return;
  }, []);

  const retry = () => {
    dismiss(id);
    if (options.retry) {
      options.retry();
    }
  };

  return (
    <div className={classes}>
      {options.component}
      {!options.component && (
        <React.Fragment>
          <Icon type={options.type} icon={options.icon} />
          <div className={styles.text}>{toast.message}</div>
          {options.retry && (
            <div className={styles.retry} onClick={retry}>
              Retry
            </div>
          )}
        </React.Fragment>
      )}
    </div>
  );
};

const Snackbar = ({ toasts, dismiss }: SnackBarProp) => {
  return (
    <TransitionGroup className={styles.toast + ' fkToastMessage'}>
      {toasts.map((toast) => {
        return (
          <CSSTransition
            classNames="fkToastMessage"
            key={toast.id}
            mountOnEnter
            timeout={400}
            unmountOnExit
          >
            <SnackBarMessage
              toast={toast}
              dismiss={dismiss}
              id={toast.id}
              options={toast.options}
            ></SnackBarMessage>
          </CSSTransition>
        );
      })}
    </TransitionGroup>
  );
};

export default Snackbar;
