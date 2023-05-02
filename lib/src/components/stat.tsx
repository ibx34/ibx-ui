import React from 'react';
import '../styles/stat.scss';
import '../styles/utils.scss';

export interface IStatProps extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    value?: any,
    loading?: boolean,
    title?: string
}

export const Stat: React.FunctionComponent<IStatProps> = ({ value, loading, title, ...props }) => {
    return <div className='stat'>
        {title ?
            <h4 className="stat--title">{title}</h4>
            :
            null
        }
        {loading || value == undefined ?
            <span className="stat--loading">--</span>
            :
            <span className="stat--value">{value}</span>
        }
    </div>
}