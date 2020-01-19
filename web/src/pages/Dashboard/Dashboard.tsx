import React from 'react';
import {useQuery} from '@apollo/react-hooks';

import styles from './dashboard.module.scss';

export interface IDashboard {}

const Dashboard: React.FC<IDashboard> = () => {
	return <div>Dashboard</div>;
};

export default Dashboard;
