const knex = require('../knex');

module.exports = {
	getAll: () => knex('notes'),

	getById: id =>
		knex('notes')
			.where({ id })
			.first(),

	getByUserId: userId => knex('notes').where({ userId }),
};
