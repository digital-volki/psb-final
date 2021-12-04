import Link from 'next/link';
import clsx from 'clsx';
import React from 'react';

import {
    CatalogEvents,
    Events,
    BoxGame,
    MyMaterials,
    Notific, Qqq,
} from '../icons';


export const Sidebar = ({
    planAdap = false,
    materials = false,
    events = false,
    myCampany = false,
    catalogEvents = false,
    notific = false,
    children,
}) => (

    <div className='d-flex justify-content-center' style={{ marginTop: '40px' }}>
        <div className='d-flex  w-100' style={{ maxWidth: '1264px' }}>
            <div className='col w-100 d-flex flex-column' style={{ maxWidth: '264px', marginRight: '40px', maxHeight: '288px' }}>
                <Link href='/plan'>
                    <a href='/plan'>
                        <div className={clsx('d-flex w-100 my-auto', `${(planAdap ? 'bg_active_sidebar' : '')}`)} style={{ height: '48px' }}>
                            <div className='my-auto ms-3 me-2 pointer'>
                                <Qqq color={planAdap ? '#EA5616' : '#808080'} />
                            </div>
                            <div className={clsx('w-100 my-auto pointer', `${(planAdap ? 'fsidebar_active' : 'fsidebar')}`)}>
                                План адаптации
                            </div>
                        </div>
                    </a>
                </Link>
                <Link href='/main'>
                    <a href='/main'>
                        <div className={clsx('d-flex w-100 my-auto', `${(materials ? 'bg_active_sidebar' : '')}`)} style={{ height: '48px' }}>
                            <div className='my-auto ms-3 me-2 pointer'>
                                <MyMaterials color={materials ? '#EA5616' : '#808080'} />
                            </div>
                            <div className={clsx('w-100 my-auto pointer', `${(materials ? 'fsidebar_active' : 'fsidebar')}`)}>
                                Мои материалы
                            </div>
                        </div>
                    </a>
                </Link>
                <div className={clsx('d-flex w-100 my-auto', `${(events ? 'bg_active_sidebar' : '')}`)} style={{ height: '48px' }}>
                    <div className='my-auto ms-3 me-2 pointer'>
                        <Events color={events ? '#EA5616' : '#808080'} />
                    </div>
                    <div className={clsx('w-100 my-auto pointer', `${(events ? 'fsidebar_active' : 'fsidebar')}`)}>
                        Мероприятия
                    </div>
                </div>
                <Link href='/game'>
                    <a href='/game'>
                        <div className={clsx('d-flex w-100 my-auto', `${(myCampany ? 'bg_active_sidebar' : '')}`)} style={{ height: '48px' }}>
                            <div className='my-auto ms-3 me-2 pointer'>
                                <BoxGame color={myCampany ? '#EA5616' : '#808080'} />
                            </div>
                            <div className={clsx('w-100 my-auto pointer', `${(myCampany ? 'fsidebar_active' : 'fsidebar')}`)}>
                                Игра “Моя команда”
                            </div>
                        </div>
                    </a>
                </Link>
                <Link href='/catalog'>
                    <a href='/catalog'>
                        <div className={clsx('d-flex w-100 my-auto', `${(catalogEvents ? 'bg_active_sidebar' : '')}`)} style={{ height: '48px' }}>
                            <div className='my-auto ms-3 me-2 pointer'>
                                <CatalogEvents color={catalogEvents ? '#EA5616' : '#808080'} />
                            </div>
                            <div className={clsx('w-100 my-auto pointer', `${(catalogEvents ? 'fsidebar_active' : 'fsidebar')}`)}>
                                База знаний
                            </div>
                        </div>
                    </a>
                </Link>
                <div className={clsx('d-flex w-100 my-auto', `${(notific ? 'bg_active_sidebar' : '')}`)} style={{ height: '48px' }}>
                    <div className='my-auto ms-3 me-2 pointer'>
                        <Notific color={notific ? '#EA5616' : '#808080'} />
                    </div>
                    <div className={clsx('w-100 my-auto pointer', `${(notific ? 'fsidebar_active' : 'fsidebar')}`)}>
                        Оповещения
                    </div>
                </div>
            </div>
            <div className='col'>
                {children}
            </div>
        </div>
    </div>

);
