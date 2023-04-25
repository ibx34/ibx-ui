import React from 'react';
import PropTypes from 'prop-types';
import './button.scss';

export const Button = ({ style, label, ...props }) => {
  const _style = {
    "primary": "button--primary",
    "secondary": "button--secondary",
    "danger": "button--danger",
    "warning": "button--warning"
  }[style];
  return (
    <button
      type="button"
      className={['button', _style].join(' ')}
      {...props}
    >
      {label}
    </button>
  );
};

Button.propTypes = {
  style: PropTypes.string.isRequired,
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
};
