const { schemaComposer } = require('graphql-compose');

const knex = require('../knex');

const Note = schemaComposer.createObjectTC({
	name: 'Note',
	fields: {
		id: 'Int!',
		title: 'String',
		text: 'String',
		userId: 'Int',
	},
});

Note.addFields({
	user: {
		type: 'User',
		resolve: ({ userId }) => {
			return knex('users')
				.where({ id: userId })
				.first();
		},
	},
});

module.exports = Note;
