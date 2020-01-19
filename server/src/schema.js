const { schemaComposer } = require('graphql-compose');

require('./graphql/types');

schemaComposer.Query.addFields(require('./graphql/queries'));
schemaComposer.Mutation.addFields(require('./graphql/mutations'));

module.exports = schemaComposer.buildSchema();
