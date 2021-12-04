import { useRouter } from 'next/router';
import React from 'react';
import clsx from 'clsx';
import { useQuery } from '@apollo/client';
import moment from 'moment/moment';

import { Sidebar } from 'Components/Sidebar';
import { Header } from 'Components/Header';
import { ArrowRight2 } from 'Components/icons';

// eslint-disable-next-line import/no-absolute-path
import styles from '/styles/pages/article.module.scss';

import { EventCard } from 'Components/EventCard';
import GET_COURSE_BY_ID from 'Lib/apollo/schemas/getProjectById.graphql';
import { UserCard } from 'Components/UserCard';


const Article = () => {
    const { query: { id } } = useRouter();
    const { data: dataCourse } = useQuery(GET_COURSE_BY_ID, {
        variables: {
            id,
        },
    });

    return (
        <Header>
            <Sidebar materials>
                <div className='d-flex' style={{ marginBottom: '20px' }}>
                    <div className={clsx(styles.fheader, 'me-2 d-flex align-items-center')}>
                        Мои материалы
                    </div>
                    <div className='d-flex align-items-center'>
                        <ArrowRight2 />
                    </div>
                    <div className={clsx(styles.fheader2, 'd-flex align-items-center ms-1')}>
                        Статья про проект
                    </div>
                </div>
                <div className='bg-white w-100 brdr-3' style={{ padding: '29px 32px' }}>
                    <div className={clsx(styles.scrum_or_agile_title, 'mb-1')}>
                        Scrum
                    </div>
                    <div className={clsx(styles.t1)}>
                        {dataCourse?.projects_by_id?.name}
                    </div>
                </div>
                <div className='bg-white w-100 brdr-3' style={{ padding: '29px 32px', marginTop: '24px' }}>
                    <div className={clsx(styles.t2, 'mb-1')}>
                        Цель
                    </div>
                    <div className={clsx(styles.fheader3)}>
                        {dataCourse?.projects_by_id?.projects_meta[0]?.purpose}
                    </div>
                </div>
                {dataCourse?.projects_by_id?.projects_meta[0]?.events[0] ? (
                    <div className='bg-white w-100 brdr-3' style={{ padding: '29px 32px', marginTop: '24px' }}>
                        <div
                            className={clsx(styles.t2, 'mb-1')}
                            style={{
                                marginBottom: '10px',
                            }}
                        >
                            Мероприятия
                        </div>
                        <div>
                            {dataCourse?.projects_by_id?.projects_meta[0]?.events?.map(key => (
                                <>
                                    <EventCard
                                        icon
                                        iconName={key.icon}
                                        title={key.name}
                                        desc={key.description}
                                        time={key.periodic}
                                    />
                                </>
                            ))}
                        </div>
                    </div>
                ) : ''}
                <div className='bg-white w-100 brdr-3' style={{ padding: '29px 32px', marginTop: '24px' }}>
                    <div
                        className={clsx(styles.t2, 'mb-1')}
                        style={{
                            marginBottom: '10px',
                        }}
                    >
                        План работ и контрольные точки
                    </div>
                    <div>
                        {dataCourse?.projects_by_id
                            ?.projects_meta[0]?.planning?.map((key, index) => (
                                <>
                                    <EventCard numberPlan={index + 1} iconName={key.icon} title={key.name} desc={key.description} time={moment(key.expire).add(10, 'days').calendar()} />
                                </>
                            ))}
                    </div>
                </div>
                {dataCourse?.projects_by_id?.result ? (
                    <div className='bg-white w-100 brdr-3' style={{ padding: '29px 32px', marginTop: '24px' }}>
                        <div className={clsx(styles.t2, 'mb-1')}>
                            Результаты проекта
                        </div>
                        <div className={clsx(styles.fheader3)}>
                            {dataCourse?.projects_by_id?.result}
                        </div>
                    </div>
                ) : ''}

                <div className='bg-white w-100 brdr-3' style={{ padding: '29px 32px', marginTop: '24px' }}>
                    <div className={clsx(styles.t2, 'mb-1')}>
                        Команда проекта
                    </div>
                    <div className={clsx(styles.fheader3)}>
                        {dataCourse?.projects_by_id?.project_staff?.map(key => (
                            <UserCard name={`${key.user?.first_name} ${key.user?.last_name}`} role={key.role?.name} />
                        ))}
                    </div>
                </div>
            </Sidebar>
        </Header>
    );
};

export default Article;


