const bcrypt = require('bcrypt');
const { ApolloError, AuthenticationError } = require('apollo-server');

const { getJWTToken } = require('../../utils/jwt');

module.exports = {
	loginUser: {
		type: 'AuthResult!',
		args: { name: 'String!', password: 'String!' },
		resolve: async (_, { name, password }, ctx) => {
			const user = await ctx.models.User.findOne({ where: { name } });

			if (!user) return new ApolloError('User does not exists', 404);

			const matched = await bcrypt.compare(password, user.password);
			if (!matched) return new AuthenticationError('Invalid credentials');

			return {
				user,
				token: getJWTToken(user),
			};
		},
	},
};
