const { schemaComposer } = require('graphql-compose');

const User = schemaComposer.createObjectTC({
	name: 'User',
	fields: {
		id: 'Int!',
		name: 'String!',
	},
});

User.addFields({
	notes: {
		type: '[Note!]!',
		resolve: ({ id }, _, ctx) => ctx.models.Note.findAll({ where: { userId: id } }),
	},
});

module.exports = User;
