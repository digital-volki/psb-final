import React, { useState } from 'react';
import { NextPage } from 'next';
// import ReactMarkdown from 'react-markdown';
import fp from 'lodash/fp';
import { useRouter } from 'next/router';

import { initializeApollo } from 'Lib/apollo';
import GET_TASK from 'lib/apollo/schemas/testing/task.graphql';
import { Get_TaskQuery } from 'Lib/apollo/interfaces';
import { SideMenu } from 'Components/SideMenu';
import { Task } from 'Components/Task';
import { fromRawCookie } from 'Lib/hooks/useCookie';
import { Header } from 'Components/Header';


const Testing: NextPage<{ structure: Get_TaskQuery }> = ({
    structure,
}) => {
    const { query } = useRouter();
    const [idx, setIdx] = useState<string>(`${query.idx}`);
    console.log('io', idx);

    const ids = idx.split(':');

    const [f, s] = ids.length > 1 ? ids : `0${fp.get('elements[0].collection', structure) === 'partition' ? '0' : ''}`;
    let result = `elements[${f}]`;
    if (s)
        result = `${result}.item.elements[${s}]`;

    return (
        <Header>
            <div className='bg-lght w-100 vh-100 m-0 p-0 d-flex justify-content-center'>
                <div className='container-xl row mt-3'>
                    <div className='col-3'>
                        <SideMenu
                            setter={(i: { key: string }) => setIdx(i.key)}
                            elements={fp.getOr([], 'elements', structure)}
                        />
                    </div>
                    <div
                        className='col-8'
                    >
                        {fp.get(`${result}.collection`, structure) === 'tasks'
                            ? (
                                <>
                                    <Task
                                        item={fp.get(`${result}.item`, structure)}
                                    />
                                </>
                            ) : ''}
                        {fp.get(`${result}.collection`, structure) === 'articles'
                            ? (
                                // eslint-disable-next-line react/no-danger
                                <div dangerouslySetInnerHTML={{ __html: fp.get(`${result}.item.content`, structure) }} />
                            ) : ''}
                    </div>
                </div>
            </div>
        </Header>
    );
};

export const getServerSideProps = async (ctx: any) => {
    const token = fromRawCookie(fp.get('req.headers.cookie', ctx)).get('access_token');
    const client = initializeApollo(null, token);
    const { id } = ctx.query;
    const { data: { structure } } = await client.query({
        query: GET_TASK,
        variables: {
            id,
        },
    });
    return ({
        props: {
            structure,
        },
    });
};

export default Testing;
