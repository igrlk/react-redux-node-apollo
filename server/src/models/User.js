const knex = require('../knex');

module.exports = {
	getAll: () => knex('users'),

	getById: id =>
		knex('users')
			.where({ id })
			.first(),
};
