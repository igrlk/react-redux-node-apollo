import {ActionType, getType} from 'typesafe-actions';

import * as actions from 'library/common/actions/authActions';
import Storage from 'library/utilities/storage';

export type AuthState = Readonly<{
	token: string | null;
}>;

export const initialState: AuthState = {
	token: Storage.getItem('token'),
};

export type AuthActions = ActionType<typeof actions>;

export default (state = initialState, action: AuthActions): AuthState => {
	switch (action.type) {
		case getType(actions.authUser):
			return {
				...state,
				token: action.payload,
			};

		case getType(actions.logoutUser):
			return {
				...state,
				token: null,
			};

		default:
			return state;
	}
};
