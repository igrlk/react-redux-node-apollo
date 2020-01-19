'use strict';

module.exports = {
	up: (queryInterface, Sequelize) => {
		return queryInterface.bulkInsert(
			'Notes',
			[
				{
					title: 'Admin note 1',
					text: 'Some text for note 1',
					createdAt: new Date(),
					updatedAt: new Date(),
					userId: 1,
				},
				{
					title: 'Note 2 for admin',
					text: 'qwe',
					createdAt: new Date(),
					updatedAt: new Date(),
					userId: 1,
				},
				{
					title: 'Note 3 for common user',
					text: '123123123',
					createdAt: new Date(),
					updatedAt: new Date(),
					userId: 2,
				},
			],
			{},
		);
	},

	down: (queryInterface, Sequelize) => {
		return queryInterface.bulkDelete('Notes', null, {});
	},
};
