import React from 'react';
import clsx from 'clsx';


export interface IButton {
    variant?: string
    htmlType?: 'button' | 'submit' | 'reset',
    onClick?: any
    radius?: any
    textType?: 'fh1' | 'fp3m_black' | 'fp3m_gray' | 'fp3sb_white' | 'fp3sb_orange' | 'p4sb' | 'p3sb' | 'p3' | 'p2' | 'p2sb' | 'p1' | 't2' | 't1sb' | 't1' | 't0'
    classNames?: string
    typoClassNames?: string
    color?: string
    disabled?: boolean,
    outline?: boolean,
    children?: any
    type?: string | undefined
}

export const Button:React.FC<IButton> = (
    {
        variant = '',
        htmlType = 'button',
        onClick = null,
        radius = 4,
        classNames = '',
        typoClassNames = '',
        disabled = false,
        outline = false,
        children,
    },
) => (
    <button
        onClick={onClick}
        className={clsx('btn text-center py-2 d-flex justify-content-center',
            `btn-${(disabled ? 'gry' : outline ? `outline-${variant}` : variant)}`,
            `b-rounded-${radius}`,
            classNames)}
        disabled={disabled}
        type={htmlType === 'button' ? 'button' : 'submit'}
    >
        <div
            className={clsx('text-center', typoClassNames)}
        >
            {children}
        </div>
    </button>
);
