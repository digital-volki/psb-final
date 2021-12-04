import React, { useState } from 'react';
import NextLink from 'next/link';

import { Button } from 'Components/Button';
import { urls } from 'Lib/consts';
import { Header } from 'Components/Header';


const data = [{
    name: 'Управление проектом',
    categories: [{
        name: 'Исполняет',
        color: 'orng',
        rows: [
            'Определение этапов работ и сроков реализации ИТ-составляющей,' +
            'постановка задач, контроль сроков исполнения задач. Контроль соблюдения ' +
            'сроков согласования со стороны ДИТ (разработка, сопровождение) и ДИБ (в части приемки системы). ' +
            'Эскалация рисков руководителю проектов.',
            'Определение плана проекта, расчет и обоснование бюджета проекта, обеспечение достижения целей проекта. ' +
            'Формирование проектной команды.',
            'Формирование отчетности, рассылка статус-отчетов участникам проекта, фиксация рисков, донесение ' +
            'рисков до участников проекта, доведение планов спринтов бизнес-подразделениям.',
            'Контроль наличия необходимого бюджета на статьях затрат для произведения закупочных процедур.',
            'Определение плана проекта в части ИТ-составляющей, расчет и обоснование бюджета проекта,' +
            'определение необходимых ресурсов ДИТ (разработка, сопровождение) и ДИБ (в части приемки системы).',
        ],
    },
    {
        name: 'Несет ответственность',
        color: 'success',
        rows: [
            'Определение этапов работ и сроков реализации ИТ-составляющей,',
        ],
    },
    {
        name: 'Консультирует до исполнения',
        color: 'danger',
        rows: [
            'Описание ещё не готово',
        ],
    },
    {
        name: 'Оповещается после исполнения',
        color: 'warning',
        rows: [
            'Описание ещё не готово',
        ],
    }],
}];


const RelsNew = () => {
    const [view, setView] = useState([0, 0]);
    return (
        <>
            <Header>
                <div className='container-md mt-3'>
                    <nav aria-label='breadcrumb'>
                        <ol className='breadcrumb'>
                            <li className='breadcrumb-item'>
                                <NextLink href='/article'>
                                    <a href='/article'>Статья про проект</a>
                                </NextLink>
                            </li>
                            <li className='breadcrumb-item active' aria-current='page'>Карта коммуникации</li>
                        </ol>
                    </nav>

                    <div className='bg-white brdr-4 p-3 d-flex'>
                        {[{
                            avatar: '1b68ee84-8f13-4af5-a59d-a57e858845f1',
                            name: 'Аникин Никита',
                            role: 'Руководитель проекта',
                        }, {
                            avatar: '1b68ee84-8f13-4af5-a59d-a57e858845f1',
                            name: 'Мария Костюнина',
                            role: 'Руководитель проекта',
                        }].map((i, key) => (
                            <div
                                className='d-flex p-2 border brdr-3 mx-2'
                                key={String(key)}
                            >
                                <div>
                                    {/* eslint-disable-next-line @next/next/no-img-element */}
                                    <img alt='logo' src={`${urls.assets}${i.avatar}?width=50`} className='brdr-3 p-1 overflow-hidden' />
                                </div>
                                <div
                                    className='d-flex flex-column justify-content-between mx-2'
                                >
                                    <div>
                                        {i.name}
                                    </div>
                                    <div>
                                        {i.role}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className='my-3 brdr-4 p-3 bg-white px-5'>
                        {data.map((i, idx) => (
                            <Button
                                key={String(idx)}
                                onClick={() => setView([idx, 0])}
                                classNames='text-white'
                                variant='orng'
                            >
                                {i.name}
                            </Button>
                        ))}
                        <div className='row py-4 align-items-center'>
                            <div className='col-5'>
                                {data[view[0]].categories.map(({ name, color }, index) => (
                                    <div
                                        key={String(index)}
                                        onClick={() => setView([view[0], index])}
                                        className={`border-5 border-start m-4 border-${color} brdr-2 cursor`}
                                    >
                                        <div className='border border-start-0 p-3  brdr-1'>
                                            {name}
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <div className='col-5'>
                                {data[view[0]].categories[view[1]].rows.map(name => (
                                    <div
                                        key={String(name)}
                                        className={`border-5 border-start m-4 border-${data[view[0]].categories[view[1]].color} brdr-2`}
                                    >
                                        <div className='border border-start-0 p-3  brdr-1'>
                                            {name}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </Header>
        </>
    );
};

export default RelsNew;
