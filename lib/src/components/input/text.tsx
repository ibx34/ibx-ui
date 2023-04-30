import React from 'react';
import '../../styles/input.scss';
import '../../styles/utils.scss';

export interface ITextInputProps extends React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
    disabled?: boolean,
    readonly?: boolean,
    block?: boolean
}

export const TextInput: React.FunctionComponent<ITextInputProps> = ({ block, ...props }) => {
    return <input
        type="text"
        className={['text--input', block == true ? 'display--block' : ''].join(' ')}
        {...props} />;
}