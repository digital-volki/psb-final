import React, { useEffect } from 'react';
import { DocumentNode, useLazyQuery } from '@apollo/client';
import fp from 'lodash/fp';
import { LazyQueryHookOptions } from '@apollo/client/react/types/types';

import { useSelector } from 'Components/GeneralCtx';


interface IListing {
    query: DocumentNode
    params?: any
    rootKey: string
    Component: React.FC
    fetch?: boolean
    notFoundMessage?: string
    isSystem?: boolean
    Wrap?: React.FC
    prevent?: boolean
    queryProps?: LazyQueryHookOptions,
}

export const QueryListing: React.FC<IListing> = ({
    query,
    params,
    rootKey = 'collection',
    fetch = false,
    prevent = false,
    notFoundMessage,
    isSystem = false,
    Component,
    Wrap = ({ children }) => <>{children}</>,
    queryProps,
}) => {
    const client = useSelector('main.client');

    const [prefetch, {
        data,
        loading,
        error,
        refetch,
    }] = useLazyQuery(query, {
        client: isSystem ? client : undefined,
        variables: {
            ...params,
        },
        ...queryProps,
    });

    useEffect(() => {
        if (!prevent) {
            prefetch({
                ...params,
            });
        }
    }, [params, prefetch, prevent]);

    useEffect(() => {
        if (fetch && !loading) {
            if (refetch) {
                refetch({
                    ...params,
                })
                    .then(fp.noop);
            }
        }
    }, [refetch, fetch, params, loading]);


    return (
        <Wrap>
            {loading || prevent
                ? (
                    <div className='d-flex justify-content-center align-items-center mt-5 pt-5'>
                        Spinner
                    </div>
                )
                : error
                    ? JSON.stringify(error)
                    : fp.getOr(0, `${rootKey}.length`, data) !== 0
                        ? fp.get(rootKey, data)
                            .map((item: any) => <Component key={item.id} {...item} />)
                        : fp.isEmpty(notFoundMessage) ? (
                            <div
                                // type='header_24_bold'
                                className='d-flex justify-content-center align-items-center mt-5 pt-5'
                            >
                                Не найдено элементов
                            </div>
                        ) : notFoundMessage}
        </Wrap>
    );
};
