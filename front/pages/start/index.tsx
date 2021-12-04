import React, { useState } from 'react';
import { NextPage } from 'next';
import clsx from 'clsx';
import Link from 'next/link';

import { I18n, Maybe } from 'Lib/apollo/interfaces';
import { IInput, Input } from 'Components/Input';
import styles from 'styles/pages/auth.module.scss';
import { Button } from 'Components/Button';
import { SelectCard } from 'Components/SelectCard';


export const PasswordField: React.FC<IInput> = props => {
    const [isShow, setIsShow] = useState(false);
    return (
        <Input
            {...props}
            htmlType={isShow ? 'text' : 'password'}
            right={(
                <div
                    onClick={() => setIsShow(!isShow)}
                    className='mx-3'
                >
                    eye
                </div>
            )}
        />
    );
};


const StartIndex: NextPage<{ translations : Maybe<Array<Maybe<I18n>>>}> = () => (
    <div className=''>
        <div className='d-flex'>
            <div className='col-9'>
                <div className={clsx(styles.auth_header, 'd-flex')}>
                    <div className='col-1 ms-5' />
                    <div className='col d-flex align-items-center'>
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img src='/logo.png' alt='logo' />
                    </div>
                    <div className='col d-flex align-items-center justify-content-end pe-2 me-5'>
                        <div className='m-2 fp3m_black'>
                            Уже есть аккаунт?
                        </div>
                        <Link href='/auth'>
                            {/* eslint-disable-next-line @next/next/no-html-link-for-pages */}
                            <a href='/auth'>
                                <Button typoClassNames='fp3sb_white' variant='orng'>
                                    Войти
                                </Button>
                            </a>
                        </Link>
                    </div>
                </div>
                <div className='w-100 h-75 d-flex justify-content-center align-content-center'>
                    <div className='d-flex flex-column align-content-center my-auto' style={{ width: '705px' }}>
                        <div className='fh1 mb-4'>
                            Кем вы являетесь?
                        </div>
                        <SelectCard label='Я сотрудник банка, за мной закреплен курс и наставник' link='reg' />
                        <SelectCard label='Прохожу стажировку в компании' link='reg' />
                        <SelectCard label='Не являюсь стажером или сотрудником' link='reg' />
                    </div>
                </div>
            </div>
            <div className='col'>
                <div className={clsx(styles.auth_img)} />
            </div>
        </div>
    </div>
);

export default StartIndex;
