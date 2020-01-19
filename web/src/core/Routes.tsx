import React, {FC} from 'react';
import {Route, Switch, Redirect} from 'react-router-dom';
import {connect} from 'react-redux';

import Dashboard from 'pages/Dashboard';
import Login from 'pages/Login';
import Registration from 'pages/Registration';

import {RootState} from './store/configureStore';
import {getToken} from 'library/common/selectors/authSelectors';
import Header from 'library/modules/Header';

interface IRoutes {
	token: ReturnType<typeof getToken>;
}

const Routes: FC<IRoutes> = ({token}) => {
	return token ? (
		<>
			<Header />
			<Switch>
				<Route exact path='/' component={Dashboard} />
			</Switch>
			<Redirect to='/' />
		</>
	) : (
		<>
			<Switch>
				<Route exact path='/login' component={Login} />
				<Route exact path='/registration' component={Registration} />
			</Switch>
			<Redirect to='/login' />
		</>
	);
};

export default connect((store: RootState) => ({
	token: getToken(store),
}))(Routes);
