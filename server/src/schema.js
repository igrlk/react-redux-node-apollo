const { schemaComposer } = require('graphql-compose');

require('./types/Post');
require('./types/Author');

const posts = require('./data/posts');
const authors = require('./data/authors');

schemaComposer.Query.addFields({
	posts: {
		type: '[Post]',
		resolve: () => posts,
	},
	author: {
		type: 'Author',
		args: { id: 'Int!' },
		resolve: (_, { id }) => authors.find(author => author.id === id),
	},
});

schemaComposer.Mutation.addFields({
	upvotePost: {
		type: 'Post',
		args: {
			postId: 'Int!',
		},
		resolve: (_, { postId }) => {
			const post = posts.find(post => post.id === postId);
			if (!post) {
				throw new Error(`Couldn't find post with id ${postId}`);
			}
			post.votes += 1;
			return post;
		},
	},
});

module.exports = schemaComposer.buildSchema();
