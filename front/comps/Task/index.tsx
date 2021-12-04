import React, { useState } from 'react';
import ReactMarkdown from 'react-markdown';
import clsx from 'clsx';
import { useForm } from 'react-hook-form';
import { useMutation } from '@apollo/client';

import { Button } from 'Components/Button';
import { useDispatch } from 'Components/GeneralCtx';
import SEND_ANSWER from 'lib/apollo/schemas/testing/sendAnswer.graphql';
import { mainStore } from 'Lib/store/main';
import { modalTypes } from 'Lib/consts';
import { Input } from 'Components/Input';

import s from './s.module.scss';


export const Radio: React.FC<any> = ({
    flag,
    onClick,
    watcher,
}) => (
    <div
        className={clsx('py-3 px-2 mb-4 border brdr-2', flag === watcher ? 'border-orng text-orng' : '')}
        onClick={() => onClick(flag)}
    >
        {flag}
    </div>
);

export const Task: React.FC<any> = ({ item }) => {
    const [radio, setRadio] = useState(null);

    const {
        handleSubmit,
        control,
    } = useForm({
        defaultValues: {
            answer: null,
        },
    });
    const dp = useDispatch();

    const [send] = useMutation(SEND_ANSWER, {
        onCompleted: () => {
            dp(mainStore.actions.showModal({
                type: modalTypes.SuccessNotification,
                message: 'Ответ сохранён',
                background: 'orng',
            }));
        },
    });

    const submitter = async (obj: any) => {
        await send({
            variables: {
                task: item.id,
                answer: item.type === 'radio'
                    ? JSON.stringify([{ variant: radio }])
                    : item.type === 'input' ? JSON.stringify([{ variant: obj.answer }]) : JSON.stringify([]),
            },
        });
    };


    return (
        <div className='px-5 py-3 bg-white brdr-4'>
            <ReactMarkdown
                className={clsx('overflow-hidden', s.md)}
            >
                {item.description}
            </ReactMarkdown>
            <form onSubmit={handleSubmit(submitter)}>
                {item.type === 'radio' ? (
                    <>
                        {item.checkboxes.map(({ value }: any) => (
                            <Radio
                                key={value}
                                flag={value}
                                onClick={setRadio}
                                watcher={radio}
                            />
                        ))}
                    </>
                ) : item.type === 'input' ? (
                    <Input name='answer' control={control} />
                ) : ''}
                <div
                    className='d-flex justify-content-end'
                >
                    <Button
                        classNames='text-white py-2'
                        variant='orng'
                        htmlType='submit'
                    >
                        Отправить ответ
                    </Button>
                </div>
            </form>
        </div>
    );
};
