import React, { useState } from 'react';
import PropTypes, { bool, number } from 'prop-types';
import './header.scss';

export const Header = ({ text, size, ...props }) => {
    return (
        <span className={["header", `header--${size.toString()}`].join(' ')}>{text}</span>
    );
};

Header.propTypes = {
    text: PropTypes.string.isRequired,
    size: PropTypes.number.isRequired
};
