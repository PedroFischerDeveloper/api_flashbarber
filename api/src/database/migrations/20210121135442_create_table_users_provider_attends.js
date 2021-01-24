exports.up = (knex) => knex.schema.createTable('tb_users_provider_attends', table => {
	table.increments('cd_users_provider_attends');

	//fk - tb_users
	table.integer('cd_user_id').unsigned().notNullable();
	table.foreign('cd_user_id').references('tb_users.cd_user');

	//fk - tb_service_provider
	table.integer('cd_provider_id').unsigned().notNullable();
	table.foreign('cd_provider_id').references('tb_service_provider.cd_provider');

})

exports.down = knex => knex.schema.dropTable('tb_users_provider_attends');

