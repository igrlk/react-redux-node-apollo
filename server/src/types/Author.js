const { schemaComposer } = require('graphql-compose');

const posts = require('../data/posts');

const Author = schemaComposer.createObjectTC({
	name: 'Author',
	fields: {
		id: 'Int!',
		firstName: 'String',
		lastName: 'String',
	},
});

Author.addFields({
	posts: {
		type: '[Post]',
		resolve: author => posts.filter(post => post.authorId === author.id),
	},
	postCount: {
		type: 'Int',
		description: 'Number of Posts written by Author',
		resolve: author => posts.filter(post => post.authorId === author.id).length,
	},
});

module.exports = Author;
