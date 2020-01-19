'use strict';
module.exports = (sequelize, DataTypes) => {
	const Note = sequelize.define(
		'Note',
		{
			title: DataTypes.STRING,
			text: DataTypes.STRING,
		},
		{},
	);
	Note.associate = function(models) {
		Note.belongsTo(models.User, { foreignKey: 'userId' });
	};
	return Note;
};
