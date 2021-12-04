import React, { useState } from 'react';
import { NextPage } from 'next';
import clsx from 'clsx';

import { I18n, Maybe } from 'Lib/apollo/interfaces';
import { Header } from 'Components/Header';
import { Sidebar } from 'Components/Sidebar';
import {
    BoxGameGamePage,
    Dom,
    MnogoPeople,
    Qiz,
    Task2,
    Task1,
    Task3,
    Designer,
    Front,
    Back,
    Marketolog,
    Pm,
    Transl,
    Tester,
    Gamedesigner,
    ThreeDHud,
    BackOff,
    Collega, ZadanieClock, ZadanieReady, Wallet, Like, FireOn, FireOff,
} from 'Components/icons';

import styles from '../../comps/UserCard/styles.module.scss';


const MainIndex: NextPage<{ translations : Maybe<Array<Maybe<I18n>>>}> = () => {
    const [start, setStart] = useState(false);
    const [q1, setQ1] = useState(0);
    const [q2, setQ2] = useState(0);
    const [q3, setQ3] = useState(0);

    return (
        <>
            <Header>
                <Sidebar myCampany>
                    <div className={clsx(styles.card, 'w-100 brdr-2')}>
                        <div className='d-flex w-100'>
                            <div className='d-flex justify-content-center align-items-center' style={{ height: '44px', width: '44px', maxWidth: '44px', maxHeight: '44px', borderRadius: '50%', backgroundColor: '#F0F4F9' }}>
                                <div className='d-flex justify-content-center align-items-center' style={{ height: '44px', width: '44px', maxWidth: '44px', maxHeight: '44px', borderRadius: '50%', backgroundColor: '#F0F4F9' }}>
                                    <Dom />
                                </div>
                            </div>
                            <div className='ms-3 w-100 d-flex flex-column align-items-center justify-content-between'>
                                <div className='d-flex w-100 justify-content-between align-items-center'>
                                    <div className={clsx(styles.fheader3, 'w-100 d-flex flex-column text-nowrap')}>
                                        {/* eslint-disable-next-line react/no-unescaped-entities */}
                                        Студия "Сокол"
                                        <div className={clsx(styles.w8, 'mt-1 w-100 d-flex align-items-end justify-content-start')}>
                                            Корпорация
                                        </div>
                                    </div>
                                    <div className={clsx(styles.qwe8, 'd-flex align-items-center justify-content-end text-nowrap')}>
                                        <div>
                                            100 000 $
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className={clsx(styles.card, 'w-100 brdr-2')}>
                        <div className='d-flex'>
                            <div className='d-flex'>
                                <div
                                    className='d-flex fsidebar_active align-items-center'
                                    style={{
                                        background: 'rgba(234, 86, 22, 0.1)',
                                        borderRadius: '4px',
                                        padding: '14px',
                                    }}
                                >
                                    <BoxGameGamePage />
                                    {' '}
                                    Игровой процесс
                                </div>
                            </div>
                            <div className='d-flex ms-3'>
                                <div
                                    className='d-flex fsidebar_active align-items-center'
                                    style={{
                                        background: '#F0F4F9',
                                        borderRadius: '4px',
                                        padding: '14px',
                                        color: '#A2B5CD',
                                    }}
                                >
                                    <MnogoPeople />
                                    {' '}
                                    Хук хантер
                                </div>
                            </div>
                            <div className='d-flex ms-3'>
                                <div
                                    className='d-flex fsidebar_active align-items-center'
                                    style={{
                                        background: '#F0F4F9',
                                        borderRadius: '4px',
                                        padding: '14px',
                                        color: '#A2B5CD',
                                    }}
                                >
                                    <Qiz />
                                    {' '}
                                    Как играть?
                                </div>
                            </div>
                        </div>
                        <div className='mt-3'>
                            {!start ? (
                                <>
                                    <div className={clsx(styles.desc_tast_text)}>
                                        Выберите проект, который хотите выполниить. Учтите, что за день можно выполнить только один проект, также после выполнения проектов специалистам начисляется очки выгорания. Если вам не хватает специалистов для выполнения, можете нанять их в “Хук хантере”
                                    </div>
                                    <div className='d-flex mt-3'>
                                        <div className={clsx(styles.card, 'w-100 brdr-2')} style={{ maxWidth: '288px', maxHeight: '320px', padding: '24px' }}>
                                            <div className='d-flex w-100'>
                                                <div className='d-flex justify-content-center align-items-center' style={{ height: '44px', width: '44px', maxWidth: '44px', maxHeight: '44px', borderRadius: '50%', backgroundColor: '#F0F4F9' }}>
                                                    <Task1 />
                                                </div>
                                                <div className='ms-3 w-100 d-flex flex-column'>
                                                    <div className='d-flex w-100 justify-content-between align-items-center'>
                                                        <div className={clsx(styles.fheader3, 'w-100 d-flex flex-column text-nowrap')}>
                                                            {/* eslint-disable-next-line react/no-unescaped-entities */}
                                                            Сверстать лендинг
                                                            <div className={clsx(styles.w8, 'mt-1 w-100 d-flex align-items-end justify-content-start')}>
                                                                300 $
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className={clsx(styles.w8, 'mt-3 mb-3')}>
                                                Какие спецы необходимы:
                                            </div>
                                            <div>
                                                <div className='d-flex flex-column'>
                                                    <div className='d-flex align-items-center'>
                                                        <Designer />
                                                        <div className='ms-2 text-nowrap'>
                                                            UX/UI дизайнер
                                                        </div>
                                                    </div>
                                                    <div className='mt-3 d-flex align-items-center'>
                                                        <Front />
                                                        <div className='ms-2 text-nowrap'>
                                                            Frontend разработчик
                                                        </div>
                                                    </div>
                                                    <div className='mt-3 d-flex align-items-center'>
                                                        <Back />
                                                        <div className='ms-2 text-nowrap'>
                                                            Backend разработчик
                                                        </div>
                                                    </div>

                                                </div>
                                            </div>
                                            <div
                                                className={clsx(styles.asd1, 'mt-3 text-white d-flex justify-content-center align-items-center pointer')}
                                                style={{
                                                    height: '41px',
                                                    background: '#EA5616',
                                                    borderRadius: '4px',
                                                }}
                                                onClick={() => {
                                                    setStart(true);
                                                }}
                                            >
                                                Выбрать проект
                                            </div>
                                        </div>
                                        <div className={clsx(styles.card, 'ms-3 w-100 brdr-2')} style={{ maxWidth: '288px', padding: '24px', maxHeight: '425px' }}>
                                            <div className='d-flex w-100'>
                                                <div className='d-flex justify-content-center align-items-center' style={{ height: '44px', width: '44px', maxWidth: '44px', maxHeight: '44px', borderRadius: '50%', backgroundColor: '#F0F4F9' }}>
                                                    <Task2 />
                                                </div>
                                                <div className='ms-3 w-100 d-flex flex-column align-items-center justify-content-between'>
                                                    <div className='d-flex w-100 justify-content-between align-items-center'>
                                                        <div className={clsx(styles.fheader3, 'w-100 d-flex flex-column text-nowrap')}>
                                                            {/* eslint-disable-next-line react/no-unescaped-entities */}
                                                            Android приложение
                                                            <div className={clsx(styles.w8, 'mt-1 w-100 d-flex align-items-end justify-content-start')}>
                                                                1000 $
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                            </div>
                                            <div className={clsx(styles.w8, 'mt-3 mb-3')}>
                                                Какие спецы необходимы:
                                            </div>
                                            <div>
                                                <div className='d-flex flex-column'>
                                                    <div className='d-flex align-items-center'>
                                                        <Designer />
                                                        <div className='ms-2 text-nowrap'>
                                                            UX/UI дизайнер
                                                        </div>
                                                    </div>
                                                    <div className='mt-3 d-flex align-items-center'>
                                                        <Front />
                                                        <div className='ms-2'>
                                                            Frontend разработчик(2)
                                                        </div>
                                                    </div>
                                                    <div className='mt-3 d-flex align-items-center'>
                                                        <Back />
                                                        <div className='ms-2 text-nowrap'>
                                                            Backend разработчик
                                                        </div>
                                                    </div>
                                                    <div className='mt-3 d-flex align-items-center'>
                                                        <Marketolog />
                                                        <div className='ms-2 text-nowrap'>
                                                            Маркетолог
                                                        </div>
                                                    </div>
                                                    <div className='mt-3 d-flex align-items-center'>
                                                        <Pm />
                                                        <div className='ms-2 text-nowrap'>
                                                            Project manager
                                                        </div>
                                                    </div>

                                                </div>
                                            </div>
                                            <div
                                                className={clsx(styles.asd2, 'mt-3 d-flex justify-content-center align-items-center ')}
                                                style={{
                                                    height: '41px',
                                                    background: '#F0F4F9',
                                                    borderRadius: '4px',
                                                    color: '#A2B5CD',
                                                }}
                                            >
                                                Выбрать проект
                                            </div>
                                        </div>
                                        <div className={clsx(styles.card, 'ms-3 w-100 brdr-2')} style={{ maxWidth: '288px', padding: '24px', maxHeight: '520px' }}>
                                            <div className='d-flex w-100'>
                                                <div className='d-flex justify-content-center align-items-center' style={{ height: '44px', width: '44px', maxWidth: '44px', maxHeight: '44px', borderRadius: '50%', backgroundColor: '#F0F4F9' }}>
                                                    <Task3 />
                                                </div>
                                                <div className='ms-3 w-100 d-flex flex-column align-items-center justify-content-between'>
                                                    <div className='d-flex w-100 justify-content-between align-items-center'>
                                                        <div className={clsx(styles.fheader3, 'w-100 d-flex flex-column text-nowrap')}>
                                                            {/* eslint-disable-next-line react/no-unescaped-entities */}
                                                            Разработка игры
                                                            <div className={clsx(styles.w8, 'mt-1 w-100 d-flex align-items-end justify-content-start')}>
                                                                300 $
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                            </div>
                                            <div className={clsx(styles.w8, 'mt-3 mb-3')}>
                                                Какие спецы необходимы:
                                            </div>
                                            <div>
                                                <div className='d-flex flex-column'>
                                                    <div className='d-flex align-items-center'>
                                                        <Gamedesigner />
                                                        <div className='ms-2 text-nowrap'>
                                                            Геймдизайнер
                                                        </div>
                                                    </div>
                                                    <div className='mt-3 d-flex align-items-center'>
                                                        <ThreeDHud />
                                                        <div className='ms-2 text-nowrap'>
                                                            3D художник
                                                        </div>
                                                    </div>

                                                    <div className='mt-3 d-flex align-items-center'>
                                                        <BackOff />
                                                        <div className='ms-2'>
                                                            Backend разработчик(2)
                                                        </div>
                                                    </div>
                                                    <div className='mt-3 d-flex align-items-center'>
                                                        <Tester />
                                                        <div className='ms-2 text-nowrap'>
                                                            Тестеровщик(2)
                                                        </div>
                                                    </div>
                                                    <div className='mt-3 d-flex align-items-center'>
                                                        <Marketolog />
                                                        <div className='ms-2 text-nowrap'>
                                                            Маркетолог
                                                        </div>
                                                    </div>
                                                    <div className='mt-3 d-flex align-items-center'>
                                                        <Pm />
                                                        <div className='ms-2 text-nowrap'>
                                                            Project manager
                                                        </div>
                                                    </div>
                                                    <div className='mt-3 d-flex align-items-center'>
                                                        <Transl />
                                                        <div className='ms-2 text-nowrap'>
                                                            Переводчик
                                                        </div>
                                                    </div>

                                                </div>
                                            </div>
                                            <div
                                                className={clsx(styles.asd2, 'mt-3 d-flex justify-content-center align-items-center ')}
                                                style={{
                                                    height: '41px',
                                                    background: '#F0F4F9',
                                                    borderRadius: '4px',
                                                    color: '#A2B5CD',
                                                }}
                                            >
                                                Выбрать проект
                                            </div>
                                        </div>
                                    </div>
                                </>
                            ) : (
                                <>
                                    { ((q1 + q2 + q3) !== 3) ? (
                                        <>
                                            <div className={clsx(styles.desc_tast_text)}>
                                                Примите решения по предотвращению конфликтных и трудозатратных действий в команде.
                                            </div>
                                            <div className='d-flex mt-3'>
                                                <div className={clsx(styles.card, 'w-100 brdr-2 me-3')} style={{ maxWidth: '288px', maxHeight: '320px', padding: '24px' }}>
                                                    { (q1 === 0) ? (
                                                        <>
                                                            <div>
                                                                <Collega />
                                                            </div>
                                                            <div className={clsx(styles.w9, 'mt-2 mb-2')}>
                                                                Назойливый коллега
                                                            </div>
                                                            <div className={clsx(styles.w10, 'mb-3')}>
                                                                Вас и виших коллег, отвлекает один человек, расскажите ли вы об этом scrum-мастеру?
                                                            </div>
                                                            <div className='d-flex'>
                                                                <div
                                                                    className={clsx(styles.asd2, 'mt-3 me-2 w-100 d-flex justify-content-center align-items-center pointer')}
                                                                    style={{
                                                                        height: '41px',
                                                                        background: '#F0F4F9',
                                                                        borderRadius: '4px',
                                                                        color: '#A2B5CD',
                                                                    }}
                                                                    onClick={() => {
                                                                        setQ1(1);
                                                                    }}
                                                                >
                                                                    Нет
                                                                </div>
                                                                <div
                                                                    className={clsx(styles.asd1, 'mt-3 ms-2 w-100 text-white d-flex justify-content-center align-items-center pointer')}
                                                                    style={{
                                                                        height: '41px',
                                                                        background: '#EA5616',
                                                                        borderRadius: '4px',
                                                                    }}
                                                                    onClick={() => {
                                                                        setQ1(1);
                                                                    }}
                                                                >
                                                                    Да
                                                                </div>
                                                            </div>
                                                        </>
                                                    ) : (
                                                        <>
                                                            <div className='d-flex flex-column justify-content-center align-items-center'>
                                                                <ZadanieReady />
                                                                <div className={clsx(styles.w10)}>
                                                                    Решение принято
                                                                </div>
                                                            </div>
                                                        </>
                                                    )}

                                                </div>
                                                <div className={clsx(styles.card, 'w-100 brdr-2')} style={{ maxWidth: '288px', maxHeight: '320px', padding: '24px' }}>
                                                    { (q2 === 0) ? (
                                                        <>
                                                            <div>
                                                                <ZadanieClock />
                                                            </div>
                                                            <div className={clsx(styles.w9, 'mt-2 mb-2')}>
                                                                Внерабочее время
                                                            </div>
                                                            <div className={clsx(styles.w10)}>
                                                                Вы не успеваете закончить таску на работе, как вы поступите? Задержитесь ли на работе?
                                                            </div>
                                                            <div className='d-flex'>
                                                                <div
                                                                    className={clsx(styles.asd2, 'mt-3 me-2 w-100 d-flex justify-content-center align-items-center pointer')}
                                                                    style={{
                                                                        height: '41px',
                                                                        background: '#F0F4F9',
                                                                        borderRadius: '4px',
                                                                        color: '#A2B5CD',
                                                                    }}
                                                                    onClick={() => {
                                                                        setQ2(1);
                                                                    }}
                                                                >
                                                                    Нет
                                                                </div>
                                                                <div
                                                                    className={clsx(styles.asd1, 'mt-3 ms-2 w-100 text-white d-flex justify-content-center align-items-center pointer')}
                                                                    style={{
                                                                        height: '41px',
                                                                        background: '#EA5616',
                                                                        borderRadius: '4px',
                                                                    }}
                                                                    onClick={() => {
                                                                        setQ2(1);
                                                                    }}
                                                                >
                                                                    Да
                                                                </div>
                                                            </div>
                                                        </>
                                                    ) : (
                                                        <>
                                                            <div className='d-flex flex-column justify-content-center align-items-center'>
                                                                <ZadanieReady />
                                                                <div className={clsx(styles.w10)}>
                                                                    Решение принято
                                                                </div>
                                                            </div>
                                                        </>
                                                    )}
                                                </div>
                                                <div className={clsx(styles.card, 'w-100 brdr-2 ms-3')} style={{ maxWidth: '288px', maxHeight: '320px', padding: '24px' }}>
                                                    { (q3 === 0) ? (
                                                        <>
                                                            <div>
                                                                <Collega />
                                                            </div>
                                                            <div className={clsx(styles.w9, 'mt-2 mb-2')}>
                                                                Назойливый коллега
                                                            </div>
                                                            <div className={clsx(styles.w10)}>
                                                                Вас и ваших коллег, отвлекает один человек, расскажите ли вы об этом scrum-мастеру?
                                                            </div>
                                                            <div className='d-flex mt-3'>
                                                                <div
                                                                    className={clsx(styles.asd2, 'mt-3 me-2 w-100 d-flex justify-content-center align-items-center pointer')}
                                                                    style={{
                                                                        height: '41px',
                                                                        background: '#F0F4F9',
                                                                        borderRadius: '4px',
                                                                        color: '#A2B5CD',
                                                                    }}
                                                                    onClick={() => {
                                                                        setQ3(1);
                                                                    }}
                                                                >
                                                                    Нет
                                                                </div>
                                                                <div
                                                                    className={clsx(styles.asd1, 'mt-3 ms-2 w-100 text-white d-flex justify-content-center align-items-center pointer')}
                                                                    style={{
                                                                        height: '41px',
                                                                        background: '#EA5616',
                                                                        borderRadius: '4px',
                                                                    }}
                                                                    onClick={() => {
                                                                        setQ3(1);
                                                                    }}
                                                                >
                                                                    Да
                                                                </div>
                                                            </div>
                                                        </>
                                                    ) : (
                                                        <>
                                                            <div className='d-flex flex-column justify-content-center align-items-center'>
                                                                <ZadanieReady />
                                                                <div className={clsx(styles.w10)}>
                                                                    Решение принято
                                                                </div>
                                                            </div>
                                                        </>
                                                    )}
                                                </div>
                                            </div>
                                        </>
                                    ) : (
                                        <>
                                            <div className='d-flex flex-column'>
                                                <div
                                                    className={clsx(styles.card, 'w-100 brdr-2')}
                                                    style={{
                                                        height: '64px',
                                                        padding: '10px',
                                                    }}
                                                >
                                                    <div className='d-flex w-100'>
                                                        <div className='d-flex justify-content-center align-items-center' style={{ height: '44px', width: '44px', maxWidth: '44px', maxHeight: '44px', borderRadius: '50%', backgroundColor: '#F0F4F9' }}>
                                                            <div className='d-flex justify-content-center align-items-center' style={{ height: '44px', width: '44px', maxWidth: '44px', maxHeight: '44px', borderRadius: '50%', backgroundColor: '#F0F4F9' }}>
                                                                <Wallet />
                                                            </div>
                                                        </div>
                                                        <div className='ms-3 w-100 d-flex flex-column align-items-center justify-content-between'>
                                                            <div className='d-flex w-100 justify-content-between align-items-center'>
                                                                <div className={clsx(styles.fheader3, 'w-100 mt-2 d-flex flex-column text-nowrap ')}>
                                                                    {/* eslint-disable-next-line react/no-unescaped-entities */}
                                                                    Доход Компании
                                                                </div>
                                                                <div className={clsx(styles.qwe8, 'mt-2 d-flex align-items-center justify-content-end text-nowrap')}>
                                                                    <div>
                                                                        + 10 000 $
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>

                                                    </div>
                                                </div>
                                                <div
                                                    className={clsx(styles.card, 'w-100 brdr-2')}
                                                    style={{
                                                        height: '74px',
                                                        padding: '10px',
                                                    }}
                                                >
                                                    <div className='d-flex w-100'>
                                                        <div className='d-flex mt-2 justify-content-center align-items-center' style={{ height: '44px', width: '44px', maxWidth: '44px', maxHeight: '44px', borderRadius: '50%', backgroundColor: '#F0F4F9' }}>
                                                            <div className=' d-flex justify-content-center align-items-center' style={{ height: '44px', width: '44px', maxWidth: '44px', maxHeight: '44px', borderRadius: '50%', backgroundColor: '#F0F4F9' }}>
                                                                <Like />
                                                            </div>
                                                        </div>
                                                        <div className='ms-3 w-100 d-flex flex-column align-items-center justify-content-between'>
                                                            <div className='d-flex w-100 justify-content-between align-items-center'>
                                                                <div className={clsx(styles.fheader3, 'w-100 mt-2 d-flex flex-column text-nowrap ')}>
                                                                    {/* eslint-disable-next-line react/no-unescaped-entities */}
                                                                    Ты все правильно сделал!
                                                                    <div className={clsx(styles.w8, 'mt-1 w-100 d-flex align-items-end justify-content-start')}>
                                                                        Результат - интерактивный прототип адаптации ИТ-специалистов согласован с владельцем процесса.
                                                                    </div>
                                                                </div>
                                                                <div className={clsx(styles.qwe8, 'mt-2 d-flex align-items-center justify-content-end text-nowrap')}>
                                                                    <div>
                                                                        + 400 $
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>

                                                    </div>
                                                </div>
                                                <div
                                                    className={clsx(styles.card, 'w-100 brdr-2')}
                                                    style={{
                                                        height: '64px',
                                                        padding: '10px',
                                                    }}
                                                >
                                                    <div className='d-flex w-100'>
                                                        <div className='d-flex justify-content-center align-items-center' style={{ height: '44px', width: '44px', maxWidth: '44px', maxHeight: '44px', borderRadius: '50%', backgroundColor: '#F0F4F9' }}>
                                                            <div className='d-flex justify-content-center align-items-center' style={{ height: '44px', width: '44px', maxWidth: '44px', maxHeight: '44px', borderRadius: '50%', backgroundColor: '#F0F4F9' }}>
                                                                <img src='/ExampleAvatar.png' style={{ height: '44px', width: '44px', maxWidth: '44px', maxHeight: '44px', borderRadius: '50%', backgroundColor: '#F0F4F9' }} />
                                                            </div>
                                                        </div>
                                                        <div className='ms-3 w-100 d-flex flex-column align-items-center justify-content-between'>
                                                            <div className='d-flex w-100 justify-content-between align-items-center'>
                                                                <div className={clsx(styles.fheader3, 'w-100 mt-2 d-flex flex-column text-nowrap ')}>
                                                                    {/* eslint-disable-next-line react/no-unescaped-entities */}
                                                                    Александр Аникин уволился
                                                                </div>
                                                                <div className={clsx(styles.qwe8, 'mt-2 d-flex align-items-center justify-content-end text-nowrap')}>
                                                                    <div>
                                                                        {' '}
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>

                                                    </div>
                                                </div>
                                                <div
                                                    className={clsx(styles.card, 'w-100 brdr-2')}
                                                    style={{
                                                        height: '64px',
                                                        padding: '10px',
                                                    }}
                                                >
                                                    <div className='d-flex w-100'>
                                                        <div className='d-flex justify-content-center align-items-center' style={{ height: '44px', width: '44px', maxWidth: '44px', maxHeight: '44px', borderRadius: '50%', backgroundColor: '#F0F4F9' }}>
                                                            <div className='d-flex justify-content-center align-items-center' style={{ height: '44px', width: '44px', maxWidth: '44px', maxHeight: '44px', borderRadius: '50%', backgroundColor: '#F0F4F9' }}>
                                                                <img src='/ExampleAvatar.png' style={{ height: '44px', width: '44px', maxWidth: '44px', maxHeight: '44px', borderRadius: '50%', backgroundColor: '#F0F4F9' }} />
                                                            </div>
                                                        </div>
                                                        <div className='ms-3 w-100 d-flex flex-column align-items-center justify-content-between'>
                                                            <div className='d-flex w-100 justify-content-between align-items-center'>
                                                                <div className={clsx(styles.fheader3, 'w-100 mt-2 d-flex flex-column text-nowrap ')}>
                                                                    {/* eslint-disable-next-line react/no-unescaped-entities */}
                                                                    У Александра Аникина увеличилось выгорание
                                                                </div>
                                                                <div className={clsx(styles.qwe8, 'mt-2 d-flex align-items-center justify-content-end text-nowrap')}>
                                                                    <div className='me-2'>
                                                                        <FireOn />
                                                                    </div>
                                                                    <div className='me-2'>
                                                                        <FireOn />
                                                                    </div>
                                                                    <FireOff />
                                                                </div>
                                                            </div>
                                                        </div>

                                                    </div>
                                                </div>
                                            </div>
                                        </>
                                    )}
                                </>
                            )}
                        </div>
                    </div>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src='/Group%201617.svg' alt='table' />
                </Sidebar>
            </Header>
        </>
    );
};
export default MainIndex;
