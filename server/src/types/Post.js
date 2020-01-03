const { schemaComposer } = require('graphql-compose');

const authors = require('../data/authors');

const Post = schemaComposer.createObjectTC({
	name: 'Post',
	fields: {
		id: 'Int!',
		title: 'String',
		votes: 'Int',
		authorId: 'Int',
	},
});

Post.addFields({
	author: {
		type: 'Author',
		resolve: post => authors.find(author => author.id === post.authorId),
	},
});

module.exports = Post;
