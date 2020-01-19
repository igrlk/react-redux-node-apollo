const fs = require('fs');
const path = require('path');
const basename = path.basename(__filename);

let queries = {};

fs.readdirSync(__dirname)
	.filter(file => {
		return file.indexOf('.') !== 0 && file !== basename && file.slice(-3) === '.js';
	})
	.forEach(file => (queries = Object.assign(queries, require('./' + file))));

module.exports = queries;
