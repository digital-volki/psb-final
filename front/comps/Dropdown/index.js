import { motion } from 'framer-motion';
import { useCallback, useRef, useState } from 'react';

import { useOnClickOutside } from 'Lib/hooks/useOutsideClick';

import { Typography } from '../Typography';
import { Button } from '../Button';


export const Dropdown = ({
    children,
    icon = false,
    actions = [],
    custom = null,
    ...btnProps
}) => {
    const [isShow, setIsShow] = useState(false);
    const [isShowChecker, setIsShowChecker] = useState(false);
    const menuRef = useRef(null);

    const hider = useCallback(() => {
        if (!isShowChecker || !isShow)
            setIsShow(!isShow);
        setIsShowChecker(!isShowChecker);
    }, [isShow]);

    const action = act => () => {
        act();
        setIsShow(false);
        setIsShowChecker(false);
    };

    useOnClickOutside(menuRef, () => {
        setIsShowChecker(true);
        setIsShow(false);
    });

    return (
    // eslint-disable-next-line react/react-in-jsx-scope
        <div className='position-relative'>
            {icon ? (
            // eslint-disable-next-line react/react-in-jsx-scope
                <div onClick={hider}>
                    {icon}
                </div>
            ) : (
            // eslint-disable-next-line react/react-in-jsx-scope
                <Button variant='grn' onClick={hider} {...btnProps}>
                    {children}
                </Button>
            )}
            {isShow && (
            // eslint-disable-next-line react/react-in-jsx-scope
                <motion.div
                    ref={menuRef}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className='position-absolute off-z-index sh-lg_down bg-white brdr-4 p-2 end-0'
                    style={{
                        border: '1px solid rgba(0, 0, 0, 0.08)',
                        boxSizing: 'border-box',
                        boxShadow: '0px 6px 12px -6px rgba(24, 39, 75, 0.12), 0px 8px 24px -4px rgba(24, 39, 75, 0.08)',
                        borderRadius: '6px',
                    }}
                >
                    {custom || (
                    // eslint-disable-next-line react/react-in-jsx-scope
                        <>
                            {
                                actions.map((i, k) => (
                                    // eslint-disable-next-line react/react-in-jsx-scope
                                    <div
                                        key={String(k)}
                                        onClick={action(i.callback)}
                                        className='d-flex align-items-center p-2 me-5 pointer'
                                    >
                                        {/* eslint-disable-next-line react/react-in-jsx-scope */}
                                        <div>
                                            {i.icon}
                                        </div>
                                        {/* eslint-disable-next-line react/react-in-jsx-scope */}
                                        <Typography type='p1' classNames='text-nowrap mx-2'>
                                            {i.name}
                                        </Typography>
                                    </div>
                                ))
                            }
                        </>
                    )}
                </motion.div>
            )}
        </div>
    );
};
