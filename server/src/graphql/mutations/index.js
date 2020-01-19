const fs = require('fs');
const path = require('path');
const basename = path.basename(__filename);

let mutations = {};

fs.readdirSync(__dirname)
	.filter(file => {
		return file.indexOf('.') !== 0 && file !== basename && file.slice(-3) === '.js';
	})
	.forEach(file => (mutations = Object.assign(mutations, require('./' + file))));

module.exports = mutations;
