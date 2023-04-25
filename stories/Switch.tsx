import React, { useState } from 'react';
import PropTypes, { bool, number } from 'prop-types';
import './switch.scss';

export const Switch = ({ right, left, value, ...props }) => {
    const [switchValue, setSwitchValue] = useState<boolean>(value == undefined ? false : value);
    return (
        <label className="switch">
            <input className="switch--checkbox" type="checkbox" value={switchValue == false ? 1 : 0} checked={value} onChange={(e) => {
                setSwitchValue(parseInt(e.target.value) > 0 ? true : false)
            }} />
            <span className={["switch--label", switchValue == true ? "switch--selected" : ""].join(' ')}>{left ? left : "On"}</span>
            <span className={["switch--label", switchValue == false ? "switch--selected" : ""].join(' ')}>{right ? right : "Of"}</span>
        </label>
    );
};

Switch.propTypes = {
    value: PropTypes.bool,
    right: PropTypes.string,
    left: PropTypes.string,
};

Switch.defaultProps = {
    value: false
};
