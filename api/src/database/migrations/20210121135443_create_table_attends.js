exports.up = (knex) => knex.schema.createTable('tb_attends', table => {
	table.increments('cd_id').notNullable();
	table.boolean('cd_isAvaliable');
	table.datetime('dt_attends').notNullable();
	table.string('ds_description');

	//fk - tb_users_provider_attends
	table.integer('cd_users_provider_id').unsigned().notNullable();
	table.foreign('cd_users_provider_id').references('tb_users_provider_attends.cd_users_provider_attends');

	table.timestamp('created_at').defaultTo(knex.fn.now());
	table.timestamp('updated_at').defaultTo(knex.fn.now());

})

exports.down = knex => knex.schema.dropTable('tb_attends');
