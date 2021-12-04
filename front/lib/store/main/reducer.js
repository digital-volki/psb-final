import fp from 'lodash/fp';

import { actions } from './actions';


export const init_state = {
    client: null,
    search: '',
    modal: {
        type: null,
        callback: () => (''),
        message: null,
        background: null,
        icon: null,
    },
};


export const reducer = {
    [`${actions.setFilters}`]: (state, payload) => fp.merge(
        state,
        {
            search: payload,
        },
    ),
    [`${actions.showModal}`]: (state, payload) =>
        fp.merge(
            state,
            {
                modal: payload,
            },
        ),
    [`${actions.hideModal}`]: (state, callArgs) => {
        try {
            state.modal.callback(callArgs);
            return (fp.merge(
                state,
                {
                    modal: init_state.modal,
                },
            ));
        } catch (e) {
            console.log(e);
            return state;
        }
    },
};
