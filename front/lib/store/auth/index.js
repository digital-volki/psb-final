import { actions } from './actions';
import { reducer, init_state } from './reducer';


export const authStore = {
    namespace: 'auth',
    reducer,
    init_state,
    actions,
};
