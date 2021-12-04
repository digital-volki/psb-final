import fp from 'lodash/fp';


export type ActionCreator<TPayload = any> =
// eslint-disable-next-line no-unused-vars
    ($payload: TPayload) => { type: string, $payload: TPayload };

export const create_action = <TPayload>(type: string) => Object.assign(
    ($payload: TPayload) => {
        console.log(type, $payload);
        return ({ type, $payload });
    },
    {
        toString: () => type,
    },
);

export const create_action_namespace = (namespace: string) => <TPayload = any>(type: string): ActionCreator<TPayload> => create_action<TPayload>(`${namespace}/${type}`);


const unfoldReducer: any = fp.pipe(
    fp.mapValues(s => fp.isFunction(s) ? s : unfoldReducer(s)),
);
