exports.up = (knex) => knex.schema.createTable('tb_day_provider', table => {
	table.increments('cd_dayProvider').notNullable();
	table.boolean('ds_sunday');
	table.boolean('ds_monday');
	table.boolean('ds_tuesday');
	table.boolean('ds_wednesday');
	table.boolean('ds_thursday');
	table.boolean('ds_friday');
	table.boolean('ds_saturday');

	//fk - tb_provider
	table.integer('cd_provider_id').unsigned().notNullable();
	table.foreign('cd_provider_id').references('tb_service_provider.cd_provider')
	table.timestamp('deleted_at').defaultTo(null);
})

exports.down = knex => knex.schema.dropTable('tb_day_provider');
