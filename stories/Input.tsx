import React from 'react';
import PropTypes from 'prop-types';
import './input.scss';

/**
 * Primary UI component for user interaction
 */
export const Input = ({ disabled, readOnly, ...props }) => {
  ///const mode = primary ? 'storybook-button--primary' : 'storybook-button--secondary';
  return (
    <input
      type="text"
      disabled={disabled}
      readOnly={readOnly}
      {...props}
    //   className={['storybook-button', `storybook-button--${size}`, mode].join(' ')}
    //   style={backgroundColor && { backgroundColor }}
    //   {...props}
    />
  );
};

Input.propTypes = {
  disabled: PropTypes.bool,
  readOnly: PropTypes.bool
};

Input.defaultProps = {
  disabled: false,
  readOnly: false
};
