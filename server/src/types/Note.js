const { schemaComposer } = require('graphql-compose');

const Note = schemaComposer.createObjectTC({
	name: 'Note',
	fields: {
		id: 'Int!',
		title: 'String!',
		text: 'String!',
		userId: 'Int!',
	},
});

Note.addFields({
	user: {
		type: 'User!',
		resolve: ({ userId }, _, ctx) => ctx.models.User.getById(userId),
	},
});

module.exports = Note;
