import { motion } from 'framer-motion';
import clsx from 'clsx';
import React, { useRef } from 'react';

import { useDispatch, useSelector } from 'Components/index';
import { mainStore } from 'Lib/store/main';
import { useOnClickOutside } from 'Lib/hooks/useOutsideClick';

import styles from '../styles.module.scss';


export const Popup = () => {
    const dp = useDispatch();

    const { message, addition } = useSelector('main.modal');

    const closer = () => dp(mainStore.actions.hideModal({}));

    const outRef = useRef(null);

    useOnClickOutside(outRef, closer);

    return (
    // eslint-disable-next-line react/react-in-jsx-scope
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className={clsx('position-block ',
                styles.m_back)}
        >
            {/* eslint-disable-next-line react/react-in-jsx-scope */}
            <motion.div
                ref={outRef}
                initial={{ y: 80 }}
                animate={{ y: 0 }}
                exit={{ y: 80 }}
                transition={{ duration: 0.3 }}
                drag='y'
                onDragEnd={(_, i) => i.offset.y > 60 && closer()}
                dragConstraints={{ bottom: 50, top: 0 }}
                className={clsx('bg-wht px-3 pt-2 pb-3 brdr-4 mx-4 my-auto d-flex flex-column', styles.m_gen)}
            >
                {/* eslint-disable-next-line react/react-in-jsx-scope */}

                {message}

                {/* eslint-disable-next-line react/react-in-jsx-scope */}

                {addition.description}

            </motion.div>
        </motion.div>
    );
};
