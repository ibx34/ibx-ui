import React, { useState } from 'react';
import '../../styles/switch.scss';

export interface ISwitchProps extends React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
    disabled?: boolean,
    readOnly?: boolean,
    label?: string,
    initialValue?: boolean,
}

export const Switch: React.FunctionComponent<ISwitchProps> = ({ label, initialValue, disabled, readOnly, ...props }) => {
    const [switchValue, setSwitchValue] = useState<boolean>(initialValue ? initialValue : false);
    return (
        <div className="switch--box">
            {label == undefined ? null : <span className="switch--name">{label}</span>}
            <label className={["switch", switchValue ? 'switch--on' : '', readOnly ? 'switch--readonly' : ''].join(' ')}>
                <input readOnly={readOnly} disabled={disabled} className="switch--checkbox" type="checkbox" value={switchValue == false ? 1 : 0} checked={switchValue} onChange={(e) => {
                    if (!readOnly) {
                        setSwitchValue(parseInt(e.target.value) > 0 ? true : false)
                    }
                }} />
                <span className={["switch--label", switchValue == true ? "selected" : "off", readOnly ? "label--readonly" : ""].join(' ')}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16"><path d="M13.78 4.22a.75.75 0 0 1 0 1.06l-7.25 7.25a.75.75 0 0 1-1.06 0L2.22 9.28a.751.751 0 0 1 .018-1.042.751.751 0 0 1 1.042-.018L6 10.94l6.72-6.72a.75.75 0 0 1 1.06 0Z"></path></svg></span>
                <span className={["switch--label", switchValue == false ? "selected" : "off", readOnly ? "label--readonly" : ""].join(' ')}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16"><path d="M3.72 3.72a.75.75 0 0 1 1.06 0L8 6.94l3.22-3.22a.749.749 0 0 1 1.275.326.749.749 0 0 1-.215.734L9.06 8l3.22 3.22a.749.749 0 0 1-.326 1.275.749.749 0 0 1-.734-.215L8 9.06l-3.22 3.22a.751.751 0 0 1-1.042-.018.751.751 0 0 1-.018-1.042L6.94 8 3.72 4.78a.75.75 0 0 1 0-1.06Z"></path></svg></span>
            </label>
        </div>
    );
}