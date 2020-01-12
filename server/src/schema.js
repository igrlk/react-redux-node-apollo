const { schemaComposer } = require('graphql-compose');

// We have to require file with types to initialize them in schemaComposer
require('./types');

schemaComposer.Query.addFields({
	notes: {
		type: '[Note]',
		resolve: (_, __, ctx) => ctx.models.Note.getAll(),
	},
	note: {
		type: 'Note',
		args: { id: 'Int!' },
		resolve: (_, { id }, ctx) => ctx.models.Note.getById(id),
	},
	users: {
		type: '[User]',
		resolve: (_, __, ctx) => ctx.models.User.getAll(),
	},
	user: {
		type: 'User',
		args: { id: 'Int!' },
		resolve: async (_, { id }, ctx) => ctx.models.User.getById(id),
	},
});

module.exports = schemaComposer.buildSchema();
