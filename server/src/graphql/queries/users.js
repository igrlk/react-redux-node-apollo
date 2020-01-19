module.exports = {
	users: {
		type: '[User!]!',
		resolve: (_, __, ctx) => ctx.withAuth(() => ctx.models.User.findAll()),
	},
	user: {
		type: 'User!',
		args: { id: 'Int!' },
		resolve: (_, { id }, ctx) => ctx.withAuth(() => ctx.models.User.findByPk(id)),
	},
};
