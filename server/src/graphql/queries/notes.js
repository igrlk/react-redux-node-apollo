module.exports = {
	notes: {
		type: '[Note!]!',
		resolve: (_, __, ctx) => ctx.withAuth(() => ctx.models.Note.findAll()),
	},
	note: {
		type: 'Note!',
		args: { id: 'Int!' },
		resolve: (_, { id }, ctx) => ctx.withAuth(() => ctx.models.Note.findByPk(id)),
	},
};
