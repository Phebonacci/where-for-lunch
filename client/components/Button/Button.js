import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './Button.css';

const Button = ({ onClick, children, theme, isDisabled }) => {
  return (
    <button
      className={classNames({
        [styles.root]: true,
        [styles[theme]]: true,
        [styles.disabled]: isDisabled,
      })}
      onClick={onClick}
      disabled={isDisabled}
    >
      { children }
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.string,
  ]),
  onClick: PropTypes.func,
  theme: PropTypes.string,
  isDisabled: PropTypes.bool,
};

export default Button;
