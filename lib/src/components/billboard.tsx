import classNames from 'classnames';
import React from 'react';
import '../styles/button.scss';
import '../styles/header.scss';

export interface IBillboardProps extends React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
    message: string,
    header?: string
}

export const Billboard: React.FunctionComponent<IBillboardProps> = ({ header, message, onClick, ...props }) => {
    const billboard = classNames("billboard", {
        "billboard--button": onClick !== undefined
    });
    const headerText = classNames("header--350", {
        "text--muted": onClick == undefined && header !== undefined,
        "header--400": header == undefined && onClick != undefined,
    })
    const renderAllText = () => {
        return (<header style={{ "textAlign": "center" }}>

            {header !== undefined ?
                <h1 className="header">{header}</h1>
                :
                null
            }
            <span className={headerText}>{message}</span>
        </header>
        )
    }
    const render = () => {
        if (onClick !== undefined) {
            return (<button onClick={onClick} className={billboard}>
                {renderAllText()}
            </button>)
        }
        return (<div className={billboard}>
            {renderAllText()}
        </div>)
    }
    return render()
}