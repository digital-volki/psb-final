import React from 'react';
import { AnimateSharedLayout } from 'framer-motion';

import { mainStore } from 'Lib/store/main';
import { modalTypes } from 'Lib/consts';

import { Notification } from './Notification';
import { useSelector } from '../GeneralCtx';
import { Popup } from './Popup';


const comps = {
    [`${modalTypes.SuccessNotification}`]: <Notification />,
    [`${modalTypes.Popup}`]: <Popup />,
};

export const ModalManager = () => {
    const om = useSelector(`${mainStore.namespace}.modal.type`);

    return (
        <AnimateSharedLayout>
            {om && comps[om]}
        </AnimateSharedLayout>
    );
};
