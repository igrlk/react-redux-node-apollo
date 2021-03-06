'use strict';
const { hashSync } = require('bcrypt');

module.exports = {
	up: (queryInterface, Sequelize) => {
		return queryInterface.bulkInsert(
			'Users',
			[
				{
					id: 1,
					name: 'Admin',
					password: hashSync('qwe', 10),
					roles: ['user', 'admin'],
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					id: 2,
					name: 'User',
					password: hashSync('123', 10),
					roles: ['user'],
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					id: 3,
					name: 'Moderator',
					password: hashSync('123', 10),
					roles: ['user', 'moderator'],
					createdAt: new Date(),
					updatedAt: new Date(),
				},
			],
			{},
		);
	},

	down: (queryInterface, Sequelize) => {
		return queryInterface.bulkDelete('Users', null, {});
	},
};
