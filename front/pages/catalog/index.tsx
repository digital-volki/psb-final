import React, { useEffect } from 'react';
import { NextPage } from 'next';
import { useQuery } from '@apollo/client';
import fp from 'lodash/fp';

import { GroupButtons } from 'Components/GroupButtons';
import { I18n, Maybe } from 'Lib/apollo/interfaces';
import { Header } from 'Components/Header';
import { Sidebar } from 'Components/Sidebar';
import { CardCourse } from 'Components/CardCourse';
import { Search } from 'Components/Search';
import GET_COURSES from 'Lib/apollo/schemas/getCourses.graphql';
import { useSelector } from 'Components/GeneralCtx';


const CatalogIndex: NextPage<{ translations : Maybe<Array<Maybe<I18n>>>}> = () => {
    const searchStr = useSelector('main.search');

    const { data: dataCourses, refetch } = useQuery(GET_COURSES, {
        variables: {
            search: searchStr.search,
        },
    });
    const filters = useSelector('main.search');

    useEffect(() => {
        refetch()
            .then(fp.noop);
    }, [filters, refetch]);

    return (
        <>
            <Header>
                <Sidebar catalogEvents>
                    <div className='bg-white w-100 h-100 brdr-3' style={{ padding: '32px' }}>
                        <div className='d-flex justify-content-between' style={{ marginBottom: '32px' }}>
                            <GroupButtons tabs={[{
                                path: '/catalog',
                                name: 'Доступно в банке',
                            },
                            {
                                path: '/main',
                                name: 'Требуется от тебя',
                            },
                            ]}
                            />
                            <div>
                                <Search />
                            </div>
                        </div>
                        {dataCourses ? (
                            dataCourses.courses.map((key: any) => (
                                <CardCourse
                                    igmgCourse='img_3.png'
                                    title={key?.name === 'Правила героев ПСБ' ? 'Карточные продукты ПСБ' : key?.name}
                                    desc={key?.description}
                                    list='32 блока'
                                />
                            ))
                        ) : (
                            <div className='d-flex justify-content-center'>
                                <div className='spinner-grow text-secondary' role='status' />
                            </div>
                        )}
                        {dataCourses ? (
                            dataCourses.projects.map((key: any) => (
                                <CardCourse
                                    igmgCourse='img_4.png'
                                    title={key?.name === 'Разработка программного решения для онбординга новых ИТ-специалистов банка' ? 'Кредитные продукты' : key?.name}
                                    desc={key?.description}
                                    list='31 блок'
                                />
                            ))
                        ) : ''}
                        {dataCourses ? (
                            dataCourses.courses.map((key: any) => (
                                key.elements.map((key: any) => (
                                    key.item.elements.map((key: any) => (
                                        <CardCourse
                                            igmgCourse='img_5.png'
                                            title={key?.item.name === 'Как поступать' ? 'Ипотека для сотрудников' : key?.item.name}
                                            desc={key.item.description}
                                            list='10 блоков'
                                            chart='Легкий уровень'
                                        />
                                    ))
                                ))
                            ))
                        ) : ''}
                    </div>
                </Sidebar>
            </Header>
        </>
    );
};

export default CatalogIndex;
