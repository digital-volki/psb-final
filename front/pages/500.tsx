import React from 'react';
import { useRouter } from 'next/router';
import fp from 'lodash/fp';


const errors = {
    401: 'Пользователь не авторизован',
    default: 'Неизвестная ошибка',
};

export default function Custom500() {
    const { query: { code } } = useRouter();

    return (
        <h1 className='m-5'>
            {fp.getOr('Неизвестная ошибка', fp.isString(code) ? code : 'default', errors)}
        </h1>
    );
}
