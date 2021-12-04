import clsx from 'clsx';
import React from 'react';
import fp from 'lodash/fp';

import styles from './styles.module.scss';


interface Itypo {
    type: 'fh1' | 'fp3m_black' | 'fp3m_gray' | 'fp3sb_white' | 'fp3sb_orange' | 'p4sb' | 'p3sb' | 'p3' | 'p2' | 'p2sb' | 'p1' | 't2' | 't1sb' | 't1' | 't0'
    color?: string
    classNames?: string
    onClick?: never
}


export const Typography: React.FC<Itypo> = ({
    children,
    classNames,
    color = 'blck',
    type = 'p3',
    onClick = fp.noop,
}) => (
    <div className={clsx(styles[type], `text-${color}`, classNames)} onClick={onClick}>
        {children}
    </div>
);
