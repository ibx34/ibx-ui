import React from 'react';
import PropTypes from 'prop-types';
import './button.scss';

export const Button = ({ style, subtle, label, disabled, ...props }) => {
  const _style = {
    "primary": "button--primary",
    "secondary": "button--secondary",
    "danger": "button--danger",
    "warning": "button--warning"
  }[style];
  return (
    <button
      type="button"
      disabled={disabled}
      className={['button', _style, subtle ? 'button--subtle' : ''].join(' ')}
      {...props}
    >
      {label}
    </button>
  );
};

Button.propTypes = {
  style: PropTypes.string.isRequired,
  subtle: PropTypes.bool,
  disabled: PropTypes.bool,
  /**
   * Optional click handler
   */
  onClick: PropTypes.func,
};

Button.defaultProps = {
  backgroundColor: null,
  primary: false,
  size: 'medium',
  onClick: undefined,
  disabled: true
};
