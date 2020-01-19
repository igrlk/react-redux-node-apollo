'use strict';
module.exports = (sequelize, DataTypes) => {
	const User = sequelize.define(
		'User',
		{
			name: DataTypes.STRING,
			password: DataTypes.STRING,
			roles: DataTypes.ARRAY(DataTypes.STRING),
		},
		{},
	);
	User.associate = function(models) {
		User.hasMany(models.Note, { as: 'Notes', foreignKey: 'userId' });
	};
	return User;
};
