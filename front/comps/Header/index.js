import React from 'react';
import { useQuery } from '@apollo/client';
import { useRouter } from 'next/router';
import clsx from 'clsx';
import Link from 'next/link';

import { useCookie } from 'Lib/hooks/useCookie';
import USERS_ME from 'Lib/apollo/schemas/system/usersMe.graphql';
import { useSelector } from 'Components/GeneralCtx';
import { Dropdown } from 'Components/Dropdown';
import styles from 'styles/pages/auth.module.scss';
import { Button } from 'Components/Button';

import { Down, ExitIcon, UserMenu } from '../icons';
import { WheelFortune } from 'Components/WheelFortune';


export const Header = ({
    children,
}) => {
    const client = useSelector('main.client');
    const base = process.env.NEXT_PUBLIC_BASE_API;
    const cookie = useCookie();
    const { push } = useRouter();
    const { data: dataUser } = useQuery(USERS_ME, {
        client,
    });
    return (
        <div>
            <div className='d-flex justify-content-center bg-white' style={{ height: '76px' }}>
                <div className='d-flex justify-content-between w-100' style={{ maxWidth: '1265px' }}>
                    <div className='d-flex justify-content-between w-100 align-items-center'>
                        <div className='my-auto pointer' onClick={() => push('/main')}>
                            <img src='/logo.png' alt='logo' />
                        </div>
                        <div className='d-flex ms-auto justify-content-end'>
                            <Dropdown
                                color='warning'
                                variant='white'
                                actions={[
                                    {
                                        icon: <UserMenu />,
                                        name: <div className={clsx(styles.qwe5)}>Профиль</div>,
                                        callback: () => push('/profile'),
                                    },
                                    {
                                        icon: <ExitIcon color='orng' />,
                                        name: <div className={clsx(styles.qwe6)}>Выйти</div>,
                                        callback: () => {
                                            cookie.remove('access_token');
                                            window.location.href = '/auth';
                                        },
                                    },
                                ]}
                            >
                                {' '}
                                {dataUser?.users_me ? (
                                    <div className='d-flex my-auto'>
                                        <div className='me-4'>
                                            <WheelFortune />
                                        </div>
                                        <div className='my-auto me-3'>
                                            {dataUser?.users_me?.avatar?.id
                                                ? (
                                                    <>
                                                        <img src={`${base}/assets/${dataUser?.users_me?.avatar.id}`} alt='avatar' style={{ maxWidth: '34px', maxHeight: '34px' }} />
                                                    </>
                                                ) : ''}
                                        </div>
                                        <div className='my-auto d-flex align-content-center me-2'>
                                            {`${dataUser?.users_me?.first_name} ${dataUser?.users_me?.last_name}`}
                                        </div>
                                        <div className='my-auto'>
                                            <Down />
                                        </div>
                                    </div>
                                ) : (
                                    <Link href='/auth'>
                                        {/* eslint-disable-next-line @next/next/no-html-link-for-pages */}
                                        <a href='/auth'>
                                            <Button typoClassNames='fp3sb_white' variant='orng'>
                                                Войти
                                            </Button>
                                        </a>
                                    </Link>
                                )}
                            </Dropdown>
                        </div>
                    </div>
                </div>
            </div>
            {children}
        </div>
    );
};
