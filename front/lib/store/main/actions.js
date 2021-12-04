import { create_action_namespace } from '../utils';


const main = create_action_namespace('main');


export const actions = {
    setFilters: main('SET_SEARCH'),
    showModal: main('SHOW_MODAL'),
    hideModal: main('HIDE_MODAL'),
};
