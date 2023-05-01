import classNames from 'classnames';
import React, { useState } from 'react';
import '../../styles/superselect.scss';

export type SuperSelectOption = {
    disabled?: boolean,
    value: string,
    display: any
};

export interface ISuperSelectProps extends React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
    disabled?: boolean,
    readonly?: boolean,
    block?: boolean,
    values: SuperSelectOption[],
    initialValue?: string
}

export const SuperSelect: React.FunctionComponent<ISuperSelectProps> = ({ values, initialValue, ...props }) => {
    let choices: { [key: string]: SuperSelectOption } = {};
    values.map((e) => {
        choices[e.value] = e;
    });
    const [focusedOnOptions, setFocusedOnOptions] = useState<boolean>(false);
    const renderChoices = () => {
        if (opened) {
            return (<ul onClick={(_: any) => setFocusedOnOptions(!focusedOnOptions)} className={classNames("superselect--options-list")}>{Object.keys(choices).map((key, idx) => (
                <div id={idx.toString()} className={classNames("superselect--option", { "option--selected": selectedValue.value == key })}>
                    {choices[key].display}
                    {selectedValue.value == key ?
                        <div className="superselect--selected-check">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16" className="fill--primary"><path d="M13.78 4.22a.75.75 0 0 1 0 1.06l-7.25 7.25a.75.75 0 0 1-1.06 0L2.22 9.28a.751.751 0 0 1 .018-1.042.751.751 0 0 1 1.042-.018L6 10.94l6.72-6.72a.75.75 0 0 1 1.06 0Z"></path></svg>
                        </div>
                        :
                        null
                    }
                </div>
            ))
            }</ul >)
        }
    }

    const [opened, setOpened] = useState<boolean>(false);
    const [selectedValue, _] = useState<SuperSelectOption>(initialValue ? choices[initialValue] : choices[values[0].value]);
    const selectBase = classNames("superselect");
    return (
        <div style={{ "position": "relative", "maxWidth": "max-content" }}>
            <button onClick={(_: any) => { setOpened(!opened); setFocusedOnOptions(false); }} onBlur={(_: any) => { if (!focusedOnOptions) setOpened(!opened) }} className={selectBase}>
                <span className="superselect--value-label">{selectedValue.value}</span>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 12 12" width="12" height="12"><path d="M6 8.825c-.2 0-.4-.1-.5-.2l-3.3-3.3c-.3-.3-.3-.8 0-1.1.3-.3.8-.3 1.1 0l2.7 2.7 2.7-2.7c.3-.3.8-.3 1.1 0 .3.3.3.8 0 1.1l-3.2 3.2c-.2.2-.4.3-.6.3Z"></path></svg>
            </button>
            {renderChoices()}
        </div>
    );
}