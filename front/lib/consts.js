import { create_action_namespace } from 'Lib/store/utils';


export const colors = {
    white: '#FFFFFF',
};


const notification = create_action_namespace('notification');
const modal = create_action_namespace('modal');

export const modalTypes = {
    BottomFilter: modal('BottomFilter').toString(),
    SuccessNotification: notification('SuccessNotification').toString(),
    Popup: notification('Popup').toString(),
};

const base = process.env.NEXT_PUBLIC_BASE_API;

export const urls = {
    base: `${base}/`,
    gql: `${base}/graphql/`,
    system: `${base}/graphql/system/`,
    assets: `${base}/assets/`,
    rest: `${process.env.NEXT_PUBLIC_NET_API}/`,
};
