import React, { useEffect } from 'react';
import { NextPage } from 'next';
import { useQuery } from '@apollo/client';
import fp from 'lodash/fp';

import { I18n, Maybe } from 'Lib/apollo/interfaces';
import { Header } from 'Components/Header';
import { Sidebar } from 'Components/Sidebar';
import { CardCourse } from 'Components/CardCourse';
import { GroupButtons } from 'Components/GroupButtons';
import { Search } from 'Components/Search';
import GET_COURSES from 'Lib/apollo/schemas/getCourses.graphql';
import { useSelector } from 'Components/GeneralCtx';


const MainIndex: NextPage<{ translations : Maybe<Array<Maybe<I18n>>>}> = () => {
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
                <Sidebar materials>
                    <div className='bg-white w-100 h-100 brdr-3' style={{ padding: '32px' }}>
                        <div className='d-flex justify-content-between' style={{ marginBottom: '32px' }}>
                            <GroupButtons tabs={[{
                                path: '/main',
                                name: 'Назначеные',
                            },
                            {
                                path: '/profile',
                                name: 'Завершенные',
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
                                    key={key.id}
                                    link={`/testing?id=${key.id}`}
                                    igmgCourse='img_1.png'
                                    title={key?.name}
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
                                    link='/article/cefd0765-7784-4bd7-afd8-af30b8fbcf71'
                                    igmgCourse='img_2.png'
                                    title={key?.name}
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
                                            igmgCourse='img.png'
                                            title={key.item.name}
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
export default MainIndex;
