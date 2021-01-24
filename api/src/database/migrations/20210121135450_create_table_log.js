exports.up = (knex) => knex.schema.createTable('tb_log', table => {
	table.increments('cd_log').notNullable();
	table.string('ds_status');
	table.string('ds_descriptions');

	table.timestamp('created_at').defaultTo(knex.fn.now());

})

exports.down = knex => knex.schema.dropTable('tb_log');
