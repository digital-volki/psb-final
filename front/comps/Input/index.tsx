import { Control, useController } from 'react-hook-form';
import React, { useState } from 'react';
import clsx, { ClassValue } from 'clsx';

import { BaseColors } from 'Lib/styles/interfaces';
import { Typography } from 'Components/Typography';

import styles from './s.module.scss';


export interface IInput {
    name: string
    defaultValue?: string
    control: Control<any>
    placeholder?: string
    themeColor?: BaseColors
    textarea?: boolean
    left?: React.ReactNode
    right?: React.ReactNode
    className?: ClassValue
    htmlType?: string
    disabled?: boolean
    icon?: any
    containerClassname?: any
    type?: string
    font?: string
    rows?: number
}

export const Input:React.FC<IInput> = (
    {
        children = '',
        name,
        className = '',
        control,
        disabled = false,
        placeholder,
        icon,
        type = 'text',
        containerClassname = '',
        font = 'fp2InputHeader',
        ...props
    },
) => {
    const { field, fieldState } = useController({
        control,
        name,
        defaultValue: type === 'datetime-local' ? '01 01 0001, 00:00:00' : '',
    });

    const [isActive, setIsActive] = useState(false);
    return (
        <>
            <Typography type='p1' color='greyInput' classNames={clsx('my-2', containerClassname)}>
                <div className={clsx('d-flex flex-column', className)}>
                    <div color={fieldState.error ? 'danger' : 'greyInput'} className={`my-1 ${font} `}>
                        {fieldState.error ? `${children}  (${fieldState.error.message})` : children}
                    </div>
                    <div
                        onClick={() => setIsActive(true)}
                        className={clsx(
                            'mt-1 rounded b-rounded-4 border bg-white d-flex align-items-center justify-content-between',
                            fieldState.error ? 'border-danger' : isActive && 'border-orng',
                        )}
                    >
                        {type !== 'description' ? (
                            <input
                                {...field}
                                type={type}
                                placeholder={placeholder}
                                onBlur={() => setIsActive(false)}
                                disabled={disabled}
                                className={clsx(styles.input, 'my-2 p-1 ms-1 d-flex w-100 fp2InputText')}
                            />
                        )
                            : (
                                <textarea
                                    {...field}
                                    placeholder={placeholder}
                                    onBlur={() => setIsActive(false)}
                                    className={clsx(styles.input, 'my-2 p-1 ms-1 d-flex w-100 fp2InputText')}
                                    {...props}
                                />
                            )}
                        {icon && (
                            <div className='border-start border-1 p-1'>
                                {icon}
                            </div>
                        )}
                    </div>
                </div>
            </Typography>
        </>
    );
};
