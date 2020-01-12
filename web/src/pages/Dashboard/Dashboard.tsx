import React from 'react';
import {gql} from 'apollo-boost';

import styles from './dashboard.module.scss';
import {useQuery} from '@apollo/react-hooks';

export interface IDashboard {}

const getUser = gql`
	query getUser($id: Int!) {
		user(id: $id) {
			id
			name
			notes {
				id
				title
			}
		}
	}
`;

const Dashboard: React.FC<IDashboard> = () => {
	const {loading, error, data} = useQuery(getUser, {variables: {id: 1}});

	if (loading) return <div>loading</div>;
	console.log(error);
	if (error) return <div>Error...</div>;

	return <div className={styles.app}>{data.user.id}</div>;
};

export default Dashboard;
