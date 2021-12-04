import { create_action_namespace } from '../utils';


const auth = create_action_namespace('auth');


export const actions = {
    addStage: auth('ADD_STAGE'),
};
