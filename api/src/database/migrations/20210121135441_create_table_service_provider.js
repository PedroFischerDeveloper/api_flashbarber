
exports.up = (knex) => knex.schema.createTable('tb_service_provider', table => {
  table.increments('cd_provider')
  table.string('nm_provider').notNullable()
  table.string('ds_email').unique().notNullable()
  table.string('cd_password').unique().notNullable()

  table.timestamp('created_at').defaultTo(knex.fn.now());
  table.timestamp('updated_at').defaultTo(knex.fn.now());
  table.timestamp('deleted_at').defaultTo(null);

})

exports.down = knex => knex.schema.dropTable('tb_service_provider');

