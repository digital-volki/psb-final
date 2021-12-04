import React, { useEffect } from 'react';
import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import fp from 'lodash/fp';

import { useCookie } from 'Lib/hooks/useCookie';


const Home: NextPage = () => {
    const { push } = useRouter();
    const cookie = useCookie();
    // main
    useEffect(() => {
        if (cookie.get('access_token'))
            push('/main').then(fp.noop);
        else
            push('/reg').then(fp.noop);
    }, [cookie, push]);
    return (
        <>
            Redirect
        </>
    );
};

export default Home;


