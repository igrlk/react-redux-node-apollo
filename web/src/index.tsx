import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import {HttpLink} from 'apollo-boost';
import {ApolloProvider} from '@apollo/react-hooks';
import {Provider} from 'react-redux';
import {setContext} from 'apollo-link-context';
import {InMemoryCache} from 'apollo-cache-inmemory';
import ApolloClient from 'apollo-client';

import Storage from 'library/utilities/storage';
import Routes from 'core/Routes';
import {applicationStore} from 'core/store/configureStore';

import 'resources/styles/index.scss';

const httpLink = new HttpLink({
	uri: 'http://localhost:4000',
});

const authLink = setContext((_, {headers}) => {
	const token = Storage.getItem('token');
	return {
		headers: {
			...headers,
			authorization: token ? `Bearer ${token}` : '',
		},
	};
});

const client = new ApolloClient({
	link: authLink.concat(httpLink),
	cache: new InMemoryCache(),
});

ReactDOM.render(
	<Provider store={applicationStore}>
		<ApolloProvider client={client}>
			<BrowserRouter>
				<Routes />
			</BrowserRouter>
		</ApolloProvider>
	</Provider>,
	document.getElementById('root'),
);
