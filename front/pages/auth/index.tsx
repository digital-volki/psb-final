import React, { useState } from 'react';
import { NextPage } from 'next';
import * as yup from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useMutation } from '@apollo/client';
import fp from 'lodash/fp';
import clsx from 'clsx';
import Link from 'next/link';

import { I18n, Maybe } from 'Lib/apollo/interfaces';
import { IInput, Input } from 'Components/Input';
import { useCookie } from 'Lib/hooks/useCookie';
import { useSelector } from 'Components/GeneralCtx';
import LOGIN from 'lib/apollo/schemas/system/auth.graphql';
import styles from 'styles/pages/auth.module.scss';
import { Button } from 'Components/Button';
import { ArrowLeft } from 'Components/icons';


type formValues = {
    email: string
    pass: string
    apollo: string
}

const validatorSchema = yup.object({
    email: yup.string().email('email.type').required('required'),
    pass: yup.string().required('required').min(4, 'password.min'),
});

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


const AuthIndex: NextPage<{ translations : Maybe<Array<Maybe<I18n>>>}> = () => {
    const cookie = useCookie();

    const {
        control,
        handleSubmit,
        setError,
    } = useForm<formValues>({
        resolver: yupResolver(validatorSchema),
        defaultValues: {
            email: '',
            pass: '',
        },
    });


    const client = useSelector('main.client');
    const [login] = useMutation(LOGIN, {
        client,
        onCompleted: async data => {
            await cookie.set('access_token', data.auth_login.access_token, {
                maxAge: 60 * 60 * 71,
            });
            await localStorage.setItem('refresh_token', data.auth_login.refresh_token);
            window.location.href = '/main';
        },
        onError: error => {
            if (fp.get('networkError.statusCode', error)) {
                setError('apollo', {
                    type: 'network',
                    message: 'error.network',
                });
            } else {
                setError('apollo', {
                    type: 'network',
                    message: 'error.validation',
                });
            }
        },
    });
    const authHandler = async (data: any) => {
        await login({
            variables: {
                ...data,
            },
        });
    };
    // <Input control={control} name='pass' placeholder='Введите пароль'>
    //     Пароль
    // </Input>
    return (
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
                                Еще не зарегистрированы?
                            </div>
                            <Link href='/reg'>
                                {/* eslint-disable-next-line @next/next/no-html-link-for-pages */}
                                <a href='/reg'>
                                    <Button typoClassNames='fp3sb_white' variant='orng'>
                                        Зарегистрироваться
                                    </Button>
                                </a>
                            </Link>
                        </div>
                    </div>
                    <div className={clsx(styles.auth_card_column, 'd-flex ms-5')}>
                        <div className='col d-flex justify-content-center align-items-center ps-5'>
                            <div className={clsx(styles.auth_card, 'p-5 ms-5')}>
                                <div className='d-flex flex-column mx-auto'>
                                    <div className='d-flex justify-content-center fh1'>
                                        Войти в кабинет
                                    </div>
                                    <div className='d-flex justify-content-center fp3m_gray'>
                                        Обязательные поля помечены *
                                    </div>
                                </div>
                                <form onSubmit={handleSubmit(authHandler)}>
                                    <div className='mt-4 pt-1'>
                                        <Input control={control} name='email' placeholder='Введите почту'>
                                            Почта*
                                        </Input>
                                    </div>
                                    <div className='mt-4 pt-1'>
                                        <Input control={control} name='pass' placeholder='Введите пароль'>
                                            Пароль*
                                        </Input>
                                    </div>
                                    <div className='d-flex flex-column'>
                                        <div>
                                            <Button typoClassNames='fp3sb_white' variant='orng' htmlType='submit' classNames=' mt-4 w-100'>
                                                Войти
                                            </Button>
                                        </div>
                                        <div>
                                            <div className='d-flex justify-content-center mt-3 fp3sb_orange'>
                                                <ArrowLeft />
                                                Забыли пароль?
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='col'>
                    <div className={clsx(styles.auth_img)} />
                </div>
            </div>
        </div>
    );
};

export default AuthIndex;
