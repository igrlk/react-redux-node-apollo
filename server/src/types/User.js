const { schemaComposer } = require('graphql-compose');

const User = schemaComposer.createObjectTC({
	name: 'User',
	fields: {
		id: 'Int!',
		name: 'String!',
		password: 'String!',
	},
});

User.addFields({
	notes: {
		type: '[Note]',
		resolve: ({ id }, _, ctx) => ctx.models.Note.getByUserId(id),
	},
});

module.exports = User;
