import React, { useState } from 'react';
import { NextPage } from 'next';
import * as yup from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useMutation } from '@apollo/client';
import clsx from 'clsx';
import { useRouter } from 'next/router';
import Link from 'next/link';
import fp from 'lodash/fp';

import REG from 'lib/apollo/schemas/public/registration.graphql';
import { I18n, Maybe } from 'Lib/apollo/interfaces';
import { IInput, Input } from 'Components/Input';
import { useSelector } from 'Components/GeneralCtx';
import styles from 'styles/pages/reg.module.scss';
import { Button } from 'Components/Button';
import { ArrowLeft } from 'Components/icons';

import { Select } from '../../comps/Select';


type formValues = {
    email: string
    apollo: string
    last_name: string
    first_name: string
    password: string
    role: string
}

const validatorSchema = yup.object({
    email: yup.string().email('email.type').required('Обязательно'),
    password: yup.string().required('Обязательно').min(8, 'password.min'),
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


const RegIndex: NextPage<{ translations : Maybe<Array<Maybe<I18n>>>}> = () => {
    const { back } = useRouter();
    const {
        control,
        handleSubmit,
        setError,
    } = useForm<formValues>({
        resolver: yupResolver(validatorSchema),
        defaultValues: {
            last_name: '',
            password: '',
            first_name: '',
            email: '',
            role: '',
        },
    });

    const client = useSelector('main.client');
    const [reg] = useMutation(REG, {
        client,
        onCompleted: async () => {
            window.location.href = '/auth';
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
    const regHandler = async (data: any) => {
        await reg({
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
                    <div className={clsx(styles.auth_card_column, 'd-flex mt-4')}>
                        <div className='col d-flex justify-content-center align-items-center ps-5'>
                            <div className={clsx(styles.auth_card, 'p-5 ms-5')}>
                                <div className='d-flex flex-column mx-auto mb-2'>
                                    <div className='d-flex justify-content-center fh1'>
                                        Регистрация
                                    </div>
                                    <div className='d-flex justify-content-center fp3m_gray'>
                                        Обязательные поля помечены *
                                    </div>
                                </div>
                                <form onSubmit={handleSubmit(regHandler)}>
                                    <div className='d-flex'>
                                        <Input
                                            containerClassname='col me-2'
                                            type='text'
                                            name='first_name'
                                            control={control}
                                            placeholder='Введите имя'
                                        >
                                            Имя
                                        </Input>
                                        <Input
                                            containerClassname='col ms-2'
                                            type='text'
                                            name='last_name'
                                            control={control}
                                            placeholder='Введите фамилию'
                                        >
                                            Фамилия
                                        </Input>
                                    </div>
                                    <div className=' pt-1'>
                                        <Input control={control} name='email' type='text' placeholder='Введите почту'>
                                            Почта*
                                        </Input>
                                    </div>
                                    <div className='pt-1'>
                                        <Input control={control} name='password' type='text' placeholder='Введите пароль'>
                                            Пароль*
                                        </Input>
                                    </div>
                                    <Select
                                        className='mt-4'
                                        control={control}
                                        name='role'
                                        label='Ваша должность'
                                        list={new Map([['ANOTHER', 'Выберите должность...'], ['2f6026b1-83b0-4f09-898f-d5a2928af144', 'Стажер'], ['TEACHER', 'Наставник'], ['OTHER', 'Пользователь']])}
                                    />
                                    <div className='d-flex flex-column'>
                                        <div>
                                            <Button typoClassNames='fp3sb_white' variant='orng' htmlType='submit' classNames=' mt-4 w-100'>
                                                Зарегистрироваться
                                            </Button>
                                        </div>
                                        <div>
                                            <div
                                                className='d-flex justify-content-center mt-3 fp3sb_orange'
                                                style={{ cursor: 'pointer' }}
                                                onClick={() => {
                                                    back();
                                                }}
                                            >
                                                <ArrowLeft />
                                                Вернуться назад
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

export default RegIndex;
