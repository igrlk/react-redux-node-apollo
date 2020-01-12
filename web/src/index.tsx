import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import ApolloClient from 'apollo-boost';
import {ApolloProvider} from '@apollo/react-hooks';

import Routes from 'core/Routes';

import 'resources/styles/index.scss';

const client = new ApolloClient({
	uri: 'http://localhost:4000',
});

ReactDOM.render(
	<ApolloProvider client={client}>
		<BrowserRouter>
			<Routes />
		</BrowserRouter>
	</ApolloProvider>,
	document.getElementById('root'),
);
