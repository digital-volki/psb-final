import { authStore } from './auth/index';
import { profileStore } from './profile/index';
import { mainStore } from './main/index';


export const actions = {
    [`${mainStore.namespace}`]: mainStore.actions,
    [`${profileStore.namespace}`]: profileStore.actions,
    [`${authStore.namespace}`]: authStore.actions,
};

export const init_state = {
    [`${mainStore.namespace}`]: mainStore.init_state,
    [`${profileStore.namespace}`]: profileStore.init_state,
    [`${authStore.namespace}`]: authStore.init_state,
};


type IAction = {
    type: string
    $payload: any
}

type IReducer = {
    // eslint-disable-next-line no-unused-vars
    [k: string]: (...args: any) => any
}

export const reducer = (state: any, action: IAction) => {
    const namespace = action.type.split('/')[0];
    const r: IReducer = {
        ...mainStore.reducer,
        ...profileStore.reducer,
        ...authStore.reducer,
    };
    return {
        ...state,
        [`${namespace}`]: r[`${action.type}`](state[namespace], action.$payload),
    };
};
