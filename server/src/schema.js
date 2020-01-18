const { schemaComposer } = require('graphql-compose');

// We have to require file with types to initialize them in schemaComposer
require('./types');

schemaComposer.Query.addFields({
	notes: {
		type: '[Note!]!',
		resolve: (_, __, ctx) => ctx.withAuth(() => ctx.models.Note.getAll()),
	},
	note: {
		type: 'Note!',
		args: { id: 'Int!' },
		resolve: (_, { id }, ctx) => ctx.withAuth(() => ctx.models.Note.getById(id)),
	},
	users: {
		type: '[User!]!',
		resolve: (_, __, ctx) => ctx.withAuth(() => ctx.models.User.getAll()),
	},
	user: {
		type: 'User!',
		args: { id: 'Int!' },
		resolve: (_, { id }, ctx) => ctx.withAuth(() => ctx.models.User.getById(id)),
	},
	loginUser: {
		type: 'User!',
		args: { name: 'String!', password: 'String!' },
		resolve: (_, args, ctx) => ctx.models.User.login(args),
	},
});

schemaComposer.Mutation.addFields({
	registerUser: {
		type: 'User!',
		args: { name: 'String!', password: 'String!' },
		resolve: (_, args, ctx) => ctx.models.User.register(args, ctx),
	},
});

module.exports = schemaComposer.buildSchema();
