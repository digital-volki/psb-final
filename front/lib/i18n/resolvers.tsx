import React from 'react';

import { useTranslations } from 'Lib/i18n/index';


interface ITranslate {
    name: string
}

// use only in server side (validators).
export const Translate: React.FC<ITranslate> = ({ name }) => {
    const t = useTranslations(null);
    return (
        <>
            {t(name)}
        </>
    );
};
