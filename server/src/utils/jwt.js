const jwt = require('jsonwebtoken');

module.exports.getJWTToken = user =>
	jwt.sign(
		{
			id: user.id,
			name: user.name,
		},
		process.env.JWT_SECRET_KEY,
	);
