import fp from 'lodash/fp';


export const nameFormatter = (userObj: any) => `${fp
    .getOr(' ', 'last_name', userObj)} ${fp
    .getOr(' ', 'first_name', userObj)} ${fp
    .getOr(' ', 'patronymic', userObj)}`;
