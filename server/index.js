const { ApolloServer } = require('apollo-server');

const knex = require('./src/knex');
const schema = require('./src/schema');
const models = require('./src/models');

Promise.resolve()
	.then(async () => {
		await knex.schema.dropTable('notes');
		await knex.schema.dropTable('users');
		await knex.schema.createTable('users', table => {
			table.increments('id');
			table.string('name');
		});

		await knex.schema.createTable('notes', table => {
			table.increments('id');
			table.string('title');
			table.string('text');
			table.integer('userId');
			table.foreign('userId').references('users.id');
		});

		const mapToDB = [
			{
				name: 'Admin',
				notes: [
					{
						title: "First Admin's note",
						text: 'Hi. This is my very first note at this application',
					},
					{
						title: 'Second note! Yahoo!',
						text: "I'm not sure what to post here",
					},
				],
			},
			{
				name: 'user',
				notes: [
					{
						title: 'some title',
						text: 'some text lmao',
					},
				],
			},
		];

		for (const item of mapToDB) {
			await knex('users').insert({
				name: item.name,
			});

			const user = await knex('users')
				.where({ name: item.name })
				.first();

			for (const note of item.notes) {
				await knex('notes').insert({
					title: note.title,
					text: note.text,
					userId: user.id,
				});
			}
		}
	})
	.then(() => {
		const server = new ApolloServer({
			schema,
			context: () => {
				return { models };
			},
		});
		server.listen().then(({ url }) => {
			console.log(`🚀  Server ready at ${url}`);
		});
	});
