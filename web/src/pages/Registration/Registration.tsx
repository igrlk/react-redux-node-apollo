import React from 'react';

import styles from './registration.module.scss';

export interface IRegistration {}

const Registration: React.FC<IRegistration> = () => {
	return <div className={styles.app}>Registration</div>;
};

export default Registration;
