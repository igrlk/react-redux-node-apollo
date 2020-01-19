import React, {FC} from 'react';
import {useQuery} from '@apollo/react-hooks';
import {gql} from 'apollo-boost';

import {logoutUser} from 'library/common/actions/authActions';

import styles from './header.module.scss';
import {GetUserName, GetUserNameVariables} from './__generated__/GetUserName';

const GetUserNameQuery = gql`
	query GetUserName($id: Int!) {
		user(id: $id) {
			name
		}
	}
`;

interface IHeader {
	logoutUser: typeof logoutUser;
}

const Header: FC<IHeader> = ({logoutUser}) => {
	const {data, loading} = useQuery<GetUserName, GetUserNameVariables>(GetUserNameQuery, {variables: {id: 1}});
	return (
		<div className={styles.header}>
			<div className={styles.headerInner}>
				<div className={styles.title}>Notes app</div>
				<div className={styles.rightSide}>
					<div className={styles.rightSideUsername}>{loading ? <div>Loading</div> : data && data.user.name}</div>
					<div className={styles.rightSideLogout} onClick={logoutUser}>
						Logout
					</div>
				</div>
			</div>
		</div>
	);
};

export default Header;
