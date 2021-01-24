
exports.up = (knex) => knex.schema.createTable('tb_users', table => {
  table.increments('cd_user')

  table.string('nm_user').notNullable()
  table.string('ds_email').unique()
  table.string('cd_password').unique()
  table.string('cd_phone').unique()
  table.timestamp('created_at').defaultTo(knex.fn.now());
  table.timestamp('updated_at').defaultTo(knex.fn.now());

})

exports.down = knex => knex.schema.dropTable('tb_users');

