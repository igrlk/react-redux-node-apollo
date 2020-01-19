import {createAction} from 'typesafe-actions';

import {AuthTypes} from '../types/authTypes';

export const authUser = createAction(AuthTypes.AUTH_USER)<string>();
export const logoutUser = createAction(AuthTypes.LOGOUT_USER)();
