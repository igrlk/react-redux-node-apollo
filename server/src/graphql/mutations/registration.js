const bcrypt = require('bcrypt');
const { ApolloError } = require('apollo-server');

const { getJWTToken } = require('../../utils/jwt');

module.exports = {
	registerUser: {
		type: 'AuthResult!',
		args: { name: 'String!', password: 'String!' },
		resolve: async (_, { name, password }, ctx) => {
			const [user, wasCreated] = await ctx.models.User.findOrCreate({
				where: { name },
				defaults: {
					password: await bcrypt.hash(password, 10),
				},
			});

			const createdUser = {
				id: user.id,
				name: user.name,
				notes: user.getNotes(),
			};

			if (!wasCreated) return new ApolloError('User already exist', 401);

			return {
				user: createdUser,
				token: getJWTToken(user),
			};
		},
	},
};
