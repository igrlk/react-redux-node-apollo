const { schemaComposer } = require('graphql-compose');

const knex = require('./knex');

require('./types/Note');
require('./types/User');

schemaComposer.Query.addFields({
	notes: {
		type: '[Note]',
		resolve: () => knex('notes').select(),
	},
	note: {
		type: 'Note',
		args: { id: 'Int!' },
		resolve: (_, { id }) =>
			knex('notes')
				.where({ id })
				.first(),
	},
	users: {
		type: '[User]',
		resolve: () => knex('users').select(),
	},
	user: {
		type: 'User',
		args: { id: 'Int!' },
		resolve: async (_, { id }) =>
			knex('users')
				.where({ id })
				.first(),
	},
});

module.exports = schemaComposer.buildSchema();
