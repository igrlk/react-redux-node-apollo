import {takeLatest} from 'redux-saga/effects';

import {AuthTypes} from 'library/common/types/authTypes';
import Storage from 'library/utilities/storage';
import {history} from 'core/store/configureStore';

import * as actions from '../actions/authActions';

export default function* watchAuthSaga() {
	yield takeLatest(AuthTypes.AUTH_USER, authUserSaga);
	yield takeLatest(AuthTypes.LOGOUT_USER, logoutUserSaga);
}

export function authUserSaga(action: ReturnType<typeof actions.authUser>) {
	Storage.setItem('token', action.payload);
}

export function logoutUserSaga() {
	Storage.removeItem('token');
	history.push('/login');
}
