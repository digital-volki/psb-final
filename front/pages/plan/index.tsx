import React, { useState } from 'react';
import { NextPage } from 'next';
import clsx from 'clsx';

import { I18n, Maybe } from 'Lib/apollo/interfaces';
import { Header } from 'Components/Header';
import { Sidebar } from 'Components/Sidebar';

// @ts-ignore
import { Odin, UserPip, Wow } from '../../comps/icons';


const PlanIndex: NextPage<{ translations : Maybe<Array<Maybe<I18n>>>}> = () => {
    const [ch1, setCh1] = useState(0);
    const [ch2, setCh2] = useState(0);
    const [ch3, setCh3] = useState(0);
    const [ch4, setCh4] = useState(0);
    const [ch5, setCh5] = useState(0);
    const [ch6, setCh6] = useState(0);
    const [ch7, setCh7] = useState(0);
    return (
        <>
            <Header>
                <Sidebar planAdap>
                    <div className='bg-white mb-3 w-100 h-100 brdr-3' style={{ padding: '24px', border: '1px solid rgba(0, 0, 0, 0.08)', maxHeight: '110px' }}>
                        <div className='position-relative top-0 h-100'>
                            <div className='' style={{ maxWidth: '916px', top: -25 }}>
                                <div
                                    className=''
                                    style={{
                                        height: '30px',
                                        width: 110 + ch1 + ch2 + ch3 + ch4 + ch5 + ch6 + ch7,
                                        background: 'linear-gradient(270deg, rgba(232, 78, 37, 0.72) 0%, rgba(250, 70, 22, 0.1) 73.13%, rgba(250, 70, 22, 0) 100%)',
                                        boxSizing: 'border-box',
                                    }}
                                />
                                <div className='d-flex position-absolute'>
                                    <div className='d-flex justify-content-between'>
                                        <div
                                            className='pt-2 position-absolute d-flex justify-content-end'
                                            style={{
                                                backgroundColor: '#F57301',
                                                height: '2px',
                                                width: 110 + ch1 + ch2 + ch3 + ch4 + ch5 + ch6 + ch7,
                                                top: '100',
                                            }}
                                        >
                                            <div className='mt-3'>
                                                <UserPip />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='position-absolute' style={{ maxWidth: '916px', top: 25 }}>
                                <Wow />
                            </div>
                        </div>
                    </div>
                    <div className='bg-white w-100 h-100 brdr-3' style={{ padding: '32px', border: '1px solid rgba(0, 0, 0, 0.08)' }}>
                        <div className='d-flex align-items-center mb-3'>
                            <div
                                className='d-flex justify-content-center align-items-center'
                                style={{
                                    backgroundColor: 'rgba(234, 86, 22, 0.1)',
                                    width: '38px',
                                    height: '38px',
                                    borderRadius: '50%',
                                }}
                            >
                                <Odin />
                            </div>
                            <div className='fp3m_black ms-2'>
                                Выход на рабочее место
                            </div>
                        </div>
                        <div>
                            <p
                                className='d-flex w-100 align-items-center'
                                style={{
                                    border: '1px solid #B5C4D7',
                                    boxSizing: 'border-box',
                                    borderRadius: '6px',
                                    padding: '20px',
                                }}
                            >
                                <input
                                    type='checkbox'
                                    id='c1'
                                    name='cb'
                                    className='d-flex align-items-center pointer'
                                    onClick={() => {
                                        setCh1(ch1 + 114.5);
                                        if (ch1 === 114.5)
                                            setCh1(ch1 - 114.5);
                                    }}
                                />
                                <label
                                    htmlFor='c1'
                                    className='d-flex align-items-center justify-content-center'
                                />
                                <div
                                    className={clsx('ms-2 text-center d-flex align-items-center')}
                                >
                                    Оформиться на работу
                                </div>
                            </p>
                        </div>
                        <div>
                            <p
                                className='d-flex w-100 align-items-center'
                                style={{
                                    border: '1px solid #B5C4D7',
                                    boxSizing: 'border-box',
                                    borderRadius: '6px',
                                    padding: '20px',
                                }}
                            >
                                <input
                                    type='checkbox'
                                    id='c2'
                                    name='cb'
                                    className='d-flex align-items-center'
                                    onClick={() => {
                                        setCh2(ch2 + 114.5);
                                        if (ch2 === 114.5)
                                            setCh2(ch2 - 114.5);
                                    }}
                                />
                                <label
                                    htmlFor='c2'
                                    className='d-flex align-items-center justify-content-center'
                                />
                                <div
                                    className={clsx('ms-2 text-center d-flex align-items-center')}
                                >
                                    Получить постоянный пропуск
                                </div>
                            </p>
                        </div>
                        <div>
                            <p
                                className='d-flex w-100 align-items-center'
                                style={{
                                    border: '1px solid #B5C4D7',
                                    boxSizing: 'border-box',
                                    borderRadius: '6px',
                                    padding: '20px',
                                }}
                            >
                                <input
                                    type='checkbox'
                                    id='c7'
                                    name='cb'
                                    className='d-flex align-items-center'
                                    onClick={() => {
                                        setCh3(ch3 + 114.5);
                                        if (ch3 === 114.5)
                                            setCh3(ch3 - 114.5);
                                    }}
                                />
                                <label
                                    htmlFor='c7'
                                    className='d-flex align-items-center justify-content-center'
                                />
                                <div
                                    className={clsx('ms-2 text-center d-flex align-items-center')}
                                >
                                    Получить набор новичка
                                </div>
                            </p>
                        </div>
                        <div>
                            <p
                                className='d-flex w-100 align-items-center'
                                style={{
                                    border: '1px solid #B5C4D7',
                                    boxSizing: 'border-box',
                                    borderRadius: '6px',
                                    padding: '20px',
                                }}
                            >
                                <input
                                    type='checkbox'
                                    id='c3'
                                    name='cb'
                                    className='d-flex align-items-center'
                                    onClick={() => {
                                        setCh4(ch4 + 114.5);
                                        if (ch4 === 114.5)
                                            setCh4(ch4 - 114.5);
                                    }}
                                />
                                <label
                                    htmlFor='c3'
                                    className='d-flex align-items-center justify-content-center'
                                />
                                <div
                                    className={clsx('ms-2 text-center d-flex align-items-center')}
                                >
                                    Встреча с руководителем
                                </div>
                            </p>
                        </div>
                        <div>
                            <p
                                className='d-flex w-100 align-items-center'
                                style={{
                                    border: '1px solid #B5C4D7',
                                    boxSizing: 'border-box',
                                    borderRadius: '6px',
                                    padding: '20px',
                                }}
                            >
                                <input
                                    type='checkbox'
                                    id='c4'
                                    name='cb'
                                    className='d-flex align-items-center'
                                    onClick={() => {
                                        setCh5(ch5 + 114.5);
                                        if (ch5 === 114.5)
                                            setCh5(ch5 - 114.5);
                                    }}
                                />
                                <label
                                    htmlFor='c4'
                                    className='d-flex align-items-center justify-content-center'
                                />
                                <div
                                    className={clsx('ms-2 text-center d-flex align-items-center')}
                                >
                                    Дополнить профиль на портале: контакты, фото и пару слов о себе
                                </div>
                            </p>
                        </div>
                        <div>
                            <p
                                className='d-flex w-100 align-items-center'
                                style={{
                                    border: '1px solid #B5C4D7',
                                    boxSizing: 'border-box',
                                    borderRadius: '6px',
                                    padding: '20px',
                                }}
                            >
                                <input
                                    type='checkbox'
                                    id='c5'
                                    name='cb'
                                    className='d-flex align-items-center'
                                    onClick={() => {
                                        setCh7(ch7 + 114.5);
                                        if (ch7 === 114.5)
                                            setCh7(ch7 - 114.5);
                                    }}
                                />
                                <label
                                    htmlFor='c5'
                                    className='d-flex align-items-center justify-content-center'
                                />
                                <div
                                    className={clsx('ms-2 text-center d-flex align-items-center')}
                                >
                                    Получить постоянный пропуск
                                </div>
                            </p>
                        </div>
                        <div>
                            <p
                                className='d-flex w-100 align-items-center'
                                style={{
                                    border: '1px solid #B5C4D7',
                                    boxSizing: 'border-box',
                                    borderRadius: '6px',
                                    padding: '20px',
                                }}
                            >
                                <input
                                    type='checkbox'
                                    id='c6'
                                    name='cb'
                                    className='d-flex align-items-center'
                                    onClick={() => {
                                        setCh6(ch6 + 114.5);
                                        if (ch6 === 114.5)
                                            setCh6(ch6 - 114.5);
                                    }}
                                />
                                <label
                                    htmlFor='c6'
                                    className='d-flex align-items-center justify-content-center'
                                />
                                <div
                                    className={clsx('ms-2 text-center d-flex align-items-center')}
                                >
                                    Ознакомиться с разделом базы знаний «Полезная информация»
                                </div>
                            </p>
                        </div>
                    </div>
                </Sidebar>
            </Header>
        </>
    );
};
export default PlanIndex;
