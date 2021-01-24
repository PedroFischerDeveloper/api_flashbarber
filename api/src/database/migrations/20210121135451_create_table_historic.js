exports.up = (knex) => knex.schema.createTable('tb_historic', table => {
	table.increments('cd_historic').notNullable();
	table.string('nm_user');
	table.string('nm_provider');
	table.string('ds_descriptions');
	table.datetime('dt_attends');

	table.timestamp('created_at').defaultTo(knex.fn.now());

})

exports.down = knex => knex.schema.dropTable('tb_historic');
