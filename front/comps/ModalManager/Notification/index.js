import { motion, useAnimation } from 'framer-motion';
import clsx from 'clsx';
import React, { useEffect } from 'react';
import fp from 'lodash/fp';

import { TransitionsModal } from 'Lib/transitions/modal';
import { actions } from 'Lib/store';
import { useDispatch, useSelector } from 'Components/index';
import { modalTypes } from 'Lib/consts';
import { mainStore } from 'Lib/store/main';

import styles from '../styles.module.scss';


const rightIcon = (
    dp,
    controls,
    // dc
) =>
// const insider = useAnimation();
//
// const [isOpen, setIsOpen] = useState(false);

    ({
        [modalTypes.SuccessNotification]: (
            <div onClick={async () => {
                await controls.start(TransitionsModal.hide);
                dp(mainStore.actions.hideModal({}));
            }}
            >
                X
                {/* <Cross color='wht' /> */}
            </div>
        ),
        // [modalTypes.NotificationWithDesc]: (
        //     <motion.div
        //         animate={insider}
        //         onClick={async () => {
        //             if (isOpen) {
        //                 await dc.start(TransitionsModal.hideDescription);
        //                 await insider.start(TransitionsModal.rotate);
        //                 setIsOpen(false);
        //             } else {
        //                 await dc.start(TransitionsModal.openDescription);
        //                 await insider.start(TransitionsModal.initialRotate);
        //                 setIsOpen(true);
        //             }
        //         dp(main_store.actions.hideModal())
        // }}
        // >
        //     <ArrowDown color='wht' />
        // </motion.div>
        // ),
    });
export const Notification = ({ children }) => {
    const { message, icon, type, background } = useSelector('main.modal');
    const dp = useDispatch();
    const controls = useAnimation();
    const descriptionControls = useAnimation();

    useEffect(() => {
        const asyncControl = async () => {
            await controls.start(TransitionsModal.stable);
            if (modalTypes.SuccessNotification === type) {
                const timer = setTimeout(async () => {
                    await controls.start(TransitionsModal.exit);
                    dp(actions.main.hideModal({}));
                }, 3500);
                return () => clearInterval(timer);
            }
            return fp.noop;
        };
        asyncControl().then(fp.noop);
    }, [controls, dp, type]);

    return (
        <motion.div className={clsx('position-fixed bottom-0 w-100', styles.wrapper)}>
            <div
                className='container-sm'
            >
                <motion.div
                    animate={controls}
                    initial={TransitionsModal.initial}
                    transition={TransitionsModal.transition}
                    className={children && 'rounded sh-lg_down m-3 overflow-hidden'}
                >
                    <motion.div
                        className={clsx(
                            `bg-${background} d-flex align-items-center justify-content-between p-2`,
                            children || 'rounded sh-lg_down m-3',
                        )}
                    >
                        <div>
                            {icon}
                        </div>
                        <div
                            className='w-100 mx-2'
                            color='white'
                        // type='p2sb'
                        >
                            {message}
                        </div>
                        {rightIcon(dp, controls, descriptionControls)[type]}
                    </motion.div>
                    <motion.div animate={descriptionControls}>
                        {children}
                    </motion.div>
                </motion.div>
            </div>
        </motion.div>
    );
};
