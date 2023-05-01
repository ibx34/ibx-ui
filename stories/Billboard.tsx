import React from 'react';
import PropTypes from 'prop-types';
import './billboard.scss';

export const Billboard = ({ label, disabled, ...props }) => {
    return (
        <div>hi</div>
    );
};

Billboard.propTypes = {
    label: PropTypes.string.isRequired,
    disabled: PropTypes.bool,
};