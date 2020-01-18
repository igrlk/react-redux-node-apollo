const { ApolloError } = require('apollo-server');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const knex = require('../knex');

module.exports = {
	getAll: () => knex('users'),

	getById: id =>
		knex('users')
			.where({ id })
			.first(),

	register: async ({ name, password }, ctx) => {
		const user = await knex('users')
			.where({ name })
			.first();

		if (user) return new ApolloError('User already exist', 401);

		const [createdUser] = await knex('users').insert(
			{
				name,
				password: bcrypt.hashSync(password, 10),
			},
			'*',
		);

		const token = jwt.sign(createdUser, process.env.JWT_SECRET_KEY);

		ctx.res.cookie('token', token, {
			httpOnly: true,
			maxAge: 1000 * 60 * 60 * 24 * 365,
		});

		return createdUser;
	},

	login: () => {},
};
