import React from 'react';
import '../styles/button.scss';

export interface IButtonProps extends React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
    color: string,
    label: string
    subtle?: boolean,
    disabled?: boolean,
}

export const Button: React.FunctionComponent<IButtonProps> = ({ color, subtle, label, disabled, ...props }) => {
    const btn_color = {
        "primary": "button--primary",
        "secondary": "button--secondary",
        "danger": "button--danger",
        "warning": "button--warning"
    }[color];
    return <button
        type="button"
        disabled={disabled}
        className={['button', btn_color, subtle ? 'button--subtle' : ''].join(' ')}
        {...props}
    >
        {label}
    </button>
}