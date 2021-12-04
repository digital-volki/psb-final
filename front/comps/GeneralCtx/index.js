import React, { useContext, useReducer, useMemo } from 'react';
import fp from 'lodash/fp';
import { ApolloProvider } from '@apollo/client';
import { AnimatePresence } from 'framer-motion';

import { createSystemApolloClient, useApollo } from 'Lib/apollo';
import { init_state, reducer } from 'Lib/store';


const GenCtx = React.createContext(undefined);

export const useSelector = path => fp.get(path, useContext(GenCtx).state);

export const useDispatch = () => useContext(GenCtx).dp;

export const useData = () => useContext(GenCtx);

const clientCreator = token => createSystemApolloClient(token);


export const GeneralCtx = ({
    children,
    props,
    ext,
}) => {
    const client = useApollo(props, ext.profile.token);

    const systemClient = useMemo(() =>
        clientCreator(ext.profile.token),
    [ext]);

    const withSystemClient = fp.merge(ext, { main: { client: systemClient } });

    const [state, dp] = useReducer(reducer, fp.merge(init_state, withSystemClient));


    return (
        <GenCtx.Provider value={{
            state,
            dp,
        }}
        >
            <AnimatePresence
                exitBeforeEnter
                initial
            >
                <ApolloProvider client={client}>
                    {children}
                </ApolloProvider>
            </AnimatePresence>
        </GenCtx.Provider>
    );
};
