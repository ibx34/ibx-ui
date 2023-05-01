import React from 'react';
import { DetailedHTMLProps, FunctionComponent } from 'react';
import '../styles/button.scss';
import '../styles/utils.scss';
import '../utils';
import { SIZES } from '../utils';

export interface IButtonProps extends DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
    color: string,
    size?: SIZES,
    subtle?: boolean,
    block?: boolean,
    disabled?: boolean,
}

export const Button: FunctionComponent<IButtonProps> = ({ size, color, subtle, block, disabled, children, ...props }) => {
    const btn_color = {
        "primary": "button--primary",
        "secondary": "button--secondary",
        "danger": "button--danger",
        "warning": "button--warning"
    }[color];
    const btn_size = {
        "small": "size--small",
        "normal": "size--normal",
        "large": "size--large",
        "medium": "size--medium",
    };
    return <button
        type="button"
        disabled={disabled}
        className={['button', btn_size[size ? size : "normal"], btn_color, subtle ? 'button--subtle' : '', block ? 'display--block' : ''].join(' ')}
        {...props}
    >
        {children}
    </button>
}