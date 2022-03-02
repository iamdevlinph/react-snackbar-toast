import React from 'react';
import cn from 'classnames';
let styles = require('./Image.scss');
import snackbarTick from '../../assets/images/snackbar_tick.svg';
import errorIcon from '../../assets/images/error-icon.png';
import closeIcon from '../../assets/images/close.png';

const noop = () => { }

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
//pass actual image path or icon type as src prop
const Image = ({ src, alt, className, onClick = noop }: IProps) => {
  const imgSrc = icons[src] || src;

  return (
    <img
      src={imgSrc}
      alt={alt}
      className={cn(styles.image, className)}
      onClick={event => onClick(event)}
    />
  );
};

export default Image;
