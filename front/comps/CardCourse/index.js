import React from 'react';
import clsx from 'clsx';
import NextLink from 'next/link';

import { ArrowRightSmallOrng, Chart, Clock, ListJurn } from '../icons';
import styles from './styles.module.scss';


export const CardCourse = ({
    link = '/',
    igmgCourse = 'https://icdn.lenta.ru/images/2021/03/10/14/20210310142047815/square_1280_webp_d2c5c86c5490d4e0fd4a25b44a40db97.webp',
    desc = 'Курс позволяет освоить все теоретические разделы предмета - экономика, право, политика, человек и общество, социальные отношения.',
    title = 'Базовый синтаксис в Python',
    clock = '0% пройдено',
    list = '31 блока',
    chart = 'Средний уровень',
}) => (
    <NextLink href={`${link}`}>
        <div className={clsx(styles.card)}>
            <div className='d-flex'>
                <div className='col' style={{ maxWidth: '127px', maxHeight: '127px', marginRight: '24px' }}>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={igmgCourse} alt='logo' style={{ height: '100%', width: '100%', maxWidth: '127px', maxHeight: '127px', borderRadius: '4px' }} />
                </div>
                <div className='col w-100 d-flex flex-column align-content-between' style={{ maxWidth: '480px' }}>
                    <div className='d-flex flex-column'>
                        <div className={clsx(styles.card_title, 'mb-2')}>
                            {title}
                        </div>
                        {/* eslint-disable-next-line react/no-danger */}
                        <div className={clsx(styles.card_desc, 'mb-0')} dangerouslySetInnerHTML={{ __html: desc }} />
                    </div>
                    <div className={clsx(styles.card_button, 'd-flex mt-auto pointer')}>
                        Продолжить обучение
                        <div className='my-auto ms-1'>
                            <ArrowRightSmallOrng />
                        </div>
                    </div>
                </div>
                <div className='col w-100 d-flex flex-column justify-content-between ms-auto' style={{ maxWidth: '200px', maxHeight: '127px' }}>
                    <div className='d-flex'>
                        <div className='me-2'>
                            <Clock />
                        </div>
                        <div className='card_stats my-auto'>
                            {clock}
                        </div>
                    </div>
                    <div className='d-flex'>
                        <div className='me-2'>
                            <ListJurn />
                        </div>
                        <div className='card_stats my-auto'>
                            {list}
                        </div>
                    </div>
                    <div className='d-flex'>
                        <div className='me-2'>
                            <Chart />
                        </div>
                        <div className='card_stats my-auto'>
                            {chart}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </NextLink>

);
