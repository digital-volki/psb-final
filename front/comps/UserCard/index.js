import React from 'react';
import clsx from 'clsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { Qqq, Www } from '../icons';
import styles from './styles.module.scss';


export const UserCard = ({
    name = 'Мероприятие',
    role = 'Базовое мероприятие',
}) => (


    <div className={clsx(styles.card, 'w-100')}>
        <div className='d-flex w-100'>
            <div className='d-flex justify-content-center align-items-center' style={{ height: '44px', width: '44px', maxWidth: '44px', maxHeight: '44px', borderRadius: '50%', backgroundColor: '#F0F4F9' }}>
                <div className='d-flex justify-content-center align-items-center' style={{ height: '44px', width: '44px', maxWidth: '44px', maxHeight: '44px', borderRadius: '50%', backgroundColor: '#F0F4F9' }}>
                    <FontAwesomeIcon icon='user' />
                </div>
            </div>
            <div className='ms-2 w-100 d-flex flex-column align-items-center justify-content-between'>
                <div className='d-flex w-100 justify-content-between align-items-center'>
                    <div className={clsx(styles.fheader3, 'w-100 d-flex align-items-center justify-content-start text-nowrap')}>
                        {name}
                    </div>
                    <div className={clsx(styles.fheaders1, 'd-flex align-items-center justify-content-end text-nowrap')}>
                        <div>
                            <Qqq />
                        </div>
                        <div>
                            <Www />
                        </div>
                    </div>
                </div>
                <div className={clsx(styles.w8, 'mt-1 w-100 d-flex align-items-end justify-content-start')}>
                    {role}

                </div>
            </div>

        </div>
    </div>

);
