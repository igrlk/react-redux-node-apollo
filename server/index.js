require('dotenv').config();
const { ApolloServer } = require('apollo-server');

require('./src/models');
const schema = require('./src/schema');
const context = require('./src/context');

const server = new ApolloServer({
	schema,
	context,
});

server.listen().then(({ url }) => {
	console.log(`🚀  Server ready at ${url}`);
});
