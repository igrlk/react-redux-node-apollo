const { AuthenticationError } = require('apollo-server');
const jwt = require('jsonwebtoken');

const db = require('./models');

module.exports = async ({ req, res }) => {
	try {
		const user = await getUserFromReq(req);

		const hasRole = role => (user && Array.isArray(user.roles) ? user.roles.includes(role) : false);
		const withAuth = cb => (user ? cb() : new AuthenticationError(`User is not authenticated`));

		return { req, res, models: { User: db.User, Note: db.Note }, user, hasRole, withAuth };
	} catch (e) {
		throw new AuthenticationError('Token is incorrect');
	}
};

async function getUserFromReq(req) {
	const [, token] = (req.headers.authorization || '').split(' ');
	if (token) {
		const payload = jwt.verify(token, process.env.JWT_SECRET_KEY);
		const { id } = payload;
		if (id) {
			const user = await db.User.findByPk(id);
			if (user) {
				return user;
			}
		}
	}

	return null;
}
