import React, { useState } from 'react';
import PropTypes, { bool, number } from 'prop-types';
import './switch.scss';

export const Switch = ({ label, right, left, value, ...props }) => {
    const [switchValue, setSwitchValue] = useState<boolean>(value == undefined ? false : value);
    return (
        <div className="switch--box">
            {label == undefined ? null : <span>({switchValue}): {label}</span>}
            <label className={["switch", switchValue == true ? 'switch--active' : ''].join(' ')}>
                <input className="switch--checkbox" type="checkbox" value={switchValue == false ? 1 : 0} checked={value} onChange={(e) => {
                    setSwitchValue(parseInt(e.target.value) > 0 ? true : false)
                }} />
                <span className={["switch--label", switchValue == false ? "switch--selected" : ""].join(' ')}>{left ? left : "On"}</span>
                <span className={["switch--label", switchValue == true ? "switch--selected" : ""].join(' ')}>{right ? right : "Off"}</span>
            </label>
        </div>
    );
};

Switch.propTypes = {
    value: PropTypes.bool,
    label: PropTypes.string,
    right: PropTypes.string,
    left: PropTypes.string,
};

Switch.defaultProps = {
    value: false,
};
