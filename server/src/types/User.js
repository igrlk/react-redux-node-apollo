const { schemaComposer } = require('graphql-compose');

const knex = require('../knex');

const User = schemaComposer.createObjectTC({
	name: 'User',
	fields: {
		id: 'Int!',
		name: 'String',
	},
});

User.addFields({
	notes: {
		type: '[Note]',
		resolve: ({ id }) => knex('notes').where({ userId: id }),
	},
});

module.exports = User;
