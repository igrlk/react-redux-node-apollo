const { AuthenticationError } = require('apollo-server');
const jwt = require('jsonwebtoken');

const knex = require('./knex');
const models = require('./models');

module.exports = async ({ req, res }) => {
	let user;
	try {
		user = await getUserFromReq(req);
	} catch (e) {
		throw new AuthenticationError('Token is incorrect');
	}

	const hasRole = role => (user && Array.isArray(user.roles) ? user.roles.includes(role) : false);
	const withAuth = cb => (user ? cb() : new AuthenticationError(`User is not authenticated`));

	return { req, res, models, user, hasRole, withAuth };
};

async function getUserFromReq(req) {
	const { token } = req.headers;
	if (token) {
		const payload = jwt.verify(token, process.env.JWT_SECRET_KEY);
		const { id } = payload;
		if (id) {
			const user = await knex('users')
				.where({ id })
				.first();
			if (user) {
				return user;
			}
		}
	}

	return null;
}
