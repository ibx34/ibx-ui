import React from 'react';
import '../styles/button.scss';
import '../styles/utils.scss';

export interface IButtonProps extends React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
    color: string,
    label: string
    subtle?: boolean,
    block?: boolean,
    disabled?: boolean,
}

export const Button: React.FunctionComponent<IButtonProps> = ({ color, subtle, block, label, disabled, ...props }) => {
    const btn_color = {
        "primary": "button--primary",
        "secondary": "button--secondary",
        "danger": "button--danger",
        "warning": "button--warning"
    }[color];
    return <button
        type="button"
        disabled={disabled}
        className={['button', btn_color, subtle ? 'button--subtle' : '', block ? 'display--block' : ''].join(' ')}
        {...props}
    >
        {label}
    </button>
}