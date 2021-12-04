import React from 'react';
import { NextPage } from 'next';
import { useQuery } from '@apollo/client';
import clsx from 'clsx';
import { useForm } from 'react-hook-form';


import { useSelector } from 'Components/GeneralCtx';
import USERS_ME from 'Lib/apollo/schemas/system/usersMe.graphql';
import { I18n, Maybe } from 'Lib/apollo/interfaces';
import { Header } from 'Components/Header';
import { Input } from 'Components/Input';
import { SidebarProfile } from 'Components/SidebarProfile';
import { Contacts } from 'Components/icons';


// eslint-disable-next-line import/no-absolute-path
import styles from '/styles/pages/auth.module.scss';


type formValues = {
    email: string
    apollo: string
    last_name: string
    first_name: string
    password: string
    role: string
}

const ProfileIndex: NextPage<{ translations : Maybe<Array<Maybe<I18n>>>}> = () => {
    const client = useSelector('main.client');
    const base = process.env.NEXT_PUBLIC_BASE_API;
    const { data: dataUser } = useQuery(USERS_ME, {
        client,
    });
    const {
        control,
    } = useForm<formValues>({
        defaultValues: {
            last_name: '',
            password: '',
            first_name: '',
            email: '',
            role: '',
        },
    });
    return (
        <>
            <Header>
                <SidebarProfile catalogEvents>
                    <div
                        className='bg-white d-flex mb-3 w-100 h-100 brdr-3'
                        style={{
                            padding: '32px',
                            border: '1px solid rgba(0, 0, 0, 0.08)',
                            maxHeight: '204px',
                        }}
                    >
                        <div className='me-3'>
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img
                                src={`${base}/assets/${dataUser?.users_me?.avatar?.id}`}
                                alt=''
                                style={{
                                    height: '140px',
                                    width: '140px',
                                }}
                            />
                        </div>
                        <div className='col w-100'>
                            <div>
                                <div className={clsx(styles.qwe2)}>
                                    {`${dataUser?.users_me?.first_name} ${dataUser?.users_me?.last_name}`}
                                </div>
                                <div className={clsx(styles.qwe3)}>
                                    {dataUser?.users_me?.role.name}
                                </div>
                            </div>
                            <div className={clsx(styles.qwe4, 'd-flex h-100 align-items-end')}>
                                Группа внутренних коммуникаций и развития корпоративной культуры /
                                Департамент управления персоналом /
                                Подразделения под Барыбина О.Г.
                            </div>
                        </div>
                        <div className='col d-flex justify-content-end' style={{ maxWidth: '180px' }}>
                            <div>
                                <Contacts />
                            </div>
                            <div className={clsx(styles.qwe, 'ms-1')} style={{ marginTop: '2px' }}>
                                Контакты
                            </div>
                        </div>
                    </div>
                    <div
                        className='bg-white d-flex flex-column mb-3 w-100 h-100 brdr-3'
                        style={{
                            padding: '32px',
                            border: '1px solid rgba(0, 0, 0, 0.08)',
                        }}
                    >

                        <Input
                            containerClassname=''
                            type='description'
                            name='first_name'
                            control={control}
                            placeholder='Расскажите немного о себе'
                        >
                            О себе
                        </Input>
                        <Input
                            containerClassname='mt-2'
                            type='description'
                            name='first_name'
                            control={control}
                            placeholder='Расскажите у ваших увлечениях'
                            rows={5}
                        >
                            Увлечения
                        </Input>
                        <Input
                            containerClassname='mt-2'
                            type='description'
                            name='first_name'
                            control={control}
                            placeholder='Расскажите о своих целях'
                            rows={5}
                        >
                            Цели
                        </Input>
                    </div>
                </SidebarProfile>
            </Header>
        </>
    );
};
export default ProfileIndex;
