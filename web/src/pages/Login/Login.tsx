import React, {useState, useEffect} from 'react';
import {gql} from 'apollo-boost';
import {useLazyQuery} from '@apollo/react-hooks';

import {authUser} from 'library/common/actions/authActions';
import {LoginUser, LoginUserVariables} from './__generated__/LoginUser';

import styles from './login.module.scss';

export const LoginQuery = gql`
	query LoginUser($name: String!, $password: String!) {
		loginUser(name: $name, password: $password) {
			user {
				id
				name
				notes {
					id
					title
				}
			}
			token
		}
	}
`;

export interface ILogin {
	authUser: typeof authUser;
}

const Login: React.FC<ILogin> = ({authUser}) => {
	const [name, setName] = useState<string>('Admin');
	const [password, setPassword] = useState<string>('qwe');

	const [loginQuery, {data}] = useLazyQuery<LoginUser, LoginUserVariables>(LoginQuery);
	useEffect(() => {
		if (!data) return;

		authUser(data.loginUser.token);
	}, [data]);

	return (
		<div className={styles.app}>
			<input value={name} onChange={e => setName(e.target.value)} />
			<input value={password} onChange={e => setPassword(e.target.value)} />
			<button onClick={() => loginQuery({variables: {name, password}})}>Submit</button>
		</div>
	);
};

export default Login;
