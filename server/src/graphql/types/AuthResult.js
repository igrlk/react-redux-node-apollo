const { schemaComposer } = require('graphql-compose');

const AuthResult = schemaComposer.createObjectTC({
	name: 'AuthResult',
	fields: {
		user: 'User!',
		token: 'String!',
	},
});

module.exports = AuthResult;
