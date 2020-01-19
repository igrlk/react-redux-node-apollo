import {combineReducers} from 'redux';
import {connectRouter} from 'connected-react-router';

import authReducer from 'library/common/reducers/authReducer';

const createCoreReducer = (history: any) =>
	combineReducers({
		router: connectRouter(history),
		auth: authReducer,
	});

export default createCoreReducer;
