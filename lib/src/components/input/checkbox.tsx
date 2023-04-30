import React, { useState } from 'react';
import '../../styles/checkbox.scss';

export interface ICheckBoxProps extends React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
    disabled?: boolean,
    readOnly?: boolean,
    initialValue?: boolean,
}

export const Checkbox: React.FunctionComponent<ICheckBoxProps> = ({ initialValue, disabled, readOnly }) => {
    const [switchValue, setSwitchValue] = useState<boolean>(initialValue ? initialValue : false);
    return (
        <div className={['checkbox--box', switchValue == true ? 'checked' : ''].join(' ')}>
            <input readOnly={readOnly} disabled={disabled} className="checkbox" type="checkbox" value={switchValue == false ? 1 : 0} checked={switchValue} onChange={(e) => {
                if (!readOnly) {
                    setSwitchValue(parseInt(e.target.value) > 0 ? true : false)
                }
            }} />
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16" className={['checkbox--check', switchValue == true ? 'checked' : ''].join(' ')}><path d="M13.78 4.22a.75.75 0 0 1 0 1.06l-7.25 7.25a.75.75 0 0 1-1.06 0L2.22 9.28a.751.751 0 0 1 .018-1.042.751.751 0 0 1 1.042-.018L6 10.94l6.72-6.72a.75.75 0 0 1 1.06 0Z"></path></svg>
        </div>
    );
}