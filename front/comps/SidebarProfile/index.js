import Link from 'next/link';
import clsx from 'clsx';
import React from 'react';

import { UserMenu } from '../icons';


export const SidebarProfile = ({
    catalogEvents = false,
    children,
}) => (

    <div className='d-flex justify-content-center' style={{ marginTop: '40px' }}>
        <div className='d-flex  w-100' style={{ maxWidth: '1264px' }}>
            <div className='col w-100 d-flex flex-column' style={{ maxWidth: '264px', marginRight: '40px', maxHeight: '288px' }}>
                <Link href='/catalog'>
                    <a href='/catalog'>
                        <div className={clsx('d-flex w-100 my-auto', `${(catalogEvents ? 'bg_active_sidebar' : '')}`)} style={{ height: '48px' }}>
                            <div className='my-auto ms-3 me-2 pointer'>
                                <UserMenu />
                            </div>
                            <div className={clsx('w-100 my-auto pointer', `${(catalogEvents ? 'fsidebar_active' : 'fsidebar')}`)}>
                                Найстройка профиля
                            </div>
                        </div>
                    </a>
                </Link>
            </div>
            <div className='col'>
                {children}
            </div>
        </div>
    </div>

);
