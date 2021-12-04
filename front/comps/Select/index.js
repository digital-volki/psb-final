import { useController } from 'react-hook-form';

import { Typography } from '../Typography';
import { ArrowDown } from '../icons';


export const Select = ({
    // eslint-disable-next-line react/react-in-jsx-scope
    icon = <ArrowDown />,
    label = 'label',
    list = new Map(),
    className,
    ...controller
}) => {
    const { field, fieldState } = useController(controller);
    return (
        // eslint-disable-next-line react/react-in-jsx-scope
        <div className={className}>
            {/* eslint-disable-next-line react/react-in-jsx-scope */}
            <div color={fieldState.error ? 'danger' : 'greyInput'} className='my-2 fp2InputHeader'>
                {/* {children} */}
                {fieldState.error ? `${label}  (${fieldState.error.message})` : label}
            </div>
            {/* eslint-disable-next-line react/react-in-jsx-scope */}
            <Typography type='p2' classNames='position-relative'>
                {/* eslint-disable-next-line react/react-in-jsx-scope */}
                <select
                    {...field}
                    className='form-select form-control-lg brdr-3 shadow-none border-1 py-2 bg-lght fp2InputText'
                    style={{ color: '#808080' }}
                    aria-label={label}
                >
                    {Array.from(list.keys()).map((v, index) => (
                        // eslint-disable-next-line react/react-in-jsx-scope
                        <option
                            key={String(index)}
                            defaultChecked={index === 0}
                            value={v}
                        >
                            {list.get(v)}
                        </option>
                    ))}
                </select>
                {/* eslint-disable-next-line react/react-in-jsx-scope */}
                <div
                    onClick={() => console.log(field.ref)}
                    className='position-absolute end-0 top-0 mt-2 me-2'
                >
                    {icon}
                </div>
            </Typography>
        </div>
    );
};
