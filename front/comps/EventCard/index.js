import React from 'react';
import clsx from 'clsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './styles.module.scss';


export const EventCard = ({
    igmgCourse = 'https://icdn.lenta.ru/images/2021/03/10/14/20210310142047815/square_1280_webp_d2c5c86c5490d4e0fd4a25b44a40db97.webp',
    icon = false,
    iconName = 'coffee',
    title = 'Мероприятие',
    desc = 'Базовое мероприятие',
    time = '',
    numberPlan = false,
}) => (


    <div className={clsx(styles.card, 'w-100')}>

        <div className='d-flex w-100'>
            <div className='me-2' style={{ height: '100%', width: '100%', maxWidth: '44px', maxHeight: '44px' }}>
                {numberPlan ? (
                    <div className='d-flex justify-content-center align-items-center' style={{ height: '44px', width: '44px', maxWidth: '44px', maxHeight: '44px', borderRadius: '50%', backgroundColor: '#F0F4F9' }}>
                        {numberPlan}
                    </div>
                ) : (
                    <>
                        { icon ? (
                            <div className='d-flex justify-content-center align-items-center' style={{ height: '44px', width: '44px', maxWidth: '44px', maxHeight: '44px', borderRadius: '50%', backgroundColor: '#F0F4F9' }}>
                                <FontAwesomeIcon icon={iconName} />
                            </div>
                        ) : (<img src={igmgCourse} alt='logo' style={{ height: '100%', width: '100%', maxWidth: '44px', maxHeight: '44px', borderRadius: '50%' }} />)}
                    </>
                )}
            </div>
            <div className='w-100 d-flex flex-column align-items-center justify-content-between'>
                <div className='d-flex w-100 justify-content-between align-items-center'>
                    <div className={clsx(styles.fheader3, 'w-100 d-flex align-items-center justify-content-start text-nowrap')}>
                        {title}
                    </div>
                    <div className={clsx(styles.fheaders1, 'd-flex align-items-center justify-content-end text-nowrap')}>
                        {time}
                    </div>
                </div>
                <div className={clsx(styles.w8, 'mt-1 w-100 d-flex align-items-end justify-content-start')}>
                    {desc}

                </div>
            </div>

        </div>
    </div>

);
