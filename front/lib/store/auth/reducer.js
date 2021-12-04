import fp from 'lodash/fp';

import { actions } from './actions';


export const init_state = {
    stagesData: {},
};


export const reducer = {
    [actions.addStage]: (state, { data }) => (
        fp.merge(
            state,
            { stagesData: data },
        )
    ),
};
