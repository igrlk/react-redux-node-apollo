import React from 'react';
import {Route, Switch} from 'react-router-dom';

import Dashboard from 'pages/Dashboard';

const Routes = () => (
	<Switch>
		<Route exact path='/' component={Dashboard} />
	</Switch>
);

export default Routes;
