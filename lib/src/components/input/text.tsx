import React from 'react';
import '../../styles/input.scss';

export interface ITextInputProps extends React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
    disabled: boolean,
    readonly?: boolean
}

export const TextInput: React.FunctionComponent<ITextInputProps> = ({ ...props }) => {
    return <input
        type="text"
        {...props} />;
}