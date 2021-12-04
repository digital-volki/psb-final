import { actions } from './actions';
import { reducer, init_state } from './reducer';


export const profileStore = {
    namespace: 'profile',
    reducer,
    init_state,
    actions,
};
