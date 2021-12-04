import React, { useEffect } from 'react';
import type { AppContext, AppProps } from 'next/app';
import { useMutation } from '@apollo/client';
import moment from 'moment';
import App from 'next/app';
import fp from 'lodash/fp';

import { GeneralCtx } from 'Components/GeneralCtx';
import { createSystemApolloClient, initializeApollo } from 'Lib/apollo';
import { fromRawCookie, useCookie } from 'Lib/hooks/useCookie';
import { ModalManager } from 'Components/ModalManager';
import REFRESH_TOKEN from 'Lib/apollo/schemas/system/refreshToken.graphql';
import GET_USER from 'Lib/apollo/schemas/system/getUser.graphql';
import 'styles/global.scss';


moment.locale('ru');

const client = createSystemApolloClient();

interface IApp extends AppProps{
    user: {
        id: string
        first_name: string
        last_name: string
        language: string
        avatar: {
            id: string
        }
    }
    cookie: string
    host: string
}


function MyApp({ Component, pageProps, cookie, host, user }: IApp) {
    const cookies = useCookie(cookie, host);

    const [refresh, { loading }] = useMutation(REFRESH_TOKEN, {
        client,
        onError: () => localStorage.removeItem('refresh_token'),
        onCompleted: data => {
            localStorage.setItem('refresh_token', data.auth_refresh.refresh_token);
            cookies.set('access_token', data.auth_refresh.access_token, {
                maxAge: 60 * 60 * 40,
            });
            window.location.reload();
        },
    });

    useEffect(() => {
        if (!cookies.get('access_token') &&
            localStorage.getItem('refresh_token') &&
            !loading) {
            refresh({
                variables: {
                    t: localStorage.getItem('refresh_token'),
                },
            })
                .then(fp.noop);
        }
    }, [cookies, loading, refresh]);


    return (
        <GeneralCtx
            ext={{ profile: { token: cookies.get('access_token'), me: user } }}
            props={pageProps}
        >
            <ModalManager />
            <Component {...pageProps} />
        </GeneralCtx>
    );
}


MyApp.getInitialProps = async (appContext: AppContext) => {
    const appProps = await App.getInitialProps(appContext);
    const token = fromRawCookie(fp.get('ctx.req.headers.cookie', appContext)).get('access_token');
    const client = initializeApollo(null, token, true);

    try {
        if (!token) { // noinspection ExceptionCaughtLocallyJS
            throw Error('Unauthorized user');
        } else {
            const { data } = await client.query({
                query: GET_USER,
                fetchPolicy: 'network-only',
                errorPolicy: 'ignore',
            });

            return ({
                ...appProps,
                user: fp.get('users_me', data),
                cookie: appContext?.ctx?.req?.headers?.cookie,
                host: appContext?.ctx?.req?.headers?.host?.split(':')[0],
            });
        }
    } catch (e) {
        return {
            ...appProps,
            cookie: appContext?.ctx?.req?.headers?.cookie,
            host: appContext?.ctx?.req?.headers?.host?.split(':')[0],
        };
    }
};

export default MyApp;
