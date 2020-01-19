import {RootState} from 'core/store/configureStore';

export const getToken = (state: RootState) => state.auth.token;
