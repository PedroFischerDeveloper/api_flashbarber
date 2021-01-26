exports.up = (knex) => knex.schema.createTable('tb_hours_provider', table => {
  table.increments('cd_hoursProvider').notNullable();
  table.time('hr_provider').notNullable();

  //fk - tb_provider
  table.integer('cd_provider_id').unsigned().notNullable();
  table.foreign('cd_provider_id').references('tb_service_provider.cd_provider')

  table.timestamp('deleted_at').defaultTo(null);
})

exports.down = knex => knex.schema.dropTable('tb_hours_provider');
