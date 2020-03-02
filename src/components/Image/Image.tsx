import React from 'react';
let styles = require('./Image.css');
import snackbarTick from '../../assets/images/snackbar_tick.svg';
import errorIcon from '../../assets/images/error-icon.png';
import closeIcon from '../../assets/images/close.png';

const noop =  () => {} 

type iconsTypes = {
  [key: string]: string;
};

let icons: iconsTypes = {
  snackbarTick: snackbarTick,
  errorIcon: errorIcon,
  closeIcon: closeIcon
};

export interface IProps {
  src: string | object | any;
  alt?: string;
  className?: string;
  onClick?: Function;
}
//you can pass actual image path or icon type as src parameter to this component
const Image = ({ src, alt, className, onClick = noop }: IProps) => {
  console.log(icons[src], icons, src)
  if (icons[src]) {
    return (
      <img
        src={icons[src]}
        alt={alt}
        className={styles.image + ' ' + className}
        onClick={() => onClick()}
      />
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      className={styles.image + ' ' + className}
      onClick={event => onClick(event)}
    />
  );
};

export default Image;
